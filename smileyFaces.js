countSmileys = (arr) => {
    let smileys = 0;
    let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
    for (let str of arr) {
      if (validSmileys.includes(str)) {
        smileys++;
      }
    }
    return smileys;
}

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
countSmileys([';)', ';o)', ':~D', ':-(', ':(', ';o(', ';-D']);
countSmileys([':)', ':(', ':D', ':O', ':;']);
countSmileys([]);