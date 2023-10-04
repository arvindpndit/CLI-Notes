const readline = require("readline");
const createNote = require("./createNote.js");
const readNote = require("./readNote.js");
const updateNote = require("./updateNote.js");
const deleteNote = require("./deleteNote.js");
const getAllNotes = require("./getAllNotes.js")

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
    5. Show all notes

  Choose one option from 1-5 : `,
    (userInput) => {
      switch (userInput) {
        case "1":
          createNote();
          break;
        case "2":
          readNote();
          break;
        case "3":
          updateNote();
          break;
        case "4":
          deleteNote();
          break;
        case "5": 
          getAllNotes("./", "txt");
          break;
        default:
          console.log("Invalid");
      }
      rl.close();
    }
  );
}

module.exports = showMenu;
