var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1 类定义
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return Person;
}());
var p1 = new Person("zhangsan", 10);
console.log(p1.print());
//2 类继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(cardnumber, school) {
        var _this = _super.call(this, "张三", 20) || this;
        _this.cardnumber = cardnumber;
        _this.school = school;
        return _this;
    }
    Student.prototype.dohomework = function () {
        return this.name + "今年" + this.age + "岁，就读于" + this.school + "学校，身份证：" + this.cardnumber;
    };
    return Student;
}(Person));
var stu1 = new Student("1001", "北京外语学院");
// stu1.cardnumber = "1001";
// stu1.school="北京外语学院"
console.log(stu1.dohomework());
var HPPrinter = /** @class */ (function () {
    function HPPrinter() {
    }
    HPPrinter.prototype.getMsg = function () {
        return ("HPPrinter.getMsg");
    };
    HPPrinter.prototype.Printing = function (msg) {
        throw new Error("Method not implemented.");
    };
    HPPrinter.prototype.colorPrint = function () {
        return ("HPPrinter.colorPrint");
    };
    HPPrinter.prototype.print = function () {
        return ("HPPrinter.print");
    };
    return HPPrinter;
}());
var hp1 = new HPPrinter();
console.log(hp1.print());
console.log(hp1.colorPrint());
var hp2 = new HPPrinter();
console.log(hp2.getMsg());
// 3.1 访问修饰符
//public ,private,protected
var Person1 = /** @class */ (function () {
    function Person1(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person1.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return Person1;
}());
//4 静态属性和静态方法
// function Person2() {
//     this.name = "张三"//实例属性
//     //实例方法
//     this.print=function(){...}
// }
// Person2.age = 19;//静态属性
// //静态方法
// Person2.print1 = function () {... }
// Person2.print1();//调用静态方法
// var p2 = new Person2();
// p2.print();//调用实例方法
//----ts ---------------
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.show = function () { return "static method show"; };
    return Person2;
}());
console.log(Person2.show());
//5 多态
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("animal eat");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eat = function () {
        console.log("cat eat");
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log("dog eat");
    };
    return Dog;
}(Animal));
var c1 = new Cat();
c1.eat();
c1 = new Dog();
c1.eat();
//6 抽象类/抽象方法
//6.1 抽象类是提供其他类型继承的基类，不能直接实例化
//6.2 抽象方法只能包含在抽象类中，抽象类中可以包含抽象方法和非抽象方法
//6.3 子类继承抽象类，实现抽象方法
var Animal2 = /** @class */ (function () {
    function Animal2() {
    }
    Animal2.prototype.run = function () {
        console.log("Animal2 run ");
    };
    return Animal2;
}());
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat2.prototype.eat = function () {
        return ("Cat2 eat.");
    };
    return Cat2;
}(Animal2));
var cat2 = new Cat2();
console.log(cat2.eat());
