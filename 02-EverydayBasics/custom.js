var x = "hello";
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
var req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
