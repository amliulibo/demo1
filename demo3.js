var ColorPrinter = /** @class */ (function () {
    function ColorPrinter() {
    }
    ColorPrinter.prototype.getMsg = function () {
        return "惠普1100";
    };
    ColorPrinter.prototype.Printing = function (msg) {
        return "打印" + msg + "成功";
    };
    return ColorPrinter;
}());
var p1 = new ColorPrinter();
var v1 = p1.Printing("简历");
var v2 = p1.getMsg();
console.log(v1);
console.log(v2);
var fun1;
fun1 = function (a, b) {
    return true;
};
var arr1;
arr1 = ["aaa", "bbb"];
console.log(arr1);
function showData(n) {
    n.age = 18;
    console.log(JSON.stringify(n));
}
showData({ name: "张三", age: 11 });
