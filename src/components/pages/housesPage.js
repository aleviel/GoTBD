import React, { useState } from 'react';

import ItemList from '../itemList';
import ItemDetails from '../charDetails';
import ErrorMsg from '../error';
import RowBlock from '../rowBlock';
import Field from '../field';

import GoTService from '../../services/gotService';

const HousesPage = () => {
    const gotService = new GoTService();

    const [state, setState] = useState({
        selectedHouse: null,
        error: false,
    });

    const onItemSelected = (id) => {
        setState({
            selectedHouse: id,
        });
    };

    if (state.error) {
        return <ErrorMsg />;
    }

    const itemList = (
        <ItemList
            onItemSelected={onItemSelected}
            getData={gotService.getAllHouses}
            renderItem={(item) => {
                return `${item.name}`;
            }}
        />
    );

    const itemDetails = (
        <ItemDetails
            selectedChar={state.selectedHouse}
            getData={gotService.getHouse}
            msg="Please select a house"
        >
            <Field field="region" label="Region" />
            <Field field="words" label="Words" />
            <Field field="titles" label="Titles" />
            <Field field="ancestralWeapons" label="Ancestral Weapons" />
        </ItemDetails>
    );

    return <RowBlock left={itemList} right={itemDetails} />;
};
export default HousesPage;
