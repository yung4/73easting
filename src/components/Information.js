import React, { Component } from "react";

import InfoDial from './info_components/InfoDial.js';
import LeftColInfo from './info_components/LeftColInfo';
import RightColInfo from './info_components/RightColInfo';

class Information extends Component {
	
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						< InfoDial />
					</div>
				</div>

				<div className="row">
					<div className="col">
						< LeftColInfo />
					</div>

					<div className="col">
						< RightColInfo />
					</div>
				</div>
			</div>
		)
	}
}

export default Information;