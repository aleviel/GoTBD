import React, {Component} from 'react';
import {CharDetailsBlock, Term, SelectedError} from './styles';
import Spinner from "../spinner";
import ErrorMsg from "../error";

const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <Term>{label}</Term>
            <span>{char[field]}</span>
        </li>
    )
}

export {Field}

export default class CharDetails extends Component {
    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedChar !== this.props.selectedChar) {
            this.updateChar()
        }
    }

    updateChar = () => {
        const {selectedChar, getData} = this.props;

        if (!selectedChar) {
            return
        }

        this.setState({
            loading: true
        })

        getData(selectedChar)
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

        const {name} = char;

        return (
            <CharDetailsBlock className='rounded'>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }
                </ul>
            </CharDetailsBlock>
        );
    }
}
