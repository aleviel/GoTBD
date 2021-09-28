import React, { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../header/header';
import RandomChar from '../randomChar/';
import { CharPage, HousesPage, BooksPage } from '../pages/';
import ErrorMsg from '../error';

import ToggleBtn from './styles';

const App = () => {
    const [state, setState] = useState({
        showChar: true,
        error: false,
    });

    const toggleChar = () => {
        setState((state) => {
            return {
                showChar: !state.showChar,
            };
        });
    };

    const { showChar, error } = state;
    const content = showChar ? <RandomChar /> : null;

    if (error) {
        return <ErrorMsg />;
    }

    return (
        <BrowserRouter>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        <ToggleBtn
                            type="button"
                            className="btn btn-dark"
                            onClick={toggleChar}
                        >
                            ToggleChar
                        </ToggleBtn>
                        {content}
                    </Col>
                </Row>
                <Route path="/characters" component={CharPage} />
                <Route path="/books" component={BooksPage} />
                <Route path="/houses" component={HousesPage} />
            </Container>
        </BrowserRouter>
    );
};

export default App;
