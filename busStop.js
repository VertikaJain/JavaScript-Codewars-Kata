// array of arrays problem
number = busStops => {
    return busStops.reduce((a, c) => a + c[0] - c[1], 0);

    /*  Solution using loop:
    let n = 0;
    for (let people of busStops) {
         n += people[0] - people[1];
     }
     return n */
}

number([[10, 0], [3, 5], [5, 8]]); //5
number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]); // 17;
number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]); // 21;