import React, {Component} from 'react';
import ListItem from './styles';
import GoTService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMsg from "../error";

export default class ItemList extends Component {

	state = {
		charList: null,
		error: false
	}

	gotService = new GoTService();

	componentDidMount() {
		this.gotService.getAllChars()
			.then((charList) => {
				this.setState({
					charList,
					error: false
				})
			})
			.catch(() => this.onError())
	}

	componentDidCatch() {
		this.setState(
			{
				charList: null,
				error: true
			}
		)
	}

	onError() {
		this.setState({
			charList: null,
			error: true
		})
	}

	renderItems(arr) {
		return arr.map((item) => {
			const {id, name} = item;
			const {onCharSelected} = this.props;
			return (
				<ListItem
					key={id}
					className="list-group-item"
					onClick={() => {
						onCharSelected(id);
					}}>
					{name};
				</ListItem>
			)
		})
	}


	render() {
		const {charList, error} = this.state;

		if (error) {
			return <ErrorMsg/>
		}

		if (!charList) {
			return <Spinner/>
		}

		const items = this.renderItems(charList)

		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}