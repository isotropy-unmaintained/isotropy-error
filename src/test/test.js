import should from "should";
import assert from "assert";
import Error from "../isotropy-error";

describe("isotropy-error", () => {
  it("must be a valid error", () => {
    assert.throws(
      () => { throw new Error("TEST_ERR", "Unit test has tasted success.") },
      (err) => {
        return err.code === "TEST_ERR"
          && err.url === "https://www.isotropy.org/errors/" + err.code
          && err.toString() === `Error: ${err.message}`
      },
      "Did not throw the expected error."
    )
  });
});
