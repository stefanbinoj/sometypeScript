function padLeft(padding, input) {
    if (typeof padding === "number") {
        return (" ".repeat(padding) + input);
    }
    return padding + input;
}
//typeof values :
//symbol undefined objects functions
