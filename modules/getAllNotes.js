const { readdir } = require('fs/promises');
const fs = require("fs");
const prompt = require("prompt-sync")();

async function getAllNotes (dir, ext){  
    const matchedFiles = [];
    const files = await readdir(dir);

    for (const file of files) {
        if (file.endsWith(`.${ext}`)) {
            matchedFiles.push(file);
        }
    }

    if(matchedFiles.length === 0){
      console.log("There's no note, Please create a new note");
    }
    
    matchedFiles?.map((note) => {
      console.log(note)
      fs.readFile(note, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading note:", err);
        } else {
          console.log(`${note}`.toUpperCase(), data);
        }
      });
    })
    
}

module.exports = getAllNotes;