import React, { Component } from "react";

import * as L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, LayerGroup } from "react-leaflet";

import MapUnit from "./map_components/MapUnit";

class Map extends Component {
	
	constructor() {
		super();

		this.state = {
			positions: [[29.32222, 45.32222],[29.43111, 45.431111],[29.53778, 46.53778],[29.77333, 46.77333]],
			current: [29.422, 46.265],
			count: 0,
			title: "play",
			data: [
				[
					[28.85643634, 45.61394235], [29.71808695, 45.56638792], [29.97099315, 45.91328797], [29.9472007, 45.9817506], [30.21288568, 47.00748137], [29.82603589, 47.24900439], [29.82603589, 47.24900439], [29.51654584, 45.56988481]
				],
				[
					[28.83638362, 45.19401757], [29.27670444, 45.77230051], [29.26728993, 45.74063001], [29.51654584, 45.56988481], [29.52807889, 45.92479145], [30.22532593, 47.25797765], [30.24861429, 47.51781989], [30.03892971, 46.46242379]
				],
				[
					[28.85643634, 45.61394235], [29.27670444, 45.77230051], [28.86901146, 45.03977544], [29.9472007, 45.9817506], [30.21288568, 47.00748137], [29.82603589, 47.24900439], [29.82603589, 47.24900439], [29.51654584, 45.56988481]
				]
			]
		};
	}

	componentDidMount() {
		this.getPos();
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.getPos();
		}
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
		var center = [29.422, 46.265];

		var greenIcon = new L.Icon({
			iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});

		var tank = new L.Icon({
			iconUrl: "./tank.png",
			shadowUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		})
		
		return (
			<MapContainer center={center} zoom={8} scrollWheelZoom={true} doubleClickZoom={false} id="mapLeaflet">
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				<LayerGroup>

					<Marker position={center} icon={greenIcon}>
						<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>

					<Marker position={[29.32222, 45.32222]}>
						<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>

					<Marker position={[29.43111, 45.431111]}>
						<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>

					<Marker position={[29.53778, 46.53778]}>
						<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>

					<Marker position={[29.77333, 46.77333]}>
						<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>

				</LayerGroup>
				
				<LayerGroup>
					{
						this.state.data.map((path, index) => {
							var point = path[this.props.t]

							return (
								< MapUnit 
									key={index}
									position={point}
									duration={2000}
									icon={tank}
								/>
							)
						})
					}
				</LayerGroup>
			</MapContainer>
		)
	}
}

export default Map;