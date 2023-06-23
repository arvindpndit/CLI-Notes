const fs = require("fs");
const prompt = require("prompt-sync")();

function updateNote() {
  const title = prompt("Add the title of the Note: ");
  const content = prompt("Enter the content of the Note: ");

  fs.writeFile(`${title}.txt`, content, "utf8", (err) => {
    if (err) {
      console.error("Error updating note:", err);
    } else {
      console.log("Note updated successfully!");
    }
  });
}

module.exports = updateNote;
