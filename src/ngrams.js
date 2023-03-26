const parser = require("./parser");

async function generateNGrams(n) {
  let allText = "";

  // Lees het CSV-bestand
  const csvData = await parser.readCSVFile("./data/titles.csv");

  // Maak een lange string van alle titels
  for (const row of csvData) {
    allText += " " + row.title;
  }

  // Verwijder alle leestekens, cijfers en zet alles om naar kleine letters
  const text = await allText
    .replace(/[^\w\s]/g, "")
    .replace(/\d+/g, "")
    .toLowerCase();

  // Split de tekst op spaties
  const words = await text.split(/\s+/);

  const ngrams = {};

  // Loop door alle woorden en maak bigrams
  for (let i = 0; i < words.length - 1; i++) {
    // Voeg de twee woorden samen met een spatie
    const gram = words.slice(i, i + n).join(" ");

    // Tel het aantal keer dat een bigram voorkomt
    ngrams[gram] = (ngrams[gram] || 0) + 1;
  }

  return ngrams;
}

exports.ngrams = generateNGrams;
