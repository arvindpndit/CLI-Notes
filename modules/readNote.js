const fs = require("fs");
const prompt = require("prompt-sync")();

function readNote() {
  const title = prompt("Add the title of the Note: ");

  fs.readFile(`${title}.txt`, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading note:", err);
    } else {
      console.log("Note content:", data);
    }
  });
}

module.exports = readNote;
