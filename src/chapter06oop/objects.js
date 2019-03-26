Object.prototype.toString = function () {
    if (this.length === 0) return "[]";
    let s = this.constructor.name + '{'
    for (let key in this) {
        let value = this[key]
        let content = (typeof value === "function" ? "function " + key : "[" + key + "] = " + value) + ", "
        s = s.concat(content);
    }
    return s.substring(0, s.length - 2) + "}";
};

