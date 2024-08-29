const translate = (word) => {
  if (
    word[0] === "a" ||
    word[0] === "e" ||
    word[0] === "i" ||
    word[0] === "o" ||
    word[0] === "u"
  ) {
    // if first letter starts with vowel:
    return `${word}way`;
  } else if (
    word[1] === "a" ||
    word[1] === "e" ||
    word[1] === "i" ||
    word[1] === "o" ||
    word[1] === "u"
  ) {
    let firstPart = word.slice(0, 1);
    let secondPart = word.slice(1);
    return secondPart + firstPart + "ay";
  } else if (
    word[2] === "a" ||
    word[2] === "e" ||
    word[2] === "i" ||
    word[2] === "o" ||
    word[2] === "u"
  ) {
    let firstPart = word.slice(0, 2);
    let secondPart = word.slice(2);
    return secondPart + firstPart + "ay";
  } else {
    let firstPart = word.slice(0, 3);
    let secondPart = word.slice(3);
    return secondPart + firstPart + "ay";
  }
  //   const lowerCaseString = myString.toLowerCase();
};

// else: return (rest of word) + (first contonant) + "ay"

module.exports = translate;
