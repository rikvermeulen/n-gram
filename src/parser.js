const fs = require("fs");
const Papa = require("papaparse");

// Leest een CSV-bestand en geeft de data terug als een array van objecten
function readCSVFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  });
}

exports.readCSVFile = readCSVFile;
