const fs = require("fs");
const util = require("util");

const unlinkAsync = util.promisify(fs.unlink);

var path = "./temp1.txt";

unlinkAsync(path)
  .then(() => {
    console.log("fille Deleted");
  })
  .catch(() => {
    console.log("some error are there");
  });

path = "./temp.zip";
unlinkAsync(path)
  .then(() => {
    console.log("fille Deleted");
  })
  .catch(() => {
    console.log("some error are there");
  });
