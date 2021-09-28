import React, {Component} from 'react';
import ItemList from "../itemList";
import ItemDetails, {Field} from "../charDetails";
import ErrorMsg from "../error";
import GoTService from "../../services/gotService";
import RowBlock from "../rowBlock";

export default class CharPage extends Component {
    gotService = new GoTService()

    state = {
        selectedItem: null,
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }


    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const {selectedItem, error} = this.state;

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllChars}
                renderItem={item => {
                    return `${item.name} (${item.gender})`
                }}
            />
        )

        const charDetails = (
            <ItemDetails
                selectedChar={selectedItem}
                getData={this.gotService.getChar}
                msg='Please select a character'
            >
                <Field
                    field={'gender'}
                    label={'Gender'}/>
                <Field
                    field={'born'}
                    label={'Born'}/>
                <Field
                    field={'died'}
                    label={'Died'}/>
                <Field
                    field={'culture'}
                    label={'Culture'}/>
            </ItemDetails>
        )


        if (error) {
            return (
                <ErrorMsg/>
            )
        }

        return (
            <RowBlock
                left={itemList}
                right={charDetails}
            />
        );
    }
}
