//1 mock data
const cartGoodsListData=[{
    id:"1",
    name:"苹果手机",
    desc:"美国货",
    price:2000,
    count:1,
    isChecked:true
}, {
        id:"2",
        name:"华为手机",
        desc:"中国精品",
        price:1000,
        count:10,
        isChecked:true
}];
//2 shoping cart class
class Cart{
    cartGoodsList = cartGoodsListData;
    cartdom: HTMLElement = document.querySelector("#box")
    sumdom: HTMLElement = document.querySelector("#sum");
    //1 render cart
    renderCart() {
        let cartDomString = "";
        this.cartGoodsList.forEach(element => {
            cartDomString += `
            <li>
                <input type="checkbox" ${element.isChecked ? 'checked' : ''} id="${element.id}"/>
                <span>${element.name},${element.desc}</span>
                ,${element.price},${element.count}
            </li>
            `;
        });
        console.log(cartDomString);
        
        this.cartdom.innerHTML = cartDomString;
    }
    //2 render sum
    renderTotalPrince() {
        let total = 0;
        this.cartGoodsList.forEach(element => {
            if (!element.isChecked) return;
            total += element.price * element.count;
        });
        this.sumdom.innerHTML = "Y" + total;
    }
    //3 check /uncheck goods
    checkGoods(id) {
         this.cartGoodsList.forEach(element => {
             if (element.id === id) {
                 element.isChecked =  element.isChecked?false:true;
            }
         });
        
        this.renderTotalPrince();
    }
    //4 entry init
    init() {
        this.renderCart();
        this.renderTotalPrince();
        // bind click event for checkbox
        document.querySelectorAll("input").forEach(item => {
            item.addEventListener("click", () => {
                this.checkGoods(item.id);
                
            })
        })
    }


}
//instatnce
let cart1 = new Cart();
cart1.init();