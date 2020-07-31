String.prototype.toJadenCase = function () {
    return this.split(' ').map(s => s.replace(s.charAt(0), s.charAt(0).toUpperCase())).join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
str = str.toJadenCase() // "How Can Mirrors Be Real If Our Eyes Aren't Real";
console.log(str);

/* Learnings:
    1. split() - splits the string into an array of words,
    2. map() - returns the modified array based on given statements,
    3. replace() - replaces the given value with the new value,
    4. charAt() - returns the character of a string of the specified index,
    5. toUpperCase() - converts the string/char to uppercase,
    6. join() - joins the given array into a single string.
*/