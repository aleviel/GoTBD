import React, { useState } from 'react';

import ItemList from '../itemList';
import ErrorMsg from '../error';
import ItemDetails  from '../charDetails';
import RowBlock from '../rowBlock';
import Field from '../field';

import GoTService from '../../services/gotService';

const BooksPage = () => {
    const gotService = new GoTService();

    const [state, setState] = useState({
        selectedBook: null,
        error: false,
    });

    const onItemSelected = (id) => {
        setState({
            selectedBook: id,
        });
    };

    const { error, selectedBook } = state;

    if (error) {
        return <ErrorMsg />;
    }

    const items = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={gotService.getAllBooks}
            renderItem={({ name }) => name}
        />
    );

    const details = (
        <ItemDetails
            selectedChar={selectedBook}
            getData={gotService.getBook}
            msg="Please select a book"
        >
            <Field field={'name'} label={'Name'} />
            <Field field={'numberOfPages'} label={'Number Of Pages'} />
            <Field field={'publisher'} label={'Publisher'} />
            <Field field={'released'} label={'Released'} />
        </ItemDetails>
    );

    return <RowBlock left={items} right={details} />;
};
export default BooksPage;
