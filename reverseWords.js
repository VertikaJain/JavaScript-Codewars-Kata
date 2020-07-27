reverseWords = (str) => {
    return str.split(" ").map(s => s.split("").reverse().join('')).toString().replace(/,/gi, " ");
}

let result = reverseWords("hello there!");
console.log(result);

result = reverseWords("The quick brown fox jumps over the lazy dog.");
console.log(result);

/* Code explained:
    1. Split the string using split(" ") to return an array of words.
    2. Use map() to return the modified array
        - split() each word further into array of letters
        - reverse() the array
        - join() the reversed array
    3. Use toString() to convert the reversed array to a string
    4. Use replace() to replace all commas with a space
        - Regular expression : g - for all occurances of comma
        - Regular expression : i - for case insensitive conversion
    5. return string 
*/