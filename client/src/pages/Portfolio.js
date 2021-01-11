import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import PetCard from "../components/PetCard";

function Portfolio() {
    return (
        <div>
            <Navigation />
            <h2>Looking for a home</h2>
            <Container>
                <Row>
                    <Col size="md-12">
                        <PetCard
                            img="./assets/scar.jpg"
                            name="SCAR"
                            bio="Meet Scar! Not a nice name for such a lovable cat! We think Scar
                            was caught in the fire and some of the embers rained down on his back. He must have
                            suffered greatly with his injuries but remains so loving and so ready to be petted
                            and loved. His scars are healed now and we’re hoping his new owner will give him a
                            new name and put all of his pain in the past."
                            adopted="true"
                        />
                        <PetCard
                            img="./assets/freddie.jpg"
                            name="FREDDIE"
                            bio="Freddie is one of the sweetest cats and definitely the one with the 
                            loudest purr! He even purrs while he eats! Freddie is very laid back and has a very 
                            calm and gentle personality.  He will often leave his feeding early to come over for 
                            some one-on-one time with the volunteers and proceeds to purr his heart out with all the attention."
                            adopted="true"
                        />
                        <PetCard
                            img="./assets/chin.jpg"
                            name="CHINNY CHIN CHIN"
                            bio="We actually call this beautiful girl CHIN for short because of her adorable black 
                            chin that contrasts with her white coat.  In spite of her living conditions, Chin is always 
                            meticulously clean.  This once shy girl is now super friendly and always one of the first to 
                            greet people as they come to feed and often prefers petting to eating!"
                            adopted="true"
                        />
                        <PetCard
                            img="./assets/tommie.jpg"
                            name="TOMMIE"
                            bio="Meet our self-appointed leader of the pack!  Tommie (or ex-
                                Tommie) is definitely the Cat in Charge and the one with the biggest personality.  
                                When we first met Tommie (and before he was neutered) none of us thought he was adoptable.  
                                Over time and since he was neutered, he has undergone a complete transformation! He’s still 
                                the leader of the pack, but he has now turned into Mr. Friendly, and instead of running away 
                                is now first in line to be petted.  With beautiful light green eyes, and fantastic markings he 
                                is a cat ready for a new home."
                            adopted="true"
                        />
                        <PetCard
                            img="assets/venus.jpg"
                            name="Midnight"
                            bio="Meet Scar! Not a nice name for such a lovable cat! We think Scar
                            was caught in the fire and some of the embers rained down on his back. He must have
                            suffered greatly with his injuries but remains so loving and so ready to be petted
                            and loved. His scars are healed now and we’re hoping his new owner will give him a
                            new name and put all of his pain in the past."
                            adopted="true"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;