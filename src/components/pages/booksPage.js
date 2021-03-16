import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMsg from '../error';
import gotService from '../../services/gotService';
import CharDetails, {Field} from "../charDetails";
import RowBlock from "../rowBlock";

export default class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        const {error, selectedBook} = this.state;

        if (error) {
            return <ErrorMsg/>
        }

        const items = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}/>
        )

        const details = (
            <CharDetails
                selectedChar={selectedBook}
                getData={this.gotService.getBook}
            >
                <Field field={'name'}
                       label={'Name'}/>
                <Field field={'numberOfPages'}
                       label={'Number Of Pages'}/>
                <Field field={'publisher'}
                       label={'Publisher'}/>
                <Field field={'released'}
                       label={'Released'}/>

            </CharDetails>
        )

        return (
            <RowBlock
                left={items}
                right={details}
            />
        )
    }
}