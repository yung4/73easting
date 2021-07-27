import React, { Component } from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";

import Map from './Map.js';
import Sidebar from './Sidebar.js';
import Timeline from './Timeline.js';
import Information from './Information.js';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			height: 0,
			width: 0,
			clientHeight: 0,
			clientWidth: 0
		};
	}

	getClientDimensions = () => {
		const height = document.getElementById("client").clientHeight;

		this.setState({clientHeight: height});

		const width = document.getElementById("client").clientWidth;

		this.setState({clientWidth: width});
	}

	getCanvasDimensions = () => {
		const height = document.getElementById("Map").clientHeight;
		//console.log(height);

		this.setState({height: height});

		const width = document.getElementById("Map").clientWidth;
		//console.log(width);

		this.setState({width: width});
	}

	componentDidMount() {
		window.addEventListener('resize', this.getCanvasDimensions);
		this.getCanvasDimensions();

		window.removeEventListener('resize', this.getClientDimensions);
		this.getClientDimensions();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.getCanvasDimensions);
		window.removeEventListener('resize', this.getClientDimensions);

		//this.getCanvasDimensions();
	}

	componentDidUpdate(prevProps, prevState) {
		//this.getCanvasDimensions();
		//console.log("updated: " + prevState);

		if (this.state !== prevState) {
			console.log("state change");
			console.log(this.state);
			console.log(prevState);
		}

	}
	
	render() {
		return (
			<Container fluid>
				<Row id="top">
					<Col xs={8} id="Map" style={{padding: 0}}>
						<Col xs={8} className="canvas" id="mapTitle">
							<h2>current phase</h2>
						</Col>
						< Map height={this.state.height} width={this.state.width} updated={this.state.updated}/>
					</Col>

					<Col xs={4} id="Sidebar">
						<h2>Orders</h2>
						< Accordion defaultActiveKey="0">
							< Sidebar />
						</ Accordion >
					</Col>
				</Row>

				<Row id="bottom">
					<Col xs={8} id="Timeline">
						< Timeline />
					</Col>

					<Col xs={4} id="Information">
						< Information />
					</Col>
				</Row>
				
			</Container>
		)
	}
}

export default Home;