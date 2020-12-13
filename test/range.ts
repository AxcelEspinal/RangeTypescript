import { expect } from "chai";

const methods = require("../src/range");

describe("Range (2,10)  Endpoints ShouldBe{3,9}", function () {
    it("Should return: {3,9}", function () {
        expect(methods.EndPoints("(2,10)")).to.be.eqls([3, 9])
    });
});