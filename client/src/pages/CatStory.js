import React from "react";
import Header from "../components/Header";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "../components/Navigation";
import Container from "react-bootstrap/Container";
import "./style.css";

function CatStory() {
    return (
        <div>
            <Header />
            <Navigation />
            <Container>
                <h2 className="headline">Share Your Story</h2>
                <Jumbotron className="home-jumbotron">
                    <h3 className="headline">Meet Marco, a rescue from the house fire kitties!</h3>
                    <img className="storypic" src={`${process.env.PUBLIC_URL}/assets/marco.jpg`} />
                    <p className="home-body">
                        Marco was part of large group of cats left homeless after the home they were living in burned down and the owner was tragically killed.  A call went out to Pooler Paws to help feed and see what needed to be done.  Initially, the kitties were understandably terrified and traumatized and while starving were very hesitant to come and eat unless you left the food and backed off.
                        All of them except Marco, that is! Mr. Friendly, as he was initially called, ran right up to our volunteers, waiting for them at the end of the driveway, winding his way around their legs, crawling into the cars ready to go home!  That made it very easy for Mr. Friendly to be captured for a trip to a vet for neutering and treatment of some very bad burns on his neck.  The vet recommended that Marco not be immediately returned to his home, but rather to a foster home to recuperate from his operation and, more importantly, treat his burns in a cleaner environment.  He was very thin and also needed to put on a couple of pounds.
                        So Mr. Friendly came home with me for what I thought would be about a week.  He was put in a bathroom with a litterbox as we were unsure if he even knew how to use a litterbox. He immediately used the litterbox, gobbled down the food left for him, then jumped into my lap purring to his heart’s content and promptly fell asleep.
                        The next day, when I went up to check on him, he shot out of the bathroom right into my husband’s chair in the office, circled around twice and laid down as if to say, “I’m Home!”  And he was!
                        While our other two cats were initially less than thrilled to have Marco around, they have made their peace and are often seen curled up together.  There are still a few hisses and spits when Marco plays a little too rough, but other than that, Marco has brought great joy and lots of laughs with his antics during this pandemic! He is so very happy to have found his forever home and we are so happy to have him here!
                </p>
                <p>Story From: Karen Menatti</p>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default CatStory;