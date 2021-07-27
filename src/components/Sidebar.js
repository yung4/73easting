import React, { Component } from "react";

//import { Accordion, Card } from "react-bootstrap";

import AccordionItem from "./sidebar_components/AccordionItem.js";
//import SideCard from "./sidebar_components/SideCard.js";

/*
return this.props.topArtists.map((artist) => (
			< TopArtistItem key={artist.id} artist={artist} />
		));
		*/
class Sidebar extends Component {
	constructor() {
		super();

		this.state = {
			headings: ["Terrain and Weather", "Enemy Analysis", "Friendly Units", "Mission", 
						"Intent/Higher HQ", "Concepts of Operation", "Objectives", "Decision Points", "pee pee poo poo"]
		};
	}
	
	render() {
		return this.state.headings.map((heading, index) =>
			< AccordionItem key={index} index={index + 1} heading={heading}/>
		)
	}
}

export default Sidebar;