const bigrams = require("./src/bigrams");
const ngram = require("./src/ngram");

(async () => {
  const bigram = await bigrams.generate();

  const sentence = await ngram.generateSentence("the", 10, bigram);
  const likelyWord = await ngram.mostLikelyNextWord("the", bigram);
  const randomWord = await ngram.randomNextWord("the", bigram);

  // Test the functions
  console.log("Bigrams:", bigram);
  console.log("Most likely next word for 'the':", likelyWord);
  console.log("Random next word for 'the':", randomWord);
  console.log("Generated sentence starting with 'the':", sentence);
})();
