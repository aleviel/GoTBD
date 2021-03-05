import React, {Component} from 'react';
import {Term, RandomBlock} from './styles';
import GoTService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMsg from '../error';

export default class randomChar extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    gotService = new GoTService();

    updateChar = () => {
        const id = Math.floor(Math.random() * 1000 + 25)
        this.gotService
            .getChar(id)
            .then(this.onLoaded)
            .catch(this.onError)
        console.log('updating')
    }

    onLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }


    render() {

        const {char, loading, error} = this.state;
        const errorM = error ? <ErrorMsg/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading | error) ? <View char={char}/> : null;
        return (
            <RandomBlock className='rounded'>
                {errorM}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4> Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Gender </Term>
                    <span> {gender} </span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Born </Term>
                    <span> {born} </span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Died </Term>
                    <span> {died} </span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <Term> Culture </Term>
                    <span> {culture} </span>
                </li>
            </ul>
        </>
    );
}