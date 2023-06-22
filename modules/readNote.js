const fs = require("fs");
const readline = require("readline");

function readNote() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`write the title of the note`, (title) => {
    fs.readFile(`${title}.txt`, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading note:", err);
      } else {
        console.log("Note content:", data);
      }
      rl.close();
    });
  });
}

module.exports = readNote;
