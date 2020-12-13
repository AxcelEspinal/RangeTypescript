var ReadInput = (input) => {
    const object = {
        leftP: input[0],
        rightP: input[input.length - 1],
        nums: input.substring(1, input.length - 1).split(",").map(num => Number(num))
    };

    return object;
}

var EndPoints = (r) => {
    const R = ReadInput(r);
    let l1, r1;
    if (R.leftP === '(') l1 = R.nums[0] + 1;
    else l1 = R.nums[0];
    if (R.rightP === ')') r1 = R.nums[R.nums.length - 1] - 1;
    else r1 = R.nums[R.nums.length - 1];
    return [l1, r1];

}

var Equals = (r1, r2) => {
    const [L1, R1] = EndPoints(r1)
    const [L2, R2] = EndPoints(r2)
    return L1 === L2 && R1 === R2;
}

var Overlaps = (r1, r2) => {

    const [L1, R1] = EndPoints(r1);
    const [L2, R2] = EndPoints(r2);
    return L1 >= L2 || R1 >= R2;
}

var GetAllPoints = (r) => {
    const R = ReadInput(r);
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
    const A = ReadInput(a);
    const B = ReadInput(b);
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


module.exports = {

    ReadInput: ReadInput,
    EndPoints: EndPoints,
    Overlaps: Overlaps,
    Equals: Equals,
    GetAllPoints: GetAllPoints,
    Contains: Contains,

}
