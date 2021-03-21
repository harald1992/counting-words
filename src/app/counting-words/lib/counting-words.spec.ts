import WordFrequencyAnalyzer, { WordFrequency } from "./counting-words";

describe("CountingWordsUtil", () => {
  const wordAnalyzer = new WordFrequencyAnalyzer();

  it("should correctly catch words in a text", () => {
    const inputText = "lorem ipsum";
    const words: WordFrequency[] = wordAnalyzer.getAllWordsFromText(inputText);

    const expectedReturn = [
      new WordFrequency("lorem"),
      new WordFrequency("ipsum"),
    ];
    expect(words).toEqual(expectedReturn);
  });

  it("should be case insensitive", () => {
    const inputText = "LoreM Ipsum";
    const words = wordAnalyzer.getAllWordsFromText(inputText);

    const expectedReturn = [
      new WordFrequency("lorem"),
      new WordFrequency("ipsum"),
    ];
    expect(words).toEqual(expectedReturn);
  });

  it("words divided by characters like comma's should also be regarded as words", () => {
    const inputText = "me,you/we'do";
    const words = wordAnalyzer.getAllWordsFromText(inputText);

    const expectedReturn = [
      new WordFrequency("me"),
      new WordFrequency("you"),
      new WordFrequency("we"),
      new WordFrequency("do"),
    ];
    expect(words).toEqual(expectedReturn);
  });

  it("should count words that are the same via the highestFrequency", () => {
    const inputText = "Lorem lorem lorEM ipsum";
    const highestFrequency = wordAnalyzer.calculateHighestFrequency(inputText);

    expect(highestFrequency).toEqual(3);
  });

  it("should  calculate the frequency occurence of selected word", () => {
    const inputText = "Lorem lorem lorem ipsum ipsum dolor sit";
    const frequency = wordAnalyzer.calculateFrequencyForWord(
      inputText,
      "ipsum"
    );

    expect(frequency).toEqual(2);

    const wordNotFound = wordAnalyzer.calculateFrequencyForWord(
      inputText,
      "notPresent"
    );
    expect(wordNotFound).toEqual(0);
  });

  it("The most frequent N words should return the N frequent words and also sort alphabetically if words have the same frequency", () => {
    const inputText = "amen amen bmen bmen cmen cmen cmen dmen emen emen.";
    const highestFourFrequentWords: WordFrequency[] = wordAnalyzer.calculateMostFrequentNWords(
      inputText,
      4
    );

    let arrayOfWords: string[] = [];

    highestFourFrequentWords?.forEach((word) => {
      arrayOfWords.push(word.getWord());
    });

    expect(arrayOfWords).toEqual(["cmen", "amen", "bmen", "emen"]);
  });
});
