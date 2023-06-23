const fs = require("fs");
const prompt = require("prompt-sync")();

function deleteNote() {
  const title = prompt("Add the title of the Note: ");

  fs.unlink(`${title}.txt`, (err) => {
    if (err) {
      console.error("Error deleting note:", err);
    } else {
      console.log("Note deleted successfully!");
    }
  });
}

module.exports = deleteNote;
