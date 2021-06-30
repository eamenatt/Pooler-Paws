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
                <h2 className="headline">Special Adoption Needed!</h2>
                <Jumbotron className="home-jumbotron">
                    <h3 className="headline">Meet Midnight!</h3>
                    <img className="storypic" src={`${process.env.PUBLIC_URL}/assets/midnight.jpg`} />
                    <p className="home-body">
                        Meet Midnight, the mascot and ambassador of Pooler Paws!  This handsome gentleman wasn't always so elegant and refined!  Last summer, Midnight was rescued following a tragic housefire that left the homeowner and several of her pets dead. The dozen cats who survived the fire were now left homeless. Pooler Paws was called in to help these poor kitties. Immediately our volunteers noticed that one of the kitties kept bumping into things and was being pushed away by the other cats when he tried to eat.  He also had some very bad burns on his back!  He was whisked off to the vets where it was determined he was blind probably due to a virus he contracted as a kitten.  He can see shapes, but that's it.  He is also a senior kitty, probably around 8 - 10 years old.  He was given medications for his burns, but there wasn't anything to be done with his vision.  Clearly, Midnight could not be returned the original home site, so he was brought back to the Cat House for treatment and he has just thrived!
                        Initially, he was kept in a large cage, where he could get used to his new surroundings in a small space and recuperate!  Midnight very quickly became a favorite of all who came in to care for him. We all marvelled at and were inspired by not only with his will to survive but his ability to adapt and thrive in a new situation. Soon Midnight was moved to a room, where he could roam a little bit, but with definite boundaries so he would feel safe and secure.  He quickly became the official welcoming committee to the new kitties being taken into the Cat House.  All seem drawn to him.  He is a calming influence on the sometimes very scared cats and kittens.  He also welcomes volunteers and visitors alike with purrs and head butts. 
                        A year later finds Midnight healthy and happy but without a permanent forever home! We adore having Midnight in the Cat House, but we think he deserves having a home where people  lavish attention on him and give him that stable environment that would make his life so much easier.
                        Can you give a vision-impaired, lovable, handsome, smart  senior cat that perfect home? In return, Midnight will complete your life with unconditional love, and the privilege of giving  him belly rubs and scratchies on a daily basis.  And if he sometimes mistakes your leg for a scratching post, it will just add to his charm! Please continue reading about another senior kitty who was adopted and the joy and happiness he's brought to his new cat parents!

                </p>
                <p>Story From: Karen Menatti</p>
                </Jumbotron>
            </Container>
            <Container>
                <h2 className="headline">Special Adoption Completed!</h2>
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
