
export class InputProvider {
    private lines: string[] = [];
    private read: number = 0;
    public token: string = "";
    private year = 2022;

    public async readSessionToken(path: string) {
        const token = await Deno.readTextFile(path);
        this.token = token.trim();
        return this.token;
    }

    public async fetchInput(day: number): Promise<void> {
        const response = await fetch(`https://adventofcode.com/${this.year}/day/${day}/input`, {
            headers: {
                "Cookie": `session=${this.token}`
            }
        });
        const text = await response.text();
        this.lines = text.split("\n");
    }

    public next(): string | null {
        if (this.read >= this.lines.length) {
            return null;
        }
        const line = this.lines[this.read];
        this.read++;
        return line.replace("\r", "");

    }

    public hasNext(): boolean {
        return this.read < this.lines.length;
    }

}