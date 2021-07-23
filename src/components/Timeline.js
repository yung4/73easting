import React, { Component } from "react";

class Timeline extends Component {

	componentDidMount() {
		/*
		map = new google.maps.Map(document.getElementById("map"), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		  });
		  */
	}
	
	render() {
		return (
			<div id="map" style={{height: this.props.height, width: this.props.width}}>
				<h2>correlation of forces</h2>
			</div>
		)
	}
}

export default Timeline;