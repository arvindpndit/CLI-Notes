const fs = require("fs");
const prompt = require("prompt-sync")();

function createNote() {
  const title = prompt("Add the title of the Note: ");
  const content = prompt("Add the content of the Note: ");

  fs.writeFile(`${title}.txt`, content, "utf8", (error) => {
    if (error) {
      console.log("Oops! An error occurred: " + error);
    } else {
      console.log("Note created successfully");
    }
  });
}

module.exports = createNote;
