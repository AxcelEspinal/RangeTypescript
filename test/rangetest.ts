import { expect } from 'chai';

const methods = require('../src/range');


describe("(3,11) EndPoints Should Be{4,10}", function () {
    it("Should return: {4,10}", function () {
        expect(methods.EndPoints("(3,11)")).to.be.eqls([4, 10])
    });
});

describe("(1,15] EndPoints Should Be{2,15}", function () {
    it("Should return: {2,15}", function () {
        expect(methods.EndPoints("(1,15]")).to.be.eqls([2, 15])
    });
});

describe("[5,9] EndPoints Should Be{5,9}", function () {
    it("Should return: {5,9}", function () {
        expect(methods.EndPoints("[5,9]")).to.be.eqls([5, 9])
    });
});

describe("[7,11) EndPoints Should Be{7,10}", function () {
    it("Should return: {7,10}", function () {
        expect(methods.EndPoints("[7,11)")).to.be.eqls([7, 10])
    });
});

describe("[5,6) AreEquals (4, 5]", function () {
    it("Should return: true", function () {
        expect(methods.Equals("[5,6)", "(4, 5]")).to.be.eqls(true)
    });
});

describe("(4,8) AreEquals [5, 7]", function () {
    it("Should return: true", function () {
        expect(methods.Equals("(4,8)", "[5, 7]")).to.be.eqls(true)
    });
});

describe("(3,8] AreEquals [4, 9)", function () {
    it("Should return: true", function () {
        expect(methods.Equals("(3,8]", "[4, 9)")).to.be.eqls(true)
    });
});


describe("(3,8) Not Equals [4, 9)", function () {
    it("Should return: false", function () {
        expect(methods.Equals("(3,8)", "[4, 9)")).to.be.eqls(false)
    });
});

describe("[7,11) Not Equals (2, 4]", function () {
    it("Should return: false", function () {
        expect(methods.Equals("[7, 11)", "(2, 4]")).to.be.eqls(false)
    });
});

describe("[7,11) Not Equals (2, 5]", function () {
    it("Should return: false", function () {
        expect(methods.Equals("[7, 11)", "(2, 5]")).to.be.eqls(false)
    });
});

describe("Range (2,10] getAllPoints", function () {
    it("Should return: {3,4,5,6,7,8,9,10}", function () {
        expect(methods.GetAllPoints("(2,10]")).to.be.eqls([3, 4, 5, 6, 7, 8, 9, 10])
    });
});


describe("Range (3,10] getAllPoints", function () {
    it("Should return: {4,5,6,7,8,9,10}", function () {
        expect(methods.GetAllPoints("(3,10]")).to.be.eqls([4, 5, 6, 7, 8, 9, 10])
    });
});

describe("Range [3,5] getAllPoints", function () {
    it("Should return: {3,4,5}", function () {
        expect(methods.GetAllPoints("[3,5]")).to.be.eqls([3, 4, 5])
    });
});

describe("Range (2,6) getAllPoints", function () {
    it("Should return: {3,4,5}", function () {
        expect(methods.GetAllPoints("(2,6)")).to.be.eqls([3, 4, 5])
    });
});


describe("Range (2,9] Contains (5,9)", function () {
    it("Should return: True", function () {
        expect(methods.Contains("(2,9]", "(5,9)")).to.be.eqls(true)
    });
});

describe("Range (2,7] Contains (5,9)", function () {
    it("Should return: False", function () {
        expect(methods.Contains("(2,7]", "(5,9)")).to.be.eqls(false)
    });
});

describe("Range [3,5) Overlaps (2,10]", function () {
    it("Should return: True", function () {
        expect(methods.Overlaps("[3,5)", "(2,10]")).to.be.eqls(true)
    });
});

describe("Range [3,6) Overlaps (2,10]", function () {
    it("Should return: True", function () {
        expect(methods.Overlaps("[3,6)", "(2,10]")).to.be.eqls(true)
    });
});

describe("Range [3,10) Does not Overlaps (11,16]", function () {
    it("Should return: false", function () {
        expect(methods.Overlaps("[3,10)", "(11,16]")).to.be.eqls(false)
    });
});


describe("Range [2,5) Does not Overlaps [7,10]", function () {
    it("Should return: false", function () {
        expect(methods.Overlaps("[2, 5)", "[7,10]")).to.be.eqls(false)
    });
});


