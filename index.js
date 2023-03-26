const generate = require("./src/bigrams");
const ngram = require("./src/ngram");

(async () => {
  // const bigram = await bigrams.generate();

  const bigrams = await generate.ngrams(2);
  const trigrams = await generate.ngrams(3);

  // Test the functions from bigrams with 2-gram
  console.log(
    "Most likely next word for 'sonic':",
    ngram.mostLikelyNextWord("sonic", bigrams)
  );
  console.log(
    "Random next word for 'sonic':",
    ngram.randomNextWord("sonic", bigrams)
  );

  const sentenceTwo = await ngram.generateSentence("sonic", 20, bigrams);
  console.log("Generated sentence starting with 'sonic':", sentenceTwo);

  // Test the functions from bigrams with 3-gram
  console.log(
    "Most likely next word for 'sonic':",
    ngram.mostLikelyNextWord("sonic", trigrams)
  );
  console.log(
    "Random next word for 'sonic':",
    ngram.randomNextWord("sonic", trigrams)
  );

  const sentenceThree = await ngram.generateSentence("sonic", 20, trigrams);
  console.log("Generated sentence starting with 'sonic':", sentenceThree);
})();
