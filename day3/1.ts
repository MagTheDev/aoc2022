import { InputProvider } from "../lib/input.ts";

const input = new InputProvider();
await input.readSessionToken("./.token")
await input.fetchInput(3)
let te = new TextEncoder();
let out = 0;

const same = (inp: string[]): string => {
    let o = "";
    inp[0].split("").forEach((v) => {
        console.log(v + " contained in " + inp[1] + ": " + inp[1].includes(v))
        if (inp[1].includes(v)) {
            o+=v;
        }
    })
    return o
}

while (input.hasNext()) {
    const i = input.next()!;
    const back = [i.substring(0, i.length / 2), i.substring(i.length / 2)]
    
    const s = te.encode(same(back)![0])[0];

    console.log(back)
    console.log("Same:" + same(back)!);

    if (s > 96 && s < 123) {
        out += 1 + s - 97;
        console.log("Value: " + (1 + s - 97));
    } else if (s > 64 && s < 91) {
        out += 27 + s - 65;
        console.log("Value: " + (27 + s - 65));
    }
}

console.log(out);