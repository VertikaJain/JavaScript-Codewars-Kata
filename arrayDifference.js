function arrayDiff(a, b) {
    for (let i of b) {
        a = a.filter(num => num !== i);
    }
    return a;
}

arrayDiff([], [4, 5])// [], a was [], b was [4,5]
arrayDiff([3, 4], [3])// [4], a was [3,4], b was [3]
arrayDiff([1, 8, 2], [])// [1,8,2], a was [1,8,2], b was []

//filter() method returns an array that includes array elements that satisfy the given condition