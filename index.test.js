const Wrapper = require("./index.js");

test("wraping_two_words_between_col", () => {
  expect(Wrapper.wrap("wrap wrap", 6)).toBe("wrap\nwrap");
});

test("wraping_three_words_between_col", () => {
  expect(Wrapper.wrap("wrap wrap wrap", 6)).toBe("wrap\nwrap\nwrap");
});

test("wrapping_a_string_shorter_than_col", () => {
  expect(Wrapper.wrap("wrap", 6)).toBe("wrap");
});

test("wrapping_empty_string", () => {
  expect(Wrapper.wrap("", 1)).toBe("");
});

test("wrapping_on_word_longer_than_col", () => {
  expect(Wrapper.wrap("wrap", 2)).toBe("wr\nap");
});

test("wrapping_one_word_a_lot_longer_than_col", () => {
  expect(Wrapper.wrap("professionals", 3)).toBe("pro\nfes\nsio\nnal\ns");
});

test("wraping_two_words_in_between_col", () => {
  expect(Wrapper.wrap("wrap worker", 5)).toBe("wrap\nworke\nr");
});

test("wraping_two_words_with_each_shorter_than_col", () => {
  expect(Wrapper.wrap("wrap wrap", 3)).toBe("wra\np\nwra\np");
});

test("wrapping_two_words_with_each_same_length_as_col", () => {
  expect(Wrapper.wrap("wrap wrap", 4)).toBe("wrap\nwrap");
});

test("wrapping_words_with_each_different_lengths", () => {
  expect(Wrapper.wrap("wrap pores in a warm blanket for a stupendiously long time", 4)).toBe("wrap\npore\ns\nin\na\nwarm\nblan\nket\nfor\na\n\stup\nendi\nousl\ny\nlong\ntime");
});


