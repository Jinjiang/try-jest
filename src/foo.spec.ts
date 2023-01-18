/**
 * @jest-environment jsdom
 */

import { sum } from "./foo";

test("jsdom env enabled", () => {
  expect(sum(1, 2)).toBe(3);
  expect(document).toBeTruthy();
});
