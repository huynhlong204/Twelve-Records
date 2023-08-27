let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbars');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// Cart shop
const btn = document.querySelectorAll(".btn-cart");

btn.forEach(function(button,index) {
    button.addEventListener("click", function(event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector(".img-top").src;
        var productName = product.querySelector(".card-title").innerText;
        var productPrice = product.querySelector(".price").innerText;
        addCart(productImg, productName, productPrice);
    })
})

function addCart(productImg, productName, productPrice) {
    var addTr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0;i<cartItem.length;i++) {
        var productT = document.querySelectorAll(".name");
        if(productT[i].innerHTML==productName) {
            alert('Sản phẩm của bạn đã có trong giỏ hàng');
            return;
        }
    }
    var trContent = '<tr> <td style="display: flex; align-items: center;"><img src="'+productImg+'" alt="diacd" style="width: 70px; border-radius: 10px;"><span class="p-3 name">'+productName+'</span></td> <td><span class="price">'+productPrice+'</span></td><td style="padding: 0 8px;"><input type="number" min="1" value="1" style="width: 30px; outline: none; text-align: center;"></td><td style="cursor: pointer;" class="delete">Xóa</td></tr>'
    var carTable = document.querySelector("tbody");
    addTr.innerHTML = trContent;
    carTable.append(addTr)
    carttotal();
    deleteProduct();
    thanhtoan();
}

// Totalprice
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalA = 0;
    for(var i = 0; i< cartItem.length;i++) {
        var inputVlue = cartItem[i].querySelector("input").value;
        var productPrices = cartItem[i].querySelector(".price").innerHTML;
        var totalB = productPrices*inputVlue*1000;
        totalA = totalA+totalB;
    }
    var sumCart = document.querySelector(".price-title span");
    sumCart.innerHTML = totalA.toLocaleString('de-DE');
    inputChange();
}
// Delete Product
function deleteProduct() {
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0;i<cartItem.length;i++) {
        var productT = document.querySelectorAll(".delete");
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target;
            var cartItems = cartDelete.parentElement;
            cartItems.remove();
            carttotal();
        })
        
    }
}

function inputChange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0;i<cartItem.length;i++) {
        var inputChangeValue = cartItem[i].querySelector("input");
        inputChangeValue.addEventListener("change", function() {
            carttotal();
        })
    }
}

let cart = document.querySelector(".cart-shop");
let carts = document.querySelector(".cart");

carts.onclick = () => {
    cart.classList.toggle('active');
}
