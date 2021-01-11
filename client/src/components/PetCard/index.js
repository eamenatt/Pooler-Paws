import React from "react";
import Card from "react-bootstrap/Card";

function PetCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.bio}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Status: {props.adopted === "true" ? "Available for Adoption" : "Not Available for Adoption"}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PetCard;