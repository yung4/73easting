import React, { Component } from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";

import Map from './Map.js';
import Sidebar from './Sidebar.js';
import Timeline from './Timeline.js';
import Information from './Information.js';
import MapControls from "./map_components/MapControls.js";

import { readFile } from "../api/readFile.js";

class Home extends Component {
	constructor() {
		super();

		this.state = {
			height: 0,
			width: 0,
			clientHeight: 0,
			clientWidth: 0,
			t: 0,
			max: 7, 
			playing: false
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

	//control functions

	reset = () => {
		this.setState({t: 0});
		console.log("reset!");
	}

	animate = () => {
		console.log("playing: " + this.state.playing);

		if (!this.state.playing) {
			console.log("DEAD")
			return;
		}

		if (this.state.t === this.state.max) {
			console.log("MAX");
			this.setState({playing: false});
			return;
		}
		
		//increment t every 5 sec
		console.log("play: " + this.state.t);
		this.next();

		setTimeout(() => { 
			//this.play();
			this.animate();
		}, 2000);
	}

	play = () => {
		//console.log("start of play: " + this.state.playing);
		if (this.state.t >= this.state.max) {
			//this.reset();
			return;
		}

		if (this.state.playing) {
			//console.log("playing -> not playing");
			this.setState({playing: false});
			return;
		} else {
			//console.log("not playing -> playing");
			this.setState({playing: true}, this.animate);
		}
	}

	next = () => {
		if (this.state.t < this.state.max) {
			var time = this.state.t;
			this.setState({t: time + 1});
		} else {
			this.setState({playing: false});
			this.reset();
		}
	}

	prev = () => {
		if (this.state.t > 0) {
			var time = this.state.t;
			this.setState({t: time - 1});
		}
	}

	//render functions
	componentDidMount() {
		
		window.addEventListener('resize', this.getCanvasDimensions);
		this.getCanvasDimensions();

		//window.removeEventListener('resize', this.getClientDimensions);
		//this.getClientDimensions();

		const file = "./Database.xlsx";
		readFile(file);
	}

	componentWillUnmount() {
		
		window.removeEventListener('resize', this.getCanvasDimensions);
		//window.removeEventListener('resize', this.getClientDimensions);
		
	}

	
	render() {
		return (
			<Container fluid>
				<Row id="top">
					<Col xs={8} id="Map" style={{padding: 0}}>
						<Col xs={8} className="canvas" >
							<div id="mapTitle">
								<h2>current phase</h2>
							</div>

							<div style={{height: this.state.height - 85}}></div>
							
							<MapControls
								title={"play"}
								play={this.play}
								prev={this.prev}
								next={this.next}
								playing={this.state.playing}
							/>
						</Col>

						< Map 
							t={this.state.t}
						/>
						
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