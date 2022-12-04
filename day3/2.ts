import { InputProvider } from "../lib/input.ts";

const inputProvider = new InputProvider()
await inputProvider.readSessionToken("./.token")
await inputProvider.fetchInput(3)

const getCommonItems = (input: string[]): string => {
    var out = "";
    input[0].split("").forEach((elem) => {
        if (input[1].includes(elem) && input[2].includes(elem)) {
            out = elem
        }
    })
    return out;
}
var out = inputProvider.getLines().reduce((acc, curr) => {
    if (acc[acc.length - 1].length < 3) {
        acc[acc.length - 1].push(curr);
    } else {
        acc.push([curr]);
    }
    return acc;
}, [[]]).map((elem) => getCommonItems(elem)).reduce((acc, curr) => {
    const s = curr.charCodeAt(0);
    if (s > 96 && s < 123) {
        return acc + 1 + s - 97;
    } else if (s > 64 && s < 91) {
        return acc + 27 + s - 65;
    }
}, 0);

console.log(out);