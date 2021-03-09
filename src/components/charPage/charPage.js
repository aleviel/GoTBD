import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMsg from "../error";
import GoTService from "../../services/gotService";

export default class CharPage extends Component {
    gotService = new GoTService()

    state = {
        selectedItem: null,
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }


    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const {selectedItem, error} = this.state;

        if (error) {
            return (
                <ErrorMsg/>
            )
        }

        return (
            <Row>
                <Col md={{size: 6, offset: 0}}>
                    <ItemList
                        onItemSelected={this.onItemSelected}
                        getData={this.gotService.getAllChars}
                        renderItem={item => {
                            return `${item.name} (${item.gender})`
                        }}
                    />
                </Col>
                <Col md={{size: 6, offset: 0}}>
                    <CharDetails
                        selectedChar={selectedItem}/>
                </Col>
            </Row>
        );
    }
}