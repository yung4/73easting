import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import InfoDial from './info_components/InfoDial.js';
import LeftColInfo from './info_components/LeftColInfo';
import RightColInfo from './info_components/RightColInfo';

class Information extends Component {
	
	render() {
		return (
			<Container fluid>
				<Row>
					<Col>
						< InfoDial />
					</Col>
				</Row>

				<Row>
					<Col>
						< LeftColInfo />
					</Col>

					<Col>
						< RightColInfo />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Information;