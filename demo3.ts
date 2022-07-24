interface IPrinter{
    Printing(msg: string): string;
}

interface IMessage{
    getMsg():string
}

class ColorPrinter implements IPrinter, IMessage {
    
    getMsg(): string {
        return "惠普1100";
    }
    Printing(msg: string): string {

        return "打印" + msg + "成功"
    }

    
    
}

let p1 = new ColorPrinter()
let v1 = p1.Printing("简历")
let v2=p1.getMsg()
console.log(v1);
console.log(v2);

//2 对函数的约束
interface IMyFunction{
    (a: string, b: number): boolean;
}
let fun1: IMyFunction;
fun1 = function (a: string, b: number): boolean{
    return true;
}

//3 对数组进行约束
interface IStudentArray{

    [index: number]: string;
}
let arr1: IStudentArray;
arr1 = ["aaa", "bbb"]
console.log(arr1);

//4 json
interface IData{
    name: string,
    readonly age: number,//只读属性
    email?:string//可选
}
function showData(n: IData) {
    
    // n.age = 18;
console.log(JSON.stringify(n));
}
showData({ name: "张三", age: 11 })

