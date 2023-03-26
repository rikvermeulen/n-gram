# N-gram Generator

Dit project bevat een eenvoudige n-gram generator die een gegeven tekst analyseert en bepaalt welke woorden vaak na elkaar voorkomen. Dit wordt bereikt met behulp van bigrams (n-grams van lengte 2).

## Functies

De n-gram generator biedt de volgende functies:

- `generateBigrams(text)`: Genereert bigrams uit de gegeven tekst.
- `mostLikelyNextWord(word)`: Geeft het meest waarschijnlijke volgende woord voor een gegeven woord op basis van de bigram-analyse.
- `randomNextWord(word)`: Geeft een willekeurig volgend woord voor een gegeven woord, rekening houdend met de kansen uit de bigram-analyse.
- `generateSentence(startWord)`: Genereert een zin die begint met het gegeven startwoord, met behulp van de n-gram analyse.

## Gebruik

Om de n-gram generator te gebruiken, importeer je de module en gebruik je de geëxporteerde functies:

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

# Gegevensbronnen

Dit project kan werken met verschillende gegevensbronnen, zoals lokale tekstbestanden, CSV-bestanden en API's. Zorg ervoor dat je de juiste functies implementeert om de gegevensbron van je keuze te verwerken.

# Licentie

Dit project valt onder de MIT-licentie. Zie het LICENSE-bestand voor meer informatie.
