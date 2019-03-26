// for (let prop in window) {
//     document.write("prop = " + prop + "<br>");
// }

let obj = new Object()

for (let i in NaN) {
    document.write("i = " + i + "<br>")
}

let number = 0
outermost: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermost
        }
        document.write("i = " + i + "; j = " + j + "<br>")
        number++
    }
}