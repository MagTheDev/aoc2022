const input = await Deno.readTextFile("input.txt");
console.log(input);

const result: number[] = []
input.split("\n\n").map((e) => e.split("\n")).forEach((v) => {
    result.push(v.reduce((acc, x) => acc + parseInt(x), 0))
})

const max = Math.max(...result);
console.log(max)