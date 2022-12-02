let input = await Deno.readTextFile("input.txt");
input = input.trim();
console.log(input);

enum Hand {
    Rock = 1, 
    Paper = 2, 
    Sizzors = 3
}

const checkWinner = (me: Hand, enemy: Hand): number => {
    if (me === enemy) {
        return 3;
    }
    if (me === Hand.Rock && enemy === Hand.Sizzors) {
        return 6;
    }
    if (me === Hand.Paper && enemy === Hand.Rock) {
        return 6;
    }
    if (me === Hand.Sizzors && enemy === Hand.Paper) {
        return 6;
    }
    return 0;
}

const result = input.split("\n").map((i) => {
    let e: any = i.at(0);
    let m: any = i.at(2);

    switch (e) {
        case "A":
            e = Hand.Rock
            break;
        case "B":
            e = Hand.Paper
            break;
        case "C":
            e = Hand.Sizzors
            break;
        default:
            break;
    }
    switch (m) {
        case "X":
            m = Hand.Rock
            break;
        case "Y":
            m = Hand.Paper
            break;
        case "Z":
            m = Hand.Sizzors
            break;
        default:
            break;
    }
    return [m, e]
}).reduce((acc, current, index, arr) => {

    console.log("Round: " + (index + 1) + " - " + current[0] + " vs " + current[1])
    console.log("Result: " + (checkWinner(current[0], current[1]) + current[0]))

    const current_score = checkWinner(current[0], current[1]);
    const price = current[0];


    return acc + (current_score + price);
}, 0)

console.log(result)