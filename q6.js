const zlib = require("zlib");
const fs = require("fs");

const inputFile = fs.createReadStream("temp.zip");
const outputFile = fs.createWriteStream("temp1.txt");

inputFile.pipe(zlib.createUnzip()).pipe(outputFile);
