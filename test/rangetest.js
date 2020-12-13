"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var methods = require('../src/range');
describe("(3,11) EndPoints Should Be{4,10}", function () {
    it("Should return: {4,10}", function () {
        chai_1.expect(methods.EndPoints("(3,11)")).to.be.eqls([4, 10]);
    });
});
