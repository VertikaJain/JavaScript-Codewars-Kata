uniqueInOrder('AAAABBBCCDAABBB') //== ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         //== ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3])       //== [1,2,3]

function uniqueInOrder(iterable) {
    if (typeof iterable === "string") {
        iterable = iterable.split("");
    }
    for (let index in iterable) {
        let i = parseInt(index);
        if (iterable[i] === iterable[i + 1]) {
            iterable[i] = "";
        }
    }
    iterable = iterable.filter(s => s !== "");
    return iterable;
}

/* 
    ONE STATEMENT SOLUTION USING ES6 SPREAD OPERATOR (...) - unpacks elements of iterable objects
    return [...iterable].filter((a, i) => a !== iterable[i-1]);
*/