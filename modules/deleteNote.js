const fs = require("fs");
const readline = require("readline");

function deleteNote() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the note title: ", (title) => {
    fs.unlink(`${title}.txt`, (err) => {
      if (err) {
        console.error("Error deleting note:", err);
      } else {
        console.log("Note deleted successfully!");
      }
      rl.close();
    });
  });
}

module.exports = deleteNote;
