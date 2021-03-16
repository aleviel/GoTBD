import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/';
import {CharPage, HousesPage, BooksPage} from "../pages/";
import ToggleBtn from './styles';
import ErrorMsg from "../error";

export default class App extends Component {
    state = {
        showChar: true,
        error: false
    }

    componentDidCatch(error, info) {
        console.log(`error ${error}${info}`)
        this.setState({
            error: true
        })
    }


    toggleChar = () => {
        this.setState(state => {
            return {
                showChar: !state.showChar
            }
        })
    }

    render() {
        const {showChar, error} = this.state;
        const content = showChar ? <RandomChar/> : null;

        if (error) {
            return <ErrorMsg/>
        }

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
                    <CharPage/>
                    <BooksPage/>
                    <HousesPage/>
                </Container>
            </>
        );
    }
}