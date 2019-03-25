// for (var prop in window) {
//     document.write("prop = " + prop + "<br>");
// }

var obj = new Object();

for (var i in NaN) {
    document.write("i = " + i + "<br>");
}

var number = 0;
outermost: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermost;
        }
        document.write("i = " + i + "; j = " + j + "<br>");
        number++;
    }
}