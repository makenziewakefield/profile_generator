const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? Nicknames are also acceptable :) ", (answer1) => {
  let name = answer1;
  console.log(`Nice to meet you, ${name}!`);

  rl.question("What is an activity you like doing? ", (answer2) => {
    let activity = answer2;
    console.log(`${activity} sounds like fun!`);

    rl.question("What is your favourite food? ", (answer3) => {
      let food = answer3;
      console.log(`${food} sounds delicious!`);

      rl.question("Are you a dog or a cat person? ", (answer4) => {
        let dogOrCat = answer4;
        console.log(`Can't argue with ${dogOrCat}.`);

        rl.question("If you could have one superpower, what would it be? ", (answer5) => {
          let superpower = answer5;
          console.log(`I'll let the Avengers know about your ${superpower} power 🦸`);

          const paragraph = `This is ${name}! They enjoy ${activity} and their favourite food is ${food}. If you asked them they wouls say they are a ${dogOrCat} person and if they could have one superpower it would be ${superpower}.`

          console.log(paragraph);

          rl.close();
        });
      });
    });
  });
});
