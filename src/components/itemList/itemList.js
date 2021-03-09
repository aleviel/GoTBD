import React, {Component} from 'react';
import ListItem from './styles';
import GoTService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMsg from "../error";

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    error: false
                })
            })
            .catch(() => this.onError())
    }

    componentDidCatch() {
        this.setState(
            {
                itemList: null,
                error: true
            }
        )
    }

    onError() {
        this.setState({
            itemList: null,
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const {onItemSelected} = this.props;
            const label = this.props.renderItem(item)
            return (
                <ListItem
                    key={id}
                    className="list-group-item"
                    onClick={() => {
                        onItemSelected(id);
                    }}>
                    {label};
                </ListItem>
            )
        })
    }


    render() {
        const {itemList, error} = this.state;

        if (error) {
            return <ErrorMsg/>
        }

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}