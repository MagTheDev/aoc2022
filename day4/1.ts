import { InputProvider } from "../lib/input.ts";

const inputProvider = new InputProvider();
await inputProvider.readSessionToken("./.token");
await inputProvider.fetchInput(4);

const isContainedWithin = (a: any, b: any): boolean => {
    a = a.split("-").map((x) => parseInt(x));
    b = b.split("-").map((x) => parseInt(x));
    console.log("A: ", a, "B: ", b);
    if ((a[0] >= b[0] && a[1] <= b[1]) || (b[0] <= a[0] && b[1] >= a[1])) {
        return true;
    }
    return false;
}
var out = 0;
while (inputProvider.hasNext()) {
    const [f, s] = inputProvider.next()!.split(",");
    if (isContainedWithin(f, s) || isContainedWithin(s, f)) {
        console.log("Contained within")
        out++;
    }

}
console.log(out);