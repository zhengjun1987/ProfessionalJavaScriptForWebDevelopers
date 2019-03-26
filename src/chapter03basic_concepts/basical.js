/**
 * 这个是
 * 多行注释
 * */

//单行注释

function doSomething() {
    "use strict"//此句是一个编译指示，指示JavaScript引擎切换到严格模式
//    函数体
}

function test() {
    let local = 'hi'//方法内部局部变量
    globalVariable = "Hi"//没有var作为前缀的赋值，全局变量
}

test()
document.write("globalVariable = " + globalVariable + "<br>")//globalVariable = Hi


let num = undefined
document.write("(typeof num) = " + (typeof num) + "<br>")//(typeof num) = undefined
// alert(num1);//出错
document.write("(typeof num1) = " + (typeof num1) + "<br>")//(typeof num1) = undefined
num = 2
document.write("(typeof num) = " + (typeof num) + "<br>")//(typeof num) = number
document.write("(typeof (typeof num)) = " + (typeof (typeof num)) + "<br>")//(typeof (typeof num)) = string
let arr = []
document.write("typeof arr[0] = " + typeof arr[0] + "<br>")//typeof arr[0] = undefined

/*
* null只针对object类型
* */
let car = null
document.write("typeof car = " + typeof car + "<br>")//typeof car = object
//undefined派生自null
document.write("(null == undefined) = " + (null == undefined) + "<br>")//(null == undefined) = true
document.write("(null === undefined) = " + (null === undefined) + "<br>")
document.write("(typeof undefined) = " + (typeof undefined) + "<br>")
document.write("(typeof null) = " + (typeof null) + "<br>")

let found = true
let lost = false
document.write("typeof = " + typeof found + "<br>")
document.write("Boolean(\"Hello,World!\") = " + Boolean("Hello,World!") + "<br>")// Boolean("Hello,World!") = true
document.write("Boolean(\"\") = " + Boolean("") + "<br>")// Boolean("") = false
document.write("Boolean(\" \") = " + Boolean(" ") + "<br>")//Boolean(" ") = true
document.write("Boolean(0) = " + Boolean(0) + "<br>")// Boolean(0) = false
document.write("Boolean(0.1) = " + Boolean(0.1) + "<br>")// Boolean(0.1) = true
document.write("Boolean(1) = " + Boolean(1) + "<br>")// Boolean(1) = true
document.write("Boolean(NaN) = " + Boolean(NaN) + "<br>")// Boolean(NaN) = false
document.write("Boolean(null) = " + Boolean(null) + "<br>")// Boolean(null) = false
document.write("Boolean(undefined) = " + Boolean(undefined) + "<br>")// Boolean(undefined) = false
document.write("Boolean({}) = " + Boolean({}) + "<br>")// Boolean({}) = true // {} === new Object{} != null


let decimalInt = 55
let octInt = 070//八进制
document.write("octInt = " + octInt + "<br>")//octInt = 56
let heximalInt = 0x1f//十六进制
document.write("heximalInt = " + heximalInt + "<br>")//heximalInt = 31
document.write("0b10000010 = " + 0b10000010 + "<br>")//0b10000010 = 130
let floatNum1 = 1.1
let floatNum2 = .1
let floatNum3 = 3.125e7
let b = .2
document.write("(floatNum2 + b) = " + (floatNum2 + b) + "<br>")//(floatNum2 + b) = 0.30000000000000004

document.write("isFinite(Number.MAX_VALUE + Number.MAX_VALUE) = " + isFinite(Number.MAX_VALUE + Number.MAX_VALUE) + "<br>")
// isFinite(Number.MAX_VALUE + Number.MAX_VALUE) = false

// alert(NaN == NaN);//false
/*
* isNaN()函数接收一个值并试图将其转换成一个数值。
* */
// alert(isNaN("false"));//true
// alert(isNaN("true"));//true
// alert(isNaN("blue"));//true

// alert(isNaN(false));//false
// alert(isNaN(true));//false
// alert(isNaN(""));//false
// alert(isNaN("10"));//false
// alert(isNaN(10));//false

// alert(Number("Hello"));//NaN
// alert(Number(true));//1
// alert(Number(false));//0
// alert(Number(""));//0
// alert(Number("1"));//1
// alert(Number("001"));//1
// alert(parseInt("001"));//1
// alert(parseInt("070"));//70 解析不了八进制
// alert(parseInt("audi070"));//NaN
// alert(parseInt("22.5"));//22
// alert(parseInt("1234blue"));//1234
// alert(parseInt("0x1f"));//31
// alert(parseInt(true));//NaN
/*
* Number()方法接收任意类型数据
* parseInt和parseFloat只针对字符串
* */
document.write("Number(\"22.34.55\") = " + Number("22.34.55") + "<br>")
document.write("parseInt(\"22.34.55\") = " + parseInt("22.34.55") + "<br>")
document.write("parseFloat(\"22.34.55\") = " + parseFloat("22.34.55") + "<br>")
// Number("22.34.55") = NaN
// parseInt("22.34.55") = 22
// parseFloat("22.34.55") = 22.34

document.write("(typeof (parseInt(\"BLUE\"))) = " + (typeof (parseInt("BLUE"))) + "<br>")//(typeof (parseInt("BLUE"))) = number

let text = "This is the letter sigma:\u03a3"
document.write("text = " + text + "<br>")
let lang = "Java"
lang += "Script"
document.write("lang = " + lang + "<br>")

let number = 10
document.write("number.toString(2) = " + number.toString(2) + "<br>")//number.toString(2) = 1010
document.write("number.toString(8) = " + number.toString(8) + "<br>")//number.toString(8) = 12
document.write("number.toString(10) = " + number.toString(10) + "<br>")//number.toString(10) = 10
document.write("number.toString(16) = " + number.toString(16) + "<br>")//number.toString(16) = a
document.write("lost.toString() = " + lost.toString() + "<br>")
document.write("found.toString() = " + found.toString() + "<br>")
document.write("Number(\"BLUE\").toString(2) = " + Number("BLUE").toString(2) + "<br>")//Number("BLUE").toString(2) = NaN

let obj = {}
for (let o in obj) {
    document.write("o = " + o + "<br>")
}
document.write("obj.constructor = " + obj.constructor + "<br>")
document.write("(typeof obj.constructor) = " + (typeof obj.constructor) + "<br>")
document.write("obj.toString() = " + obj.toString() + "<br>")
document.write("obj.valueOf() = " + obj.valueOf() + "<br>")
// obj.constructor = function Object() { [native code] }
// (typeof obj.constructor) = function
// obj.toString() = [object Object]
// obj.valueOf() = [object Object]

document.write("obj.hasOwnProperty(\"constructor\") = " + obj.hasOwnProperty("constructor") + "<br>")//obj.hasOwnProperty("constructor") = false
document.write("obj.length = " + obj.length + "<br>")//obj.length = undefined


/*
* 操作符
* */

let age = 29
document.write("age = " + age + "<br>")//age = 29
++age
document.write("age = " + age + "<br>")//age = 30
document.write("age = " + --age + "<br>")//age = 29
document.write("age = " + age++ + "<br>")//age = 29
document.write("age = " + age + "<br>")//age = 30

document.write("+\"22\" = " + (+"22") + "<br>")//22

obj.valueOf = function () {
    return -1
}

document.write("(+obj.valueOf()) = " + (+obj.valueOf()) + "<br>")//(+obj.valueOf()) = -1

number = 0
let neg = ~number
document.write("number.toString(2) = " + number.toString(2) + "<br>")//number.toString(2) = 0
document.write("neg.toString(2) = " + neg.toString(2) + "<br>")//neg.toString(2) = -1


/*
* 布尔操作符
* */
document.write("!!\"blue\" = " + !!"blue" + "<br>")//!!"blue" = true
document.write("!!0 = " + !!0 + "<br>")//!!0 = false
document.write("!!NaN = " + !!NaN + "<br>")//!!NaN = false
document.write("!!\"\" = " + !!"" + "<br>")//!!"" = false
document.write("!!null = " + !!null + "<br>")//!!null = false

let flag = true
document.write("(flag || soumeUndefinedVariable) = " + (flag || soumeUndefinedVariable) + "<br>")
//(flag || soumeUndefinedVariable) = true
document.write("(!flag && soumeUndefinedVariable) = " + (!flag && soumeUndefinedVariable) + "<br>")
//(!flag && soumeUndefinedVariable) = false
// document.write("(flag && soumeUndefinedVariable) = " + (flag && soumeUndefinedVariable) + "<br>");
//出错 ReferenceError: Can't find variable: soumeUndefinedVariable

let result1 = ("55" == 55)//true
let result2 = ("55" === 55)//false

document.write("(\"brick\" < \"alphabet\") = " + ("brick" < "alphabet") + "<br>")
//("brick" < "alphabet") = false
document.write("(\"brick\" < \"alphabet\".toUpperCase()) = " + ("brick" < "alphabet".toUpperCase()) + "<br>")
//("brick" < "alphabet".toUpperCase()) = false
document.write("(\"brick\".toUpperCase() < \"alphabet\") = " + ("brick".toUpperCase() < "alphabet") + "<br>")
//("brick".toUpperCase() < "alphabet") = true 大写字母的编码顺序小于小写字母的编码顺序

document.write("(\"23\" < \"5\") = " + ("23" < "5") + "<br>")//("23" < "5") = true
document.write("(\"23\" < 5) = " + ("23" < 5) + "<br>")//("23" < 5) = false

document.write("(\"a\" > 3) = " + ("a" > 3) + "<br>")//("a" > 3) = false
document.write("(\"a\" <= 3) = " + ("a" <= 3) + "<br>")//("a" <= 3) = false

document.write("(NaN > 3) = " + (NaN > 3) + "<br>")//(NaN > 3) = false
document.write("(NaN <= 3) = " + (NaN <= 3) + "<br>")//(NaN <= 3) = false

document.write("\"55\".valueOf() = " + "55".valueOf() + "<br>")//"55".valueOf() = 55
document.write("(typeof \"55\".valueOf()) = " + (typeof "55".valueOf()) + "<br>")//(typeof "55".valueOf()) = string

let random = Math.random()
if (random < 0.5) {
    document.write("random = " + random + "<br>")
} else {
    document.write("random is bigger than 0.5 " + random + "<br>")
}

if ((random < 1 / 3)) {
    document.write("random < 1/3    " + random + "<br>")
} else if (random < 2 / 3) {
    document.write("random < 2/3    " + random + "<br>")
} else {
    document.write("random < 1    " + random + "<br>")
}

do {
    random = Math.random()
    document.write("random = " + random + "<br>")
} while (random < 0.9)
// random = 0.2227480145173082
// random = 0.7655779239942558
// random = 0.1681325775435013
// random = 0.8043733490993711
// random = 0.985614423707166

document.write("====================== " + "<br>")

while (random > 0.1) {
    random = Math.random()
    document.write("random = " + random + "<br>")
}
// random = 0.5959901135191241
// random = 0.39366977257978375
// random = 0.8396488249709056
// random = 0.8503857152805915
// random = 0.8640820171359652
// random = 0.3404496866867507
// random = 0.7008204046704956
// random = 0.5185090504502183
// random = 0.16163002659793668
// random = 0.043993298049713525

outloop:for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) continue outloop
        document.write("i = " + i + j + "<br>")
    }
}

let list = document.getElementsByTagName("*")
for (let i = 0; i < list.length; i++) {
    let element = list[i]
    let content
    with (element) {
        if (nodeName != "BR") {
            document.write("nodeName:" + nodeName + " nodeType:" + nodeType + "\r\n")
        }
    }
}
// nodeName:HTML nodeType:1
// nodeName:HEAD nodeType:1
// nodeName:TITLE nodeType:1
// nodeName:BODY nodeType:1
// nodeName:SCRIPT nodeType:1

// number = Math.random() * 20;
// switch (true) {
//     case number < 0:
//         alert("less than 0");
//         break;
//     case number < 10:
//         alert("less than 10");
//         break;
//     case number < 20:
//         alert("less than 20");
//         break;
//     default :
//         alert("more than 20");
// }

// for (let property in window) {
//     document.write("property = " + property + " ---- " + (typeof property) + "<br>");
// }

function sayHi(name, message) {
    // document.write("Hello, " + name + ", " + message + "<br>");
    document.write("Hello, " + arguments[0] + ", " + arguments[1] + "<br>")
}

sayHi("Nicholas", "how are you today?")//Hello, Nicholas, how are you today?

function diff(num1, num2) {
    return num1 > num2 ? num1 - num2 : num2 - num1
}

document.write("diff(12,23) = " + diff(12, 23) + "<br>")
document.write("diff(23,12) = " + diff(23, 12) + "<br>")
document.write("diff(12,12) = " + diff(12, 12) + "<br>")
// diff(12,23) = 11
// diff(23,12) = 11
// diff(12,12) = 0

function testArguments() {
    for (let i = 0; i < arguments.length; i++) {
        document.write("arguments[" + i + "] = " + arguments[i].toString() + "<br>")
    }
}

testArguments(1, "2", true, false, 3.1415926, typeof testArguments, testArguments)
// arguments[0] = 1
// arguments[1] = 2
// arguments[2] = true
// arguments[3] = false
// arguments[4] = 3.1415926
// arguments[5] = function
// arguments[6] = function testArguments() { for (let i = 0; i < arguments.length; i++) { document.write("arguments[" + i + "] = " + arguments[i].toString() + "
// "); } }