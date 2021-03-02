import React, { Component } from 'react';
import { CharDetailsBlock, Term } from './styles';

export default class CharDetails extends Component {
	state = {}

	render() {

		return (
			<CharDetailsBlock className='rounded'>
				<h4>John Snow</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex justify-content-between">
						<Term>Gender</Term>
						<span>male</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<Term>Born</Term>
						<span>1783</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<Term>Died</Term>
						<span>1820</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<Term>Culture</Term>
						<span>First</span>
					</li>
				</ul>
			</CharDetailsBlock>
		);
	}
}