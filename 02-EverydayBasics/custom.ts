let x : "hello" ="hello";

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }


interface Options {
width: number;
}
function configure(x: Options | "auto") {
// ...
}
configure({ width: 100 });
configure("auto");

declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
const req = { url: "https://example.com", method: "GET" }as const;
handleRequest(req.url, req.method);