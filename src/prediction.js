// Functie om het meest waarschijnlijke volgende woord te retourneren
function mostLikelyNextWord(word, ngrams, n) {
  let maxCount = 0;
  let nextWord = "";

  // Loop door alle n-grams en kijk of het eerste woord overeenkomt met het woord dat we meegeven
  for (const ngram in ngrams) {
    // Split het n-gram op in woorden
    const words = ngram.split(" ");

    // Controleer of het aantal woorden in het n-gram overeenkomt met de opgegeven n
    if (words.length === n) {
      // Controleer of het eerste woord overeenkomt en of het aantal keer dat het voorkomt groter is dan het huidige maximum
      if (words[0] === word && ngrams[ngram] > maxCount) {
        maxCount = ngrams[ngram];
        nextWord = words[1];
      }
    }
  }

  return nextWord;
}

// Functie om een willekeurig volgend woord te kiezen uit de bigrams
async function randomNextWord(words, ngrams) {
  const potentialWords = [];

  // Loop door alle ngrams
  for (const ngram in ngrams) {
    const ngramWords = ngram.split(" ");

    // Controleer of de eerste n-1 woorden overeenkomen met de woorden die we meegeven
    const match = words.every((word, index) => word === ngramWords[index]);

    // Als de woorden overeenkomen, voeg het laatste woord van het n-gram toe aan de array
    if (match) {
      // Voeg het woord meerdere keren toe aan de array, afhankelijk van het aantal keer dat het voorkomt
      for (let i = 0; i < ngrams[ngram]; i++) {
        potentialWords.push(ngramWords[ngramWords.length - 1]);
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
