const bigrams = require("./src/bigrams");
const ngram = require("./src/ngram");

(async () => {
  const bigram = await bigrams.generate();

  // Test the functions
  const likelyWord = await ngram.mostLikelyNextWord("the", bigram);
  console.log("Most likely next word for 'the':", likelyWord);

  const randomWord = await ngram.randomNextWord("the", bigram);
  console.log("Random next word for 'the':", randomWord);

  const sentence = await ngram.generateSentence("the", 10, bigram);
  console.log("Generated sentence starting with 'the':", sentence);
})();
