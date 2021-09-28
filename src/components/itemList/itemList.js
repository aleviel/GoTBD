import React, { useEffect, useState } from 'react';

import Spinner from '../spinner';
import ErrorMsg from '../error';

import ListItem from './styles';

const ItemList = ({ getData, onItemSelected, renderItem }) => {
    const [state, setState] = useState({
        itemList: null,
        error: false,
    });

    useEffect(() => {
        getData()
            .then((itemList) => {
                setState({
                    itemList,
                    error: false,
                });
            })
            .catch(() => onError());
    }, [getData]);

    const onError = () => {
        setState({
            itemList: null,
            error: true,
        });
    };

    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = renderItem(item);
            return (
                <ListItem
                    key={id}
                    className="list-group-item"
                    onClick={() => {
                        onItemSelected(id);
                    }}
                >
                    {label};
                </ListItem>
            );
        });
    };

    const { itemList, error } = state;

    if (error) {
        return <ErrorMsg />;
    }

    if (!itemList) {
        return <Spinner />;
    }

    const items = renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
