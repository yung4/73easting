import React, { Component } from "react";

import { Card } from "react-bootstrap";

class SideCard extends Component {
    openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
            newWindow.opener = null
        }
    }

    terrainAndWeather = () => {
        return (
            <Card.Body>
                <Card.Title>terrain and weather</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                terrain and weather
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
        )
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
        )
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
        )
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
        )
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
        )
    }

    about = () => {
        return (
            <Card.Body>
                <Card.Title>about</Card.Title>
                <Card.Text>
                By Dr. Soren Matei, Capt. Bradford Witt, and Christopher Yung
                </Card.Text>
                <Card.Link onClick={() => this.openInNewTab("https://github.com/yung4/73easting")}>Git Repo</Card.Link>
                <Card.Link href="#">Settings</Card.Link>
                <input type="file" id="file-selector" ></input>
            </Card.Body>
        )
    }


	
	render() {
        switch (this.props.index) {
            case 0:
                return ("fuck");
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
            case 9:
                return ( < this.about /> );
            default:
                return (
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        If this appears, then something is wrong.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                );
        }
	}
}

export default SideCard;