function songDecoder(song) {
    console.log(song.split("WUB").join(' ').replace(/ +(?= )/g,'').trim());
    console.log(song.replace(/WUB/g, " ").replace(/ +(?= )/g,'').trim());
    console.log(song.replace(/(WUB)+/g," ").trim());
}
songDecoder("AWUBBWUBC")// WUB should be replaced by 1 space
songDecoder("AWUBWUBWUBBWUBWUBWUBC")// multiples WUB should be replaced by only 1 space
songDecoder("WUBAWUBBWUBCWUB")// heading or trailing spaces should be removed
