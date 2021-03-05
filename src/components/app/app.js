import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CharDetails from '../charDetails/charDetails';
import Header from '../header/header';
import ItemList from '../itemList/itemList';
import RandomChar from '../randomChar/';
import ToggleBtn from './styles';

export default class App extends Component {
    state = {
        showChar: true
    }

    toggleChar = () => {
        this.setState(state => {
            return {
                showChar: !state.showChar
            }
        })
    }

    render() {
        const {showChar} = this.state;
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
                            <ItemList/>
                        </Col>
                        <Col md={{size: 6, offset: 0}}>
                            <CharDetails/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}