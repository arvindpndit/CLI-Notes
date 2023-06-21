const readline = require("readline");

function showMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `    
  Welcome to CLI Notes🌻

    1. Create a note
    2. Read  a note
    3. Update a note
    4. Delete a note
    
  Choose one option from 1-4 : `,
    (userInput) => {
      switch (userInput) {
        case "1":
          console.log("calling create note");
          break;
        case "2":
          console.log("calling readFile function");
          break;
        case "3":
          console.log("updating create note");
          break;
        case "4":
          console.log("deleting note");
          break;
        default:
          console.log("Invalid");
      }
      rl.close();
    }
  );
}

module.exports = showMenu;
