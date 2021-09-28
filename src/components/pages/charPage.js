import React, { useState } from 'react';

import ItemList from '../itemList';
import ItemDetails from '../charDetails';
import ErrorMsg from '../error';
import RowBlock from '../rowBlock';
import Field from '../field';

import GoTService from '../../services/gotService';

const CharPage = () => {
    const gotService = new GoTService();

    const [state, setState] = useState({
        selectedItem: null,
        error: false,
    });

    const onItemSelected = (id) => {
        setState({
            selectedItem: id,
        });
    };

    const { selectedItem, error } = state;

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={gotService.getAllChars}
            renderItem={(item) => {
                return `${item.name} (${item.gender})`;
            }}
        />
    );

    const charDetails = (
        <ItemDetails
            selectedChar={selectedItem}
            getData={gotService.getChar}
            msg="Please select a character"
        >
            <Field field={'gender'} label={'Gender'} />
            <Field field={'born'} label={'Born'} />
            <Field field={'died'} label={'Died'} />
            <Field field={'culture'} label={'Culture'} />
        </ItemDetails>
    );

    if (error) {
        return <ErrorMsg />;
    }

    return <RowBlock left={itemList} right={charDetails} />;
};
export default CharPage;
