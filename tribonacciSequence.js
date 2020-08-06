let fAr = [], sum = 0, i = 0;
function tribonacci(signature, n) {
    if (n <= 0) { return []; };
    if (n == 1) { fAr = [signature[0]]; return fAr; }
    if (n == 2) { return [signature[0], signature[1]]; }
    if (i === 0 && n > 3) {
        fAr = [];
        sum = 0;
        for (let a of signature)
            fAr.push(a);
    }
    let f = signature[0];
    let s = signature[1];
    let t = signature[2];
    sum = f + s + t;
    fAr.push(sum);
    if (i < n - 4) {
        i++;
        tribonacci([s, t, sum], n);
    }
    i = 0;
    return fAr;
}
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300, 200, 100], 0));
console.log(tribonacci([0.5, 0.5, 0.5], 30));
