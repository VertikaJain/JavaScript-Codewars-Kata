testArr = (arr) => {
    // using JS built-in methods
    let sum = arr.reverse().map((item, i) => item * Math.pow(2, i++)).reduce((accumulator, currentValue) =>
        accumulator + currentValue
    );
    return sum;

     /* using simple loop
    arr.reverse();
    let sum = 0;
    for (let i in arr) {
        sum += (arr[i] * Math.pow(2, i));
    } */
}

testArr([0, 0, 1, 0]);
testArr([0, 1, 0, 1]);
testArr([1, 1, 0, 1]);

// 8 4 2 1 => 2^3,2^2,2^1,2^0