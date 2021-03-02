import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CharDetails from '../charDetails/charDetails';
import Header from '../header/header';
import ItemList from '../itemList/itemList';
import RandomChar from '../randomChar/';

export default class App extends Component {
	state = {}
	render() {
		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>
							<RandomChar />
						</Col>
					</Row>
					<Row>
						<Col md={{ size: 6, offset: 0 }}>
							<ItemList />
						</Col>
						<Col md={{ size: 6, offset: 0 }}>
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}