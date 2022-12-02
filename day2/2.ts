let input = await Deno.readTextFile("input.txt");
input = input.trim();
console.log(input);

enum Hand {
    Rock = 1, 
    Paper = 2, 
    Sizzors = 3
}

enum Result {
    Win, 
    Lose,
    Draw
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

const getCorrectHand = (enemy_hand: Hand, result: Result): Hand => {

    if (result === Result.Win) {
        if (enemy_hand === Hand.Rock) {
            return Hand.Paper;
        }
        if (enemy_hand === Hand.Paper) {
            return Hand.Sizzors;
        }
        if (enemy_hand === Hand.Sizzors) {
            return Hand.Rock;
        }
    }
    if (result === Result.Lose) {
        if (enemy_hand === Hand.Rock) {
            return Hand.Sizzors;
        }
        if (enemy_hand === Hand.Paper) {
            return Hand.Rock;
        }
        if (enemy_hand === Hand.Sizzors) {
            return Hand.Paper;
        }
    }
    return enemy_hand;

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
            m = Result.Lose
            break;
        case "Y":
            m = Result.Draw
            break;
        case "Z":
            m = Result.Win
            break;
        default:
            break;
    }
    return [m, e]
}).reduce((acc, current, index, arr) => {

   
    let my_play = getCorrectHand(current[1], current[0]);
    let winner = checkWinner(my_play, current[1]);
    let score = winner + my_play;


    console.log("Round: " + (index + 1));
    console.log("My hand: " + my_play + " Enemy hand: " + current[1] + " Result: " + winner);
    console.log("Score: " + score);

    return acc + score;
}, 0)

console.log(result)