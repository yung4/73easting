import React, { Component } from "react";

import { Accordion, Card } from "react-bootstrap";

import SideCard from "./SideCard.js";

class AccordionItem extends Component {
	
	render() {
        console.log(this.props);
		return (
			<Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.index}>
                    {this.props.heading}
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={this.props.index}>
                    < SideCard index={this.props.index}/>
                </Accordion.Collapse>
            </Card>
		)
	}
}

export default AccordionItem;