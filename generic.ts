//1 泛型函数
function printarr(arr: number[]): void{
   
       //for in 得到元素的下标
      // /for of 得到具体的元素
       for (var item of arr) {
           console.log(item);//for of 得到具体的元素
           
       }
   
}
function printarr2(arr: string[]): void{
    
       //for in 得到元素的下标
      // /for of 得到具体的元素
       for (var item of arr) {
           console.log(item);//for of 得到具体的元素
           
       }
   
}
printarr([1, 2, 3, 4, 5])
printarr2(["a", "b", "C", "D"])

function printarr3<T>(arr: T[]): void{
    
       //for in 得到元素的下标
      // /for of 得到具体的元素
       for (var item of arr) {
           console.log(item);//for of 得到具体的元素
           
       }
   
}
printarr3([111, 222, 333])
printarr3(["aaa","BBB"])
//2 泛型类
class GenericClass<T>{
    public name: T
    public list: T[] = []
    add(val: T): void{
        this.list.push(val)
    }
}
let gc1 = new GenericClass<number>();
gc1.add(111);
gc1.add(222)
console.log(gc1.list);


//3 泛型接口
interface IAdd<T>{
    (x:T,y:T):T
}
let iadd: IAdd<number> = (p1, p2) => { return p1 + p2 };
console.log(iadd(10,20));
