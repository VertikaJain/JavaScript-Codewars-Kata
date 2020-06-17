// method 1: using for loop
solution = (str) => {
    let str1 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str1 += str[i];
    }
    return str1;
}

// method 2: using built-in methods
solution = (str) => {
    return str.split('').reverse().join('');
}

let result = solution("qwerty");
console.log(result);

// NOTE: You need to comment either of the methods.