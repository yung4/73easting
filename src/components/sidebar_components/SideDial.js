import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

class SideDial extends Component {

    constructor() {
        super();

        this.state = {
            headings: ["Terrain and Weather", "Enemy Analysis", "Friendly Units", "Mission", "Intent/Higher HQ", "Concepts of Operation", "Objectives", "Decision Points"],
            counter: 0
        };
    }

    next() {
        return (this.state.counter + 1) % this.state.headings.length;
    }

    prev() {
        if (this.state.counter === 0) {
            return this.state.headings.length - 1;
        } else {
            return this.state.counter - 1;
        }
    }

    selectNext = () => {
        this.setState({counter: this.next()})
        console.log("counter: " + this.state.counter);
    }

    selectPrev = () => {
        this.setState({counter: this.prev()});
        console.log("counter: " + this.state.counter);
    }
	
	render() {


		return (
			<Row id="dial">
                <Col xs={3}>
                    <button onClick={this.selectPrev}>{this.state.headings[this.prev()]}</button>
                </Col>

                <Col xs={6}>
				    <h3>{this.state.headings[this.state.counter]}</h3>
                </Col>

                <Col xs={3}>
                    <button onClick={this.selectNext}>{this.state.headings[this.next()]}</button>
                </Col>
			</Row>
		)
	}
}

export default SideDial;