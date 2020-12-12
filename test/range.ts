import { expect } from "chai";

import Range from "../src/range";

const methods = require("../src/range");

describe('Testing Range', () => {

    describe('Range = [2, 6)  GetAllPoints = {2, 3, 4, 5]'), () => {
        it('should return {2, 3, 4, 5] '), () => {
            let ran = new Range(2, 6);
            expect(ran.GetAllPoints()).to.equal(" {2, 3, 4, 5]")
        }
    }

})
