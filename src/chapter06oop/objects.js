Object.prototype.toString = function () {
    if (this.length === 0) return "[]";
    var s = '';
    for (var key in this) {
        var content = "[" + key + "] = " + this[key] + ", ";
        s = s.concat(content);
    }
    return s.substring(0, s.length - 2);
};