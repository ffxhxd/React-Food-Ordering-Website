import { sum } from "../components/sum";

//function test  takes 2 args ist a string another a call back function
test("sum should calculate sum of two numbers", () => {
  //we calculated the sum
  const result = sum(3, 3);
  //assertion
  //and we want our result to be 6
  expect(result).toBe(6);
});
