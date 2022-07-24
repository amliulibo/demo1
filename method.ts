//1 函数的定义
//2 参数（可选参数/默认参数/剩余参数）
//3 方法重载

//js
// function add(x, y) {
//     return x + y;
// }
// let add1 = function (x, y) { return x + y }
//ts
function add(x:number, y:number): number{
    return x + y;
}
function show(name: string, age?: number,sex:boolean=false): void{
    console.log(name,age,sex);
    
}
show("zhagnsan ", 11)
show("里斯 ")
//剩余参数
function add2(p1, p2, ...x: number[]): number{
    let sum = 0;
    for (var i = 0; i < x.length, i++;){
        sum+=x[i]
    }
    return p1+p2+sum;
}
let sum1 = add2(1, 2, 3, 4, 5, 6, 7);
console.log("sum1=",sum1);

//函数重载
