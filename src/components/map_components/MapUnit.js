import React, { Component } from "react";
import tankImg from "../../img/tank.png";

import * as L from "leaflet";
import ReactLeafletDriftMarker  from "react-leaflet-drift-marker";

class MapUnit extends Component {
	constructor() {
		super();

		this.state = {
			positions: [],
			current: []
		}
	}

	componentDidMount() {
		//this.setPath();
		this.getPos();
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.getPos();
		}
	}

	setPath = () => {
		this.setState({positions: this.props.path});
		this.setState({current: this.props.path[0]}, this.getPos);
	}

	getPos = () => {
		if (!this.props.t) {
			this.setState({current: this.state.positions[0]});
		}
			
		if (this.props.t < this.state.positions.length) {
			this.setState({current: this.state.positions[this.props.t]});
		}

		return this.state.positions[0];
	}
	
	render() {

		var tank = new L.Icon({
			iconUrl: tankImg,
			shadowUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [40, 40],
			iconAnchor: [10, -10],
			popupAnchor: [1, -30],
			shadowSize: [50, 50],
			shadowAnchor: [0, 0]
		})

		return (
			<ReactLeafletDriftMarker
				position={this.props.position}
				duration={this.props.duration}
				icon={tank}
			></ReactLeafletDriftMarker>
		)
	}
}

export default MapUnit;