//1 泛型函数
function printarr(arr) {
    //for in 得到元素的下标
    // /for of 得到具体的元素
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        console.log(item); //for of 得到具体的元素
    }
}
function printarr2(arr) {
    //for in 得到元素的下标
    // /for of 得到具体的元素
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        console.log(item); //for of 得到具体的元素
    }
}
printarr([1, 2, 3, 4, 5]);
printarr2(["a", "b", "C", "D"]);
function printarr3(arr) {
    //for in 得到元素的下标
    // /for of 得到具体的元素
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var item = arr_3[_i];
        console.log(item); //for of 得到具体的元素
    }
}
printarr3([111, 222, 333]);
printarr3(["aaa", "BBB"]);
//2 泛型类
var GenericClass = /** @class */ (function () {
    function GenericClass() {
        this.list = [];
    }
    GenericClass.prototype.add = function (val) {
        this.list.push(val);
    };
    return GenericClass;
}());
var gc1 = new GenericClass();
gc1.add(111);
gc1.add(222);
console.log(gc1.list);
var iadd = function (p1, p2) { return p1 + p2; };
console.log(iadd(10, 20));
