const generate = require("./src/ngrams");
const ngram = require("./src/prediction");

(async () => {
  // const bigram = await bigrams.generate();

  const bigrams = await generate.ngrams(2);
  const trigrams = await generate.ngrams(3);
  const fourgrams = await generate.ngrams(4);

  const sentenceTwo = await ngram.generateSentence("rings", 15, bigrams);
  console.log("Generated sentence starting with 'rings':", sentenceTwo);

  const sentenceThree = await ngram.generateSentence("rings", 15, trigrams);
  console.log("Generated sentence starting with 'rings':", sentenceThree);

  const sentenceFour = await ngram.generateSentence("rings", 15, fourgrams);
  console.log("Generated sentence starting with 'rings':", sentenceFour);
})();
