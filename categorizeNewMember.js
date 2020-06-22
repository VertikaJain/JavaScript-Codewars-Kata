// senior: >=55 age && handicap >7
function openOrSenior(data) {
    let arr = data.map((item) => {
        return ((item[0] >= 55 && item[1] > 7) ? "Senior" : "Open")
    });
    return arr;
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);

// The map() methods manipulates every element of an array and returns its corresponding array as result.