const fs = require("fs");
const readline = require("readline");

function createNote() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Add the title of the Note : `, (title) => {
    rl.question(`Add the content of the Note : `, (content) => {
      fs.writeFile(`${title}.txt`, content, "utf8", (error) => {
        if (error) {
          console.log("Oops " + error);
        } else {
          console.log("Note created succesfully");
        }
        rl.close();
      });
    });
  });
}

module.exports = createNote;
