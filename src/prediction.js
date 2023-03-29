// Functie om het meest waarschijnlijke volgende woord te retourneren
function mostLikelyNextWord(word, ngrams, maxRepetition = 2) {
  let maxCount = 0;
  let nextWords = [];

  const lastWord = word.split(" ").slice(-1).pop();
  let consecutiveRepetition = 0;

  // Loop through all n-grams and check if the first word(s) match the given word
  for (const ngramKey in ngrams) {
    // Check if the last word matches the first word of the ngram
    if (ngramKey.startsWith(lastWord)) {
      const words = ngramKey.split(" ");
      const n = words.length;

      const lastWord = words.slice(1, n).join(" ");

      if (ngrams[ngramKey] > maxCount && lastWord !== nextWords.join(" ")) {
        maxCount = ngrams[ngramKey];
        nextWords = words.slice(1, n);
        consecutiveRepetition = 1;
      } else if (lastWord === nextWords.join(" ")) {
        consecutiveRepetition++;
      }

      // resets de consecutiveRepetition als het aantal keer dat hetzelfde woord achter elkaar voorkomt groter is dan de maxRepetition
      if (consecutiveRepetition > maxRepetition) {
        maxCount = 0;
        nextWords = [];
      }
    }
  }

  return nextWords.join(" ");
}

// Functie om een willekeurig volgend woord te kiezen uit de bigrams
async function randomNextWord(word, ngrams) {
  const potentialWords = [];

  // krijgt het laatste woord van de gegeven woorden
  const lastWord = word.split(" ").slice(-1).pop();

  // Loop door alle ngrams en check of het laatste woord overeenkomt met het eerste woord van de ngram
  for (const ngramKey in ngrams) {
    const words = ngramKey.split(" ");

    // krijgt het aantal woorden in de ngram
    const n = words.length;

    // Controleert of het laatste woord van de gegeven zin overeenkomt met het eerste woord van de ngram
    if (ngramKey.startsWith(lastWord)) {
      // krijgt het volgende woord
      const nextWords = words.slice(1, n).join(" ");

      // voegt het woord toe aan de array met mogelijke woorden
      for (let i = 0; i < ngrams[ngramKey]; i++) {
        potentialWords.push(nextWords);
      }
    }
  }

  // return een willekeurig woord uit de array met mogelijke woorden
  return potentialWords.length > 0
    ? potentialWords[Math.floor(Math.random() * potentialWords.length)]
    : null;
}

// Functie om een zin te genereren
async function generateSentence(startWord, maxLength = 10, bigrams) {
  let currentWord = startWord;
  let sentence = currentWord;

  try {
    sentenceLength = 0;
    // Loop door het aantal keer dat we een woord willen genereren
    for (let i = 0; sentenceLength < maxLength; i++) {
      sentenceLength = sentence.split(" ").length;
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
