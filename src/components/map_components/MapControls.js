import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

class MapControls extends Component {
    constructor() {
        super();

        this.state = {
            playing: false
        }
    }

    playBtn = () => {
        this.props.play();

        this.setState({playing: !this.state.playing})
    }

    title() { 
        if (this.state.playing) {
            return "Pause";
        } else {
            return "Play";
        }
    }

    render() {
        return (
            <ButtonGroup aria-label="Basic example" id="mapControl" size="lg">
                <Button variant="light" onClick={this.props.prev}>
                    Prev
                </Button>

                <Button variant="light" onClick={this.props.play}>
                    {this.props.playing ? "Pause" : "Play"}
                </Button>

                <Button variant="light" onClick={this.props.next}>
                    Next
                </Button>
            </ButtonGroup>
        )
    }
    
}

export default MapControls;