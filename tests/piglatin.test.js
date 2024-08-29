const translate = require("../src/piglatin.js");

describe(`At least five (5) tests for words starting with different vowels.`, () => {
  test(`translate("apple") → "appleway"`, () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test(`translate("elephant") → "elephantway"`, () => {
    const result = translate("elephant");
    expect(result).toBe("elephantway");
  });
  test(`translate("igloo") → "iglooway"`, () => {
    const result = translate("igloo");
    expect(result).toBe("iglooway");
  });
  test(`translate("octopus") → "octopusway"`, () => {
    const result = translate("octopus");
    expect(result).toBe("octopusway");
  });
  test(`translate("umbrella") → "umbrellaway"`, () => {
    const result = translate("umbrella");
    expect(result).toBe("umbrellaway");
  });
});

describe("At least two (2) tests for words starting with one consonant.", () => {
  test(`translate("giraffe") → "iraffegay"`, () => {
    const returnValue = translate("giraffe");
    expect(returnValue).toBe("iraffegay");
  });
  test(`translate("sushi") → "ushisay"`, () => {
    const returnValue = translate("sushi");
    expect(returnValue).toBe("ushisay");
  });
});

describe("At least one (1) tests for words starting with two consonant.", () => {
  test(`translate("chicken") → "ickenchay"`, () => {
    const returnValue = translate("chicken");
    expect(returnValue).toBe("ickenchay");
  });
});
describe("At least one (1) tests for words starting with three consonant.", () => {
  test(`translate("schmooch") → "moochschay"`, () => {
    const returnValue = translate("schmooch");
    expect(returnValue).toBe("moochschay");
  });
});
describe("At least one (1) test checking for lower case conversion.", () => {
  test(`translate("WAKEUP") → "wakeup"`, () => {
    const returnValue = translate("WAKEUP");
    expect(returnValue).toBe("wakeup");
  });
});
