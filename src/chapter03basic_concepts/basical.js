/**
 * 这个是
 * 多行注释
 * */

//单行注释

function doSomething() {
    "use strict";//此句是一个编译指示，指示JavaScript引擎切换到严格模式
//    函数体
}

function test() {
    var local = 'hi';//方法内部局部变量
    globalVariable = "Hi";//没有var作为前缀的赋值，全局变量
}

test();
alert(globalVariable);//Hi


var num = undefined;
alert(typeof num);//undefined
// alert(num1);//出错
alert(typeof num1);//undefined
num = 2;
alert(typeof num);//number
var arr = [];
alert(typeof arr[0]);//undefined

/*
* null只针对object类型
* */
var car = null;
alert(typeof car);//object
//undefined派生自null
alert(null == undefined);//true
alert(null === undefined);//false
alert(typeof undefined);//undefined
alert(typeof null);//object

var found = true;
var lost = false;
alert(Boolean("Hello,world!"));//true
alert(Boolean(""));//false
alert(Boolean(0));//false
alert(Boolean(NaN));//false
alert(Boolean(1.0));//true
alert(Boolean(null));//false
alert(Boolean(undefined));//false
alert(Boolean({}));//true 注意 new Object() === {} != null

var decimalInt = 55;
var octInt = 070;//八进制
var heximalInt = 0x1f;//十六进制
var floatNum1 = 1.1;
var floatNum2 = .1;
var floatNum3 = 3.125e7;
var b = .2;
if (floatNum2 + b === 0.3) {
    alert("you got 0.3!");
} else {
    alert(floatNum2 + b);//0.30000000000000004
}

var result = Number.MAX_VALUE + Number.MAX_VALUE;
alert(isFinite(result));//false

alert(NaN == NaN);//false
alert(isNaN("false"));//true
alert(isNaN(false));//false
alert(isNaN("true"));//true
alert(isNaN(true));//false
alert(isNaN("blue"));//true
alert(isNaN(""));//false
alert(isNaN("10"));//false
alert(isNaN(10));//false

alert(Number("Hello"));//NaN
alert(Number(true));//1
alert(Number(false));//0
alert(Number(""));//0
alert(Number("1"));//1
alert(Number("001"));//1
alert(parseInt("001"));//1
alert(parseInt("070"));//70 解析不了八进制
alert(parseInt("audi070"));//NaN
alert(parseInt("22.5"));//22
alert(parseInt("1234blue"));//1234
alert(parseInt("0x1f"));//31
alert(parseInt(true));//NaN

var text = "This is the letter sigma:\u03a3";
alert(text);//This is the letter sigma:Σ
var lang = "Java";
lang += "Script";
alert(lang);//JavaScript

var number = 10;
number.toString();//10
number.toString(2);//1010
number.toString(8);//12
number.toString(16);//a

var object = new Object();


var number = 25;
var neg = ~number;
document.write("25 = "+number.toString(2));//25 = 11001
document.write("\~25 = "+neg.toString(2));//~25 = -11010

document.write(!!"blue" + "\n");
document.write(!!0 + "\n");
document.write(!!NaN + "\n");
document.write(!!"" + "\n");
document.write(!!123 + "\n");
//true false false false true

var result1 = ("55" == 55);//true
var result2 = ("55" === 55);//false

var a,b,c = (1,2,4);
document.write(a + " ");//undefined
document.write(b + " ");//undefined
document.write(c + " ");//4

outloop:for (var i = 0; i < 10; i++) {
    if (i % 5 == 0) continue outloop;
    document.write(i + " <br>");
}

var list = document.getElementsByTagName("*");
for (var i = 0; i < list.length; i++) {
    var element = list[i];
    var content;
    with (element){
        content = i + "  "+ nodeName + " => " + nodeType + " => " + " | ";
    }
    document.write(content);
}
//0 HTML => 1 => | 1 HEAD => 1 => | 2 TITLE => 1 => | 3 BODY => 1 => | 4 SCRIPT => 1 => |

var number = 12;
switch (true) {
    case number < 0:
        alert("less than 0");
        break;
    case number < 10:
        alert("less than 10");
        break;
    case number < 20:
        alert("less than 20");
        break;
    default :
        alert("more than 20");
}

function testArguments() {
    for (var i = 0; i < arguments.length; i++) {
        document.write(i + ":" + arguments[i].toString() + "<br>");
    }
}

testArguments(1,"2",true,false,3.1415926,typeof testArguments,testArguments);
// 0:1
// 1:2
// 2:true
// 3:false
// 4:3.1415926
// 5:function
// 6:function testArguments() { for (var i = 0; i < arguments.length; i++) { document.write(i + ":" + arguments[i].toString() + "
//     "); } }