import {
  coloredWord
} from "./coloredWord";

describe("coloredWord", () => {
  test(" secret = PEACE, guess = SPORT", () => {
    const colors = coloredWord("PEACE", "SPORT");

    expect(colors).toEqual(
      ["ABSENT", "PRESENT", "ABSENT", "ABSENT", "ABSENT"]
    );
  });

  test("secret = PEACE, guess = GREED", () => {
    const colors = coloredWord("PEACE", "GREED");

    expect(colors).toEqual(
      [ 'ABSENT', 'ABSENT', 'PRESENT', 'PRESENT', 'ABSENT' ]
    );
  });
  test("secret = PEACE, guess = EAGLE", () => {
    const colors = coloredWord("PEACE", "EAGLE");

    expect(colors).toEqual(
      [ 'PRESENT', 'PRESENT', 'ABSENT', 'ABSENT', 'CORRECT' ]
    );
  });
  test("secret = PEACE, guess = AWARD", () => {
    const colors = coloredWord("PEACE", "AWARD");

    expect(colors).toEqual(
      [ 'ABSENT', 'ABSENT', 'CORRECT', 'ABSENT', 'ABSENT' ]
    );
  });
  test("secret = PEACE, guess = SALAD", () => {
    const colors = coloredWord("PEACE", "SALAD");

    expect(colors).toEqual(
      [ 'ABSENT', 'PRESENT', 'ABSENT', 'ABSENT', 'ABSENT' ]
    );
  });
  test("secret = PEACE, guess = PEACE", () => {
    const colors = coloredWord("PEACE", "PEACE");

    expect(colors).toEqual(
      [ 'CORRECT', 'CORRECT', 'CORRECT', 'CORRECT', 'CORRECT' ]
    );
  });

})