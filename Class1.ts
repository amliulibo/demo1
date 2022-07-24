//1 类定义
class Person {
    name: string;
    age: number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name + ":" + this.age;
    }
}

var p1 = new Person("zhangsan", 10);
console.log(p1.print());

//2 类继承
class Student extends Person{
    cardnumber: string;
    school: string;
    constructor(cardnumber: string, school: string) {
        super("张三", 20)
        this.cardnumber = cardnumber
        this.school=school
    }
    dohomework() {
        return this.name + "今年" + this.age + "岁，就读于" + this.school + "学校，身份证：" + this.cardnumber;
    }
}
var stu1 = new Student("1001","北京外语学院");
// stu1.cardnumber = "1001";
// stu1.school="北京外语学院"
console.log(stu1.dohomework());

//3 接口继承
interface Printer{
    print();
}
interface ColorPrinter extends Printer{
    colorPrint();
}
class HPPrinter implements ColorPrinter{
    getMsg(): string {
        return ("HPPrinter.getMsg");
    }
    Printing(msg: string): string {
        throw new Error("Method not implemented.");
    }
    colorPrint() {
        return ("HPPrinter.colorPrint");
    }
    print() {
        return ("HPPrinter.print");
    }

}
var hp1: ColorPrinter = new HPPrinter();
console.log(hp1.print());
console.log(hp1.colorPrint());
var hp2 = new HPPrinter();
console.log(hp2.getMsg());

// 3.1 访问修饰符
//public ,private,protected

class Person1 {
    public name: string;
    protected age: number;
    private address:string
    constructor(name:string,age:number,address:string) {
        this.name = name;
        this.age = age;
        this.address=address
    }
    print() {
        return this.name + ":" + this.age;
    }
}

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
class Person2{
    name: string;
    static age: number;//静态属性

    static show(){return "static method show"}
}

console.log(Person2.show());

//5 多态
class Animal{
    eat() {
        console.log("animal eat");
        
    }
}
class Cat extends Animal{
    eat(): void {
        console.log("cat eat");
        
    }
}
class Dog extends Animal{
    eat(): void {
        console.log("dog eat");
        
    }
}
var c1:Animal = new Cat();
c1.eat();
c1 = new Dog();
c1.eat();

//6 抽象类/抽象方法
//6.1 抽象类是提供其他类型继承的基类，不能直接实例化
//6.2 抽象方法只能包含在抽象类中，抽象类中可以包含抽象方法和非抽象方法
//6.3 子类继承抽象类，实现抽象方法
abstract class Animal2{
    abstract eat();
    run() {
        console.log("Animal2 run ");
        
    }
}
class Cat2 extends Animal2{
    eat() {
        return ("Cat2 eat.");
    }
    
}
var cat2: Animal2 = new Cat2();
console.log(cat2.eat()
);
