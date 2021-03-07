import React, {Component} from 'react';
import {CharDetailsBlock, Term, SelectedError} from './styles';
import GoTService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMsg from "../error";

export default class CharDetails extends Component {
    state = {
        char: null,
        loading: true,
        error: false
    }

    gotService = new GoTService();

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedChar !== this.props.selectedChar) {
            this.updateChar()
        }
    }

    updateChar = () => {
        const {selectedChar} = this.props;

        if (!selectedChar) {
            return
        }

        this.setState({
            loading: true
        })

        this.gotService.getChar(selectedChar)
            .then(this.onUpdateChar)
            .catch(() => this.onError())
    }

    onUpdateChar = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            char: null,
            error: true
        })
    }

    render() {
        const {char, error, loading} = this.state;
        if (!char && error) {
            return < ErrorMsg/>
        } else if (!char) {
            return (
                <SelectedError>Please select a character</SelectedError>
            )
        }

        if (loading) {
            return (
                <CharDetailsBlock className='rounded'>
                    <Spinner/>
                </CharDetailsBlock>
            )
        }

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <CharDetailsBlock className='rounded'>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Gender</Term>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Born</Term>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Died</Term>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <Term>Culture</Term>
                        <span>{culture}</span>
                    </li>
                </ul>
            </CharDetailsBlock>
        );
    }
}