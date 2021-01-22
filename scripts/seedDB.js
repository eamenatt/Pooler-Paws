const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Cats collection and inserts the cats below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/catlist"
);

const catSeed = [
  {
    name: "SCAR",
    age: 3,
    details:
      "Meet Scar!  Not a nice name for such a lovable cat!  We think Scar was caught in the fire and some of the embers rained down on his back.  He must have suffered greatly with his injuries but remains so loving and so ready to be petted and loved.  His scars are healed now and we’re hoping his new owner will give him a new name and put all of his pain in the past.",
    picture: "scar.jpg",
    availability: true
  },
  {
    name: "FREDDIE",
    age: 3,
    details:
      "Freddie is one of the sweetest cats and definitely the one with the loudest purr! He even purrs while he eats! Freddie is very laid back and has a very calm and gentle personality.  He will often leave his feeding early to come over for some one-on-one time with the volunteers and proceeds to purr his heart out with all the attention.",
    picture: "freddie.jpg",
    availability: true
  },
  {
    name: "CHINNY CHIN CHIN",
    age: 3,
    details:
      "We actually call this beautiful girl CHIN for short because of her adorable black chin that contrasts with her white coat.  In spite of her living conditions, Chin is always meticulously clean.  This once shy girl is now super friendly and always one of the first to greet people as they come to feed and often prefers petting to eating!",
    picture: "chin.jpg",
    availability: true
  },
  {
    name: "TOMMIE",
    age: 4,
    details:
      "Meet our self-appointed leader of the pack!  Tommie is definitely the Cat in Charge and the one with the biggest personality.  When we first met Tommie (and before he was neutered) none of us thought he was adoptable.  Over time and since he was neutered, he has undergone a complete transformation! He’s still the leader of the pack, but he has now turned into Mr. Friendly, and instead of running away is now first in line to be petted.  With beautiful light green eyes, and fantastic markings he is a cat ready for a new home.",
    picture: "tommie.jpg",
    availability: true
  },
  {
    name: "MIDNIGHT",
    age: 2,
    details:
      "TBD",
    picture: "serena.jpg",
    availability: true
  },
  {
    name: "BOOTSIE",
    age: 3,
    details:
      "Bootsie is an absolute charmer!  She is extremely friendly, also one of the first to greet you as you’re pulling up in the car to feed!  She is so playful and full of life and is often seen chasing leaves, batting an old ball around, or trying to start a game of chase with the other kitties.   She has beautiful green eyes and we’re hoping her new owners will give her a new name to reflect her sparkling personality.",
    picture: "bootsie.jpg",
    availability: true
  }
];

db.Cat
  .remove({})
  .then(() => db.Cat.collection.insertMany(catSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
