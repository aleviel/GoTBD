import React, { Component } from 'react';
import { HeaderBlock, HeaderTitle, HeaderLinks } from './styles';

export default class Header extends Component {
	state = {}
	render() {
		return (
			<HeaderBlock>
				<HeaderTitle>
					<a href="#">
						Game of Thrones DB
                </a>
				</HeaderTitle>
				<HeaderLinks>
					<li>
						<a href="#">Characters</a>
					</li>
					<li>
						<a href="#">Houses</a>
					</li>
					<li>
						<a href="#">Books</a>
					</li>
				</HeaderLinks>
			</HeaderBlock>
		);
	}
}