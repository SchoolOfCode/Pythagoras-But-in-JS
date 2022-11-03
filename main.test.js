import { test, expect } from "@jest/globals";
//👉 Write your tests below here:
// write a test
// a test that takes in "A" and "B" and checks that "C" is equal Pythagoras
// (expected) variable and (actual) variable

import { pythagoras } from "./main.js";

test("test that takes in a and b and checks that c is equal Pythagoras", () => {
  const actual = pythagoras(3, 4);
  const expected = 5;

  expect(actual).toEqual(expected);
});

test("Checks if C is a number", () => {
  const actual = typeof pythagoras(8, 13);

  expect(actual).toContain("number");
});

test("test that takes in a and b and checks that c is equal Pythagoras", () => {
  const actual = pythagoras(6, 8);
  const expected = 10;

  expect(actual).toEqual(expected);
});

test("test that takes in a and b and checks that c is equal Pythagoras", () => {
  const actual = pythagoras(18, 24);
  const expected = 30;

  expect(actual).toEqual(expected);
});
