// Functie om het meest waarschijnlijke volgende woord te retourneren
function mostLikelyNextWord(word, bigrams) {
  let maxCount = 0;
  let nextWord = "";

  // Loop door alle bigrams en kijk of het eerste woord overeenkomt met het woord dat we meegeven
  for (const bigram in bigrams) {
    // Split de bigram op in twee woorden
    const [firstWord, secondWord] = bigram.split(" ");
    // Als het eerste woord overeenkomt, kijk dan of het aantal keer dat het voorkomt groter is dan het huidige maximum
    if (firstWord === word && bigrams[bigram] > maxCount) {
      maxCount = bigrams[bigram];
      nextWord = secondWord;
    }
  }

  return nextWord;
}

// Functie om een willekeurig volgend woord te kiezen uit de bigrams
async function randomNextWord(word, bigrams) {
  const potentialWords = [];

  // Loop door alle bigrams en kijk of het eerste woord overeenkomt met het woord dat we meegeven
  for (const bigram in bigrams) {
    const [firstWord, secondWord] = bigram.split(" ");

    // Als het eerste woord overeenkomt, voeg het tweede woord dan toe aan de array
    if (firstWord === word) {
      // Voeg het woord meerdere keren toe aan de array, afhankelijk van het aantal keer dat het voorkomt
      for (let i = 0; i < bigrams[bigram]; i++) {
        potentialWords.push(secondWord);
      }
    }
  }

  // Kies een willekeurig woord uit de array
  const randomIndex = Math.floor(Math.random() * potentialWords.length);

  // Retourneer het gekozen woord
  return potentialWords[randomIndex];
}

// Functie om een zin te genereren
async function generateSentence(startWord, maxLength = 10, bigrams) {
  let currentWord = startWord;
  let sentence = currentWord;

  try {
    // Loop door het aantal keer dat we een woord willen genereren
    for (let i = 0; i < maxLength; i++) {
      // Kies een willekeurig volgend woord
      currentWord = await randomNextWord(currentWord, bigrams);
      // Eindig de zin als er geen volgend woord is
      if (!currentWord) break;
      // Voeg het woord toe aan de zin
      sentence += " " + currentWord;
    }
  } finally {
    return sentence;
  }
}

module.exports = {
  mostLikelyNextWord,
  randomNextWord,
  generateSentence,
};
