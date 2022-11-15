const Wrapper = require("./index.js");

test("wrapingTwoWordsAfterCol", () => {
  expect(Wrapper.wrap("wrap wrap", 6)).toBe("wrap\nwrap");
});

test("wrapingThreeWordsBetweenCol", () => {
  expect(Wrapper.wrap("wrap wrap wrap", 6)).toBe("wrap\nwrap\nwrap");
});

test("wrappingStringShorterThanCol", () => {
  expect(Wrapper.wrap("wrap", 6)).toBe("wrap");
});

test("wrappingEmptyString", () => {
  expect(Wrapper.wrap("", 1)).toBe("");
});

test("wrappingOneWordLongerThanCol", () => {
  expect(Wrapper.wrap("wrap", 2)).toBe("wr\nap");
});

test("wrappingOneWordALotLongerThanCol", () => {
  expect(Wrapper.wrap("professionals", 3)).toBe("pro\nfes\nsio\nnal\ns");
});

test("wrapingTwoWordsInBetweenCol", () => {
  expect(Wrapper.wrap("wrap worker", 5)).toBe("wrap\nworke\nr");
});

test("wrapingTwoWordsWithEachshorterThanCol", () => {
  expect(Wrapper.wrap("wrap wrap", 3)).toBe("wra\np\nwra\np");
});

test("wrappingTwoWordsWithEachSameLengthAsCol", () => {
  expect(Wrapper.wrap("wrap wrap", 4)).toBe("wrap\nwrap");
});
