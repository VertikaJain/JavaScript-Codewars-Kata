function findNb(m) {
    let sum = 0;
    for (let n = 1; sum < m; n++) {
        if (n === m) {
            return n;
        }
        let num = n ** 3;
        if (num === m) {
            return n;
        }
        sum += num;
        if (sum === m) {
            return n;
        }
    }
    return (-1);
}

findNb(4183059834009)// 2022
findNb(24723578342962)// -1
findNb(135440716410000)// 4824
findNb(40539911473216)// 3568