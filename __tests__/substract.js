import substract from "../substract";

test("substarcts two numbers", () => {
  const result = substract(5, 2);
  expect(result).toBe(3);
});
