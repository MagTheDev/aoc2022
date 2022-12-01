const input = await Deno.readTextFile("input.txt");
console.log(input);

const result: number[] = []
input.split("\n\n").map((e) => e.split("\n")).forEach((v) => {
    result.push(v.reduce((acc, x) => acc + parseInt(x), 0))
})

const sorted = result.sort((a, b) => a - b).reverse();

console.log(sorted.slice(1, 4).reduce((acc, x) => x + acc, 0))