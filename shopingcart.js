//1 mock data
var cartGoodsListData = [{
        id: "1",
        name: "苹果手机",
        desc: "美国货",
        price: 2000,
        count: 1,
        isChecked: true
    }, {
        id: "2",
        name: "华为手机",
        desc: "中国精品",
        price: 1000,
        count: 10,
        isChecked: true
    }];
//2 shoping cart class
var Cart = /** @class */ (function () {
    function Cart() {
        this.cartGoodsList = cartGoodsListData;
        this.cartdom = document.querySelector("#box");
        this.sumdom = document.querySelector("#sum");
    }
    //1 render cart
    Cart.prototype.renderCart = function () {
        var cartDomString = "";
        this.cartGoodsList.forEach(function (element) {
            cartDomString += "\n            <li>\n                <input type=\"checkbox\" ".concat(element.isChecked ? 'checked' : '', " id=\"").concat(element.id, "\"/>\n                <span>").concat(element.name, ",").concat(element.desc, "</span>\n                ,").concat(element.price, ",").concat(element.count, "\n            </li>\n            ");
        });
        console.log(cartDomString);
        this.cartdom.innerHTML = cartDomString;
    };
    //2 render sum
    Cart.prototype.renderTotalPrince = function () {
        var total = 0;
        this.cartGoodsList.forEach(function (element) {
            if (!element.isChecked)
                return;
            total += element.price * element.count;
        });
        this.sumdom.innerHTML = "Y" + total;
    };
    //3 check /uncheck goods
    Cart.prototype.checkGoods = function (id) {
        this.cartGoodsList.forEach(function (element) {
            if (element.id === id) {
                element.isChecked = element.isChecked ? false : true;
            }
        });
        this.renderTotalPrince();
    };
    //4 entry init
    Cart.prototype.init = function () {
        var _this = this;
        this.renderCart();
        this.renderTotalPrince();
        // bind click event for checkbox
        document.querySelectorAll("input").forEach(function (item) {
            item.addEventListener("click", function () {
                _this.checkGoods(item.id);
            });
        });
    };
    return Cart;
}());
//instatnce
var cart1 = new Cart();
cart1.init();
