const zlib = require("zlib");
const fs = require("fs");

const inputFile = fs.createReadStream("temp.txt");
const outputFile = fs.createWriteStream("temp.zip");

inputFile.pipe(zlib.createGzip()).pipe(outputFile);
