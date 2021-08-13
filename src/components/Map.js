import React, { Component } from "react";

class Map extends Component {

	constructor() {
		super();

		this.map = new Image();
		this.map.src = "./73_easting_map.png";
		this.x = 0;
		this.y = 0;
		this.x2 = 0;
		this.y2 = 0;
		this.v2 = .5;
		this.horizontal = true;
		this.vertical = true;
		this.direction = true; //true = horizontal, false = vertical
		this.positive = true;
		this.animate = true;
	}

	drawMap() {
		var c = document.getElementById("mapCanvas");
		var ctx = c.getContext("2d");

		//console.log(this.map);

		var image = new Image();
	
		image.onload = function (e) {
			ctx.drawImage(image, 0, 0, c.width, c.height);
		}	
		
		//image.src = "./73_easting_map.png";
		image.src = "./map_2.JPG"
	}

	drawGrid() {
		var c = document.getElementById("gridCanvas");
		var ctx = c.getContext("2d");

		var w = c.width;
		var h = c.height;
		var i;

		
		for (i = 1; i <= 4; i++) {
			ctx.moveTo(Math.floor(i * (w / 4)), 0);
			ctx.lineTo(Math.floor(i * (w / 4)), h);
			ctx.stroke();
		}

		for (i = 1; i <= 3; i++) {
			ctx.moveTo(0, Math.floor(i * (h / 3)));
			ctx.lineTo(w, Math.floor(i * (h / 3)));
			ctx.stroke();
		}
	}

	drawAnimation = () => {
		var c = document.getElementById("drawCanvas");
		var ctx = c.getContext("2d");

		var w = c.width;
		var h = c.height;

		var v = 1;

		//clear canvas
		ctx.clearRect(0, 0, w, h);

		//save canvas for restoration later
		ctx.save();

		var circle = new Path2D();
		circle.arc(this.x, this.y, 9, 0, 2 * Math.PI);
		ctx.fillStyle = "red";
		ctx.fill(circle);

		//change paths
		if (this.x % Math.floor(w / 4) === 0 && this.y % Math.floor(h / 3) === 0) {
			var dir = Math.floor(Math.random() * 2);
			var sign = Math.floor(Math.random() * 2);

			this.direction = dir;
			this.horizontal = sign;
			this.vertical = sign;
		}

		// hit edges
		if (this.x <= 0) {
			this.horizontal = true;
		} else if (this.x >= w) {
			this.horizontal = false;
		}

		if (this.y <= 0) {
			this.vertical = true;
		} else if (this.y >= h) {
			this.vertical = false;
		}

		//change x or y
		if (this.direction) {
			//move horizontal
			if (this.horizontal) {
				this.x += v;
			} else {
				this.x -= v;
			}
		} else {
			//move vertical
			if (this.vertical) {
				this.y += v;
			} else {
				this.y -= v;
			}
		}

		ctx.restore();

		ctx.save();

		ctx.translate(Math.floor(w / 2), Math.floor(h / 2));

		var time = new Date();

		ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
		ctx.translate(105, 0);
		ctx.fillRect(0, 10, 20, 20); // Shadow

		ctx.restore();

		ctx.save();
/*
		ctx.translate(w - 100, h);

		
		ctx.restore();
		ctx.save();

		ctx.translate(w - 47, h - 210);
		*/

		var circle2 = new Path2D();
		circle2.arc(w - 100 + this.x2, h + (-4 * this.y2), 9, 0, 2 * Math.PI);
		ctx.fillStyle = "blue";
		ctx.fill(circle2);

		/*
		if (this.y2 <= 0 || this.y2 >= 210) {
			this.v2 *= -1;
		}

		if (this.x2 <= w || this.x2 >= 47) {
			this.v2 *= -1;
		}

		this.x2 += this.v2;
		this.y2 += this.v2;
		*/

		if (this.x2 > 53 || this.x2 < 0 || this.y2 > 210 || this.y2 < 0) {
			this.v2 *= -1;
		}

		this.x2 += this.v2;
		this.y2 += this.v2;

		ctx.restore();
		

		window.requestAnimationFrame(this.drawAnimation);
	}

	draw() {
		this.drawMap();
		//this.drawGrid();
		if (this.animate) {
			window.requestAnimationFrame(this.drawAnimation);
		}
	}

	componentDidMount() {
		//console.log("mounted");
		this.draw();
	}

	componentWillUnmount() {
		//console.log("unmount");
		this.draw();
	}

	componentDidUpdate(prevProps) {
		//console.log("map updated");
		//console.log("height: " + this.props.height);
		//console.log("width: " + this.props.width);

		if (this.props !== prevProps) {
			this.setState({x: 0});
			this.setState({y: 0});

			//console.log("unequal")
			this.animate = false;
		}

		this.draw();
	}

	//<img src="./73_easting_map.png" alt="73_eating_map" height={this.props.height} width={this.props.width}></img>
	
	render() {
		return (
			<div className="canvas">
				< canvas className="canvas" id="mapCanvas" height={this.props.height} width={this.props.width}>DEBUG: Canvas is not supported.</canvas>
				< canvas className="canvas" id="gridCanvas" height={this.props.height} width={this.props.width}>DEBUG: Canvas is not supported.</canvas>
				< canvas className="canvas" id="drawCanvas" height={this.props.height} width={this.props.width}>DEBUG: Canvas is not supported.</canvas>
			</div>
		)
	}
}

export default Map;