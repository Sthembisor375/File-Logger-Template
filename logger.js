import fs from "fs";
import path from "path";

const filePath = path.join("./", "logs.txt");

function recordToFile(text) {
  const timeStamp = Date.now();
  const formattedDate = new Date(timeStamp);
  const entry = `${formattedDate}: ${text}\n`;

  fs.appendFile(filePath, entry, (err) => {
    if (err) {
      console.error("An error occured while writing to logs.txt:", err);
    } else {
      console.log("Record saved successfully to logs.txt");
    }
  });
}

recordToFile("First entry");
