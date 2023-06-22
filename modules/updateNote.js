const fs = require("fs");
const readline = require("readline");

function updateNote() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the note title: ", (title) => {
    rl.question("Enter the updated note content: ", (content) => {
      fs.writeFile(`${title}.txt`, content, "utf8", (err) => {
        if (err) {
          console.error("Error updating note:", err);
        } else {
          console.log("Note updated successfully!");
        }
        rl.close();
      });
    });
  });
}

module.exports = updateNote;
