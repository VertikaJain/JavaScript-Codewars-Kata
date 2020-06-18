function songDecoder(song) {
    // using split() method
    console.log(song.split("WUB").join(' ').replace(/ +(?= )/g,'').trim());
    //using replace() method
    console.log(song.replace(/WUB/g, " ").replace(/ +(?= )/g,'').trim());
    // Or-
    console.log(song.replace(/(WUB)+/g," ").trim());
}

songDecoder("AWUBBWUBC") // WUB should be replaced by 1 space
songDecoder("AWUBWUBWUBBWUBWUBWUBC") // multiples WUB should be replaced by only 1 space
songDecoder("WUBAWUBBWUBCWUB") // heading or trailing spaces should be removed

// split() returns array of characters from the string 
// replace() returns the string by replacing a specified value with another value
// trim() removes extra spaces from beginning and end of string