import React, { Component } from "react";

import { Card } from "react-bootstrap";

class SideCard extends Component {

    terrainAndWeather = () => {
        return (
            <Card.Body>
                <Card.Title>terrainandWEathero</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content. hheheheh ahahahah hdahdhadha fuck help
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    enemyAnalysis = () => {
        return (
            <Card.Body>
                <Card.Title>enemy analysis</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                enemy bad
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    friendlyUnits = () => {
        return (
            <Card.Body>
                <Card.Title>fren</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                我沒有朋友
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    mission = () => {
        return (
            <Card.Body>
                <Card.Title>mishon</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                kill bad guy
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    intent = () => {
        return (
            <Card.Body>
                <Card.Title>intent</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                i cant think of a stupid joke for this one
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    concepts = () => {
        return (
            <Card.Body>
                <Card.Title>concepts</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                i cant think of a dumb joke for this one too
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    objectives = () => {
        return (
            <Card.Body>
                <Card.Title>objective</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                win
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    decisions = () => {
        return (
            <Card.Body>
                <Card.Title>decisions</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                red pill or blue pill
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }

    default = () => {
        return (
            <Card.Body>
                <Card.Title>hahahahahahshdhahdahahahaha</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        );
    }


	
	render() {
        switch (this.props.index) {
            case 0:
                return ( < this.default /> );
            case 1:
                return ( < this.terrainAndWeather /> );
            case 2:
                return ( < this.enemyAnalysis /> );
            case 3:
                return ( < this.friendlyUnits /> );
            case 4:
                return ( < this.mission />);
            case 5:
                return ( < this.intent /> );
            case 6:
                return ( < this.concepts /> );
            case 7:
                return ( < this.objectives /> );
            case 8:
                return ( < this.decisions /> );
            default:
                return ( < this.default /> );
        }
	}
}

export default SideCard;