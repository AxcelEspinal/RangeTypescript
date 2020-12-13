
var ParseInput = (input) => {
    const obj = {
        leftP: input[0],
        rightP: input[input.length - 1],
        nums: input.substring(1, input.length - 1).split(",").map(num => Number(num))
    };

    return obj;
}
var AreEquals = (r1, r2) => {
    const [L1, R1] = EndPoints(r1)
    const [L2, R2] = EndPoints(r2)
    return L1 === L2 && R1 === R2;
}
var EndPoints = (r) => {
    const R = ParseInput(r);
    let l1, r1;
    if (R.leftP === '(') l1 = R.nums[0] + 1;
    else l1 = R.nums[0];
    if (R.rightP === ')') r1 = R.nums[R.nums.length - 1] - 1;
    else r1 = R.nums[R.nums.length - 1];
    return [l1, r1];
}
var GetAllPoints = (r) => {
    const R = ParseInput(r);
    let l1, r1;
    if (R.leftP === '(') l1 = R.nums[0] + 1;
    else l1 = R.nums[0];
    if (R.rightP === ')') r1 = R.nums[R.nums.length - 1] - 1;
    else r1 = R.nums[R.nums.length - 1];
    const res = [];
    for (let i = l1; i <= r1; i++) {
        res.push(i)
    }
    return res;

}
var Contains = (a, b) => {
    const A = ParseInput(a);
    const B = ParseInput(b);
    let l1, l2, r1, r2;
    if (A.leftP === "(") l1 = A.nums[0] + 1
    else l1 = A.nums[0]
    if (A.leftP === ")") r1 = A.nums[A.nums.length - 1] - 1;
    else r1 = A.nums[A.nums.length - 1]
    if (B.leftP === "(") l2 = B.nums[0] + 1
    else l2 = B.nums[0]
    if (B.leftP === ")") r2 = B.nums[B.nums.length - 1] - 1;
    else r2 = B.nums[B.nums.length - 1]
    return l1 <= l2 && r1 >= r2
}
var Overlaps = (r1, r2) => {
    const [L1, R1] = EndPoints(r1);
    const [L2, R2] = EndPoints(r2);
    return L1 >= L2 || R1 >= R2;
}

module.exports = {
    EndPoints: EndPoints,
    AreEquals: AreEquals,
    GetAllPoints: GetAllPoints,
    Contains: Contains,
    Overlaps: Overlaps
}