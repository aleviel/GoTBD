import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../charDetails';
import ErrorMsg from '../error';
import GoTService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {
    gotService = new GoTService();

    state = {
        selectedHouse: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMsg/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={item => {
                    return `${item.name}`
                }}
            />
        )

        const itemDetails = (
            <ItemDetails
                selectedChar={this.state.selectedHouse}
                getData={this.gotService.getHouse}
                msg='Please select a house'>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }

}
