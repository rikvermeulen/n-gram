const generate = require("./src/bigrams");
const ngram = require("./src/ngram");

(async () => {
  // const bigram = await bigrams.generate();

  const bigrams = await generate.ngrams(2);
  const trigrams = await generate.ngrams(3);

  // Test the functions from bigrams with 2-gram
  console.log(
    "Most likely next word for 'the':",
    ngram.mostLikelyNextWord("the", bigrams)
  );
  console.log(
    "Random next word for 'the':",
    ngram.randomNextWord("the", bigrams)
  );

  const sentenceTwo = await ngram.generateSentence("the", 10, bigrams);
  console.log("Generated sentence starting with 'the':", sentenceTwo);

  // Test the functions from bigrams with 3-gram
  console.log(
    "Most likely next word for 'the':",
    ngram.mostLikelyNextWord("the", trigrams)
  );
  console.log(
    "Random next word for 'the':",
    ngram.randomNextWord("the", trigrams)
  );

  const sentenceThree = await ngram.generateSentence("the", 10, trigrams);
  console.log("Generated sentence starting with 'the':", sentenceThree);
})();
