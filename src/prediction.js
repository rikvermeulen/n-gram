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

  // Get the last word of the given word
  const lastWord = word.split(" ").slice(-1).pop();

  // Loop through all n-grams and check if the first word(s) match the given ngram
  for (const ngramKey in ngrams) {
    const words = ngramKey.split(" ");

    // Get the number of words in the ngram
    const n = words.length;

    // Check if the first n words match the given ngram
    if (ngramKey.startsWith(lastWord)) {
      // Join the remaining words to get the next word(s)
      const nextWord = words.slice(1, n).join(" ");

      // Add the next word(s) to the array multiple times, depending on the frequency in the corpus
      for (let i = 0; i < ngrams[ngramKey]; i++) {
        potentialWords.push(nextWord);
      }
    }
  }

  // Choose a random word from the array and return it
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
