import hashCode from "./hashCode";

describe("hashCode", () => {
  it("has very different hashes for different days", () => {
    const first = hashCode("2021-02-04");
    const second = hashCode("2021-02-05");
    expect(Math.abs(first - second)).toBeGreaterThan(1);
  });
});
