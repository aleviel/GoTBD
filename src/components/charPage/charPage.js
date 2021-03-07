import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class CharPage extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const {selectedChar} = this.state;

        return (
            <Row>
                <Col md={{size: 6, offset: 0}}>
                    <ItemList
                        onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md={{size: 6, offset: 0}}>
                    <CharDetails
                        selectedChar={selectedChar}/>
                </Col>
            </Row>
        );
    }
}