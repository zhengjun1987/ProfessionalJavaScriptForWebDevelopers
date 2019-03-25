Object.prototype.toString = function () {
    if (this.length === 0) return "[]";
    var s = this.constructor.name + '{';
    for (var key in this) {
        var value = this[key];
        var content = (typeof value === "function" ? "function " + key : "[" + key + "] = " + value) + ", ";
        s = s.concat(content);
    }
    return s.substring(0, s.length - 2) + "}";
};