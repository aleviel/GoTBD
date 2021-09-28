import React, {Component} from 'react';
import {HeaderBlock, HeaderTitle, HeaderLinks} from './styles';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    state = {}

    render() {
        return (
            <HeaderBlock>
                <HeaderTitle>
                    <Link href="/">
                        Game of Thrones DB
                    </Link>
                </HeaderTitle>
                <HeaderLinks>
                    <li>
                        <Link  to="/characters">Characters</Link>
                    </li>
                    <li>
                        <Link to="/houses">Houses</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        );
    }
}
