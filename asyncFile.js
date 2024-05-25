// file system module -> asynchronous way

const fs = require("fs");

// read file in asynchronous way
fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Read file error");
  }
  console.log(data);

  //   writing text in a file

  fs.writeFile(
    "./texts/write2.txt",
    data + "This is my second written text in asynchronous way",
    (err) => {
      if (err) {
        throw Error("writing file error");
      }

      console.log("This file has been saved");
    }
  );
});
