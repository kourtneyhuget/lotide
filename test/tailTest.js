const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Are', 'You'] for ['How','Are','You']", () => {
    assert.deepEqual(tail(["How", "Are", "You"]), ["Are", "You"]);
  });
  it("returns [] for ['How']", () => {
    assert.deepEqual(tail(["How"]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
