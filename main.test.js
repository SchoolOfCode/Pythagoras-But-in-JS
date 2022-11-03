import { test, expect } from "@jest/globals";
//👉 Write your tests below here:
// write a test
// a test that takes in "a" and "b" and checks that "c" is equal Pythagoras
// (expected) variable and (actual) variable

import { pythageros } from "./main.js";
test("test that takes in a and b and checks that c is equal Pythagoras", () => {
  const actual = pythagoras(3, 4);
  const expected = 5;

  expected(actual).toEqual(expected);
});
