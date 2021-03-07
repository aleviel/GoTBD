import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CharDetails from '../charDetails/charDetails';
import Header from '../header/header';
import ItemList from '../itemList/itemList';
import RandomChar from '../randomChar/';
import ToggleBtn from './styles';

export default class App extends Component {
    state = {
        showChar: true,
        selectedChar: null
    }

    toggleChar = () => {
        this.setState(state => {
            return {
                showChar: !state.showChar
            }
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        const {showChar, selectedChar} = this.state;
        const content = showChar ? <RandomChar/> : null;
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <ToggleBtn
                                type="button"
                                className="btn btn-dark"
                                onClick={this.toggleChar}>
                                ToggleChar
                            </ToggleBtn>
                            {content}
                        </Col>
                    </Row>
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
                </Container>
            </>
        );
    }
}