import React, { Component } from "react";

import Map from './Map.js';
import Sidebar from './Sidebar.js';
import Timeline from './Timeline.js';
import Information from './Information.js';

class Home extends Component {
	constructor() {
		super();

		this.state = {
			viewHeight: 0,
			viewWidth: 0,
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};
	}

	getClientDimensions = () => {
		const height = document.getElementById("client").clientHeight;

		this.setState({viewHeight: height});

		const width = document.getElementById("client").clientWidth;

		this.setState({viewWidth: width});

		console.log("height: " + height);
		console.log("width: " + width);
	}

	/*
	Originally, I had set the dimensions of each component to be a certain percentage of the viewport.
	However, I found that trying to calculate animations for the canvas did not scale well when the 
	window was resized. Since the canvas had to have a variable size but constant proportions, I had 
	to set the dimensions of each component to fit around the canvas. To make the canvas proportional,
	I will divide it up into a grid of 5x3 squares. This allows it to fit somewhat naturally into the 
	already existing map sections (38RMU, 38RNU, etc.). 

	I have split up the lengths of each component into 4 variables: top, bottom, left, and right.
	Each will be calculated using the width and height of the current viewport.
	
		left		right
		____________________
		|			|		|	top
		|			|		|
		|___________|_______|
		|			|		|	bottom
		|___________|_______|

	Equations for each length:
		square = viewWidth * 2/3 / 5
		left = 5 * square
		right = viewWidth - left
		top = 3 * square
		bottom = viewHeight - top

	hopefully this all works or i will have typed all this for nothing :(
	*/

	calculateDimensions = () => {
		var height = document.getElementById("client").clientHeight;
		var width = document.getElementById("client").clientWidth;

		//finds how large 2/3 of the window is for the approx. canvas width, then splits it into fifths
		var square = Math.ceil( Math.ceil(width * 2 / 3) / 4 );

		var left = 4 * square;
		var right = width - left;

		var top = 3 * square;
		var bottom = height - top;

		this.setState({left: left});
		this.setState({right: right});
		this.setState({top: top});
		this.setState({bottom: bottom});

		console.log(this.state);
	}

	resize = () => {
		this.getClientDimensions();
		this.calculateDimensions();
		console.log(this.state);
	}

	componentDidMount() {
		window.removeEventListener('resize', this.resize);
		this.resize();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);

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
			<div className="container-fluid">
				<div className="row" id="header">
					<div className="col-8">
						<h2>current phase</h2>
					</div>

					<div className="col-4" style={{backgroundColor: "lightblue"}}>
						<h2>orders</h2>
					</div>
				</div>

				<div className="row" id="top"  style={{padding: 0, height: this.state.top}}>
					<div className="col-8" id="Map">
						< Map height={this.state.top} width={this.state.left}/>
					</div>

					<div className="col-4" id="Sidebar">
						< Sidebar />
					</div>
				</div>

				<div className="row" id="bottom" style={{height: this.state.bottom}}>
					<div className="col-8" id="Timeline">
						< Timeline />
					</div>

					<div className="col-4" id="Information">
						< Information />
					</div>
				</div>
				

			</div>
		)
	}
}

export default Home;