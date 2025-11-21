const fs = require("fs");
fs.writeFile("test.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
fs.appendFile("test.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});
