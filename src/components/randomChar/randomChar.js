import React, { useEffect, useState } from 'react';

import Spinner from '../spinner';
import ErrorMsg from '../error';

import GoTService from '../../services/gotService';

import { Term, RandomBlock } from './styles';

const RandomChar = () => {
    const gotService = new GoTService();

    const [state, setState] = useState({
        char: {},
        loading: true,
        error: false,
    });

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 15000);
        return () => {
            clearInterval(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateChar = () => {
        const id = Math.floor(Math.random() * 1000 + 25);
        gotService.getChar(id).then(onLoaded).catch(onError);
    };

    const onLoaded = (char) => {
        setState({
            char,
            loading: false,
        });
    };

    const onError = () => {
        setState({
            error: true,
            loading: false,
        });
    };

    const { char, loading, error } = state;
    const errorM = error ? <ErrorMsg /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;
    return (
        <RandomBlock className="rounded">
            {errorM}
            {spinner}
            {content}
        </RandomBlock>
    );
};

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4> Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Gender </Term>
                    <span> {gender} </span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Born </Term>
                    <span> {born} </span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Died </Term>
                    <span> {died} </span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Culture </Term>
                    <span> {culture} </span>
                </li>
            </ul>
        </>
    );
};

export default RandomChar;
