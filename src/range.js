var ReadInput = function (input) {
    var object = {
        leftP: input[0],
        rightP: input[input.length - 1],
        nums: input.substring(1, input.length - 1).split(",").map(function (num) { return Number(num); })
    };
    return object;
};
var EndPoints = function (r) {
    var R = ReadInput(r);
    var l1, r1;
    if (R.leftP === '(')
        l1 = R.nums[0] + 1;
    else
        l1 = R.nums[0];
    if (R.rightP === ')')
        r1 = R.nums[R.nums.length - 1] - 1;
    else
        r1 = R.nums[R.nums.length - 1];
    return [l1, r1];
};
var Equals = function (r1, r2) {
    var _a = EndPoints(r1), L1 = _a[0], R1 = _a[1];
    var _b = EndPoints(r2), L2 = _b[0], R2 = _b[1];
    return L1 === L2 && R1 === R2;
};
var Overlaps = function (r1, r2) {
    var _a = EndPoints(r1), L1 = _a[0], R1 = _a[1];
    var _b = EndPoints(r2), L2 = _b[0], R2 = _b[1];
    return L1 >= L2 || R1 >= R2;
};
var GetAllPoints = function (r) {
    var R = ReadInput(r);
    var l1, r1;
    if (R.leftP === '(')
        l1 = R.nums[0] + 1;
    else
        l1 = R.nums[0];
    if (R.rightP === ')')
        r1 = R.nums[R.nums.length - 1] - 1;
    else
        r1 = R.nums[R.nums.length - 1];
    var res = [];
    for (var i = l1; i <= r1; i++) {
        res.push(i);
    }
    return res;
};
var Contains = function (a, b) {
    var A = ReadInput(a);
    var B = ReadInput(b);
    var l1, l2, r1, r2;
    if (A.leftP === "(")
        l1 = A.nums[0] + 1;
    else
        l1 = A.nums[0];
    if (A.leftP === ")")
        r1 = A.nums[A.nums.length - 1] - 1;
    else
        r1 = A.nums[A.nums.length - 1];
    if (B.leftP === "(")
        l2 = B.nums[0] + 1;
    else
        l2 = B.nums[0];
    if (B.leftP === ")")
        r2 = B.nums[B.nums.length - 1] - 1;
    else
        r2 = B.nums[B.nums.length - 1];
    return l1 <= l2 && r1 >= r2;
};
module.exports = {
    ReadInput: ReadInput,
    EndPoints: EndPoints,
    Overlaps: Overlaps,
    Equals: Equals,
    GetAllPoints: GetAllPoints,
    Contains: Contains
};
