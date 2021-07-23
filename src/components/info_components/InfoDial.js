import React, { Component } from "react";

class InfoDial extends Component {

    constructor() {
        super();

        this.state = {
            headings: ["Set Obj", "Change Bounds", "Emplace Defenses", "Attack", "Stop"],
            counter: 0
        };
    }

    next() {
        return (this.state.counter + 1) % this.state.headings.length
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

    list = () => {
        
    }
	
	render() {
        return (
            <div className="row" style={{alignItems: "center"}}>
                <button>{this.state.headings[0]}</button>

                <button>{this.state.headings[1]}</button>

                <button>{this.state.headings[2]}</button>

                <button>{this.state.headings[3]}</button>

                <button>{this.state.headings[4]}</button>

            </div>
        )
	}
}

export default InfoDial;