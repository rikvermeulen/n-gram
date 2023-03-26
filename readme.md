# N-gram Generator

This project contains a simple n-gram generator that analyzes a given text and determines which words often occur consecutively. This is achieved using bigrams (n-grams of length 2).

## Functions

The n-gram generator provides the following functions:

- `generateBigrams(text)`: Generates bigrams from the given text.
- `mostLikelyNextWord(word)`: Returns the most likely next word for a given word based on the bigram analysis.
- `randomNextWord(word)`: Returns a random next word for a given word, taking into account the probabilities from the bigram analysis.
- `generateSentence(startWord)`: Generates a sentence starting with the given start word, using the n-gram analysis.

## Usage

To use the n-gram generator, import the module and use the exported functions:

```javascript
const ngram = require("./ngram");

const bigrams = ngram.generateBigrams("your text data here");
console.log("Bigrams:", bigrams);

const nextWord = ngram.mostLikelyNextWord("the");
console.log('Most likely next word for "the":', nextWord);

const randomWord = ngram.randomNextWord("the");
console.log('Random next word for "the":', randomWord);

const sentence = ngram.generateSentence("the");
console.log('Generated sentence starting with "the":', sentence);
```

## Data source

This project can work with various data sources, such as local text files, CSV files, and APIs. Make sure to implement the appropriate functions to process the data source of your choice.

# License

This project is licensed under the MIT License. See the LICENSE file for more information.
