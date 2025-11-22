const fs = require("fs");

const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

readStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
