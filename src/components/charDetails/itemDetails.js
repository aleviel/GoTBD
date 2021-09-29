import React, { useEffect, useState } from 'react';

import Spinner from '../spinner';
import ErrorMsg from '../error';

import { CharDetailsBlock, SelectedError } from './styles';

const ItemDetails = ({ selectedChar, getData, msg, children }) => {
    const [state, setState] = useState({
        char: null,
        loading: true,
        error: false,
    });

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedChar]);

    const updateChar = () => {
        if (!selectedChar) {
            return;
        }

        setState({
            loading: true,
        });

        getData(selectedChar)
            .then(onUpdateChar)
            .catch(() => onError());
    };

    const onUpdateChar = (char) => {
        setState({
            char,
            loading: false,
        });
    };

    const onError = () => {
        this.setState({
            char: null,
            error: true,
        });
    };

    const { char, error, loading } = state;
    if (!char && error) {
        return <ErrorMsg />;
    } else if (!char) {
        return <SelectedError>{msg || ''}</SelectedError>;
    }

    if (loading) {
        return (
            <CharDetailsBlock className="rounded">
                <Spinner />
            </CharDetailsBlock>
        );
    }

    const { name } = char;

    return (
        <CharDetailsBlock className="rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {children.map((elem) => {
                    return React.cloneElement(elem, {
                        char,
                        key: elem.props.field,
                    });
                })}
            </ul>
        </CharDetailsBlock>
    );
};

export default ItemDetails;
