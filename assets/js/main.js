// Active anchor navigation  
var traHoaQua = [ 
    // Trà hoa quả 
    {
        pathProduct:  './assets/images/tra-phuc-bon-tu.png',
        nameProduct: 'Trà Phúc Bồn Tử', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-vai.png',
        nameProduct: 'Trà Vải', 
        priceProduct: '55.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-cam-dao.png',
        nameProduct: 'Trà Cam Đào', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-tao.png',
        nameProduct: 'Trà Táo', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-viet-quat.png',
        nameProduct: 'Trà Việt Quất', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-dau-tay.png',
        nameProduct: 'Trà Dâu Tây', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-xoai.png',
        nameProduct: 'Trà Xoài', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-chanh.png',
        nameProduct: 'Trà Chanh', 
        priceProduct: '40.000đ'
    },  

] 
var traSua= [ 
    // Trà sua
    {
        pathProduct:  './assets/images/tra-sua/tra-sua-dua-leo.png',
        nameProduct: 'Trà Sữa Dưa Leo', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-sua/tra-dua-huong-nho.png',
        nameProduct: 'Trà sữa hương nho', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-sua/tra-sua-double-tea.png',
        nameProduct: 'Trà sữa double tea', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-sua/tra-sua-dua-luoi.png',
        nameProduct: 'Trà Sữa Dưa lưới', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-sua/tra-sua-hat-de.png',
        nameProduct: 'Trà sữa hạt dẻ', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-sua/tra-sua-khoai-mon.png',
        nameProduct: 'Trà sữa khoai môn', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-sua/tra-sua-kiwi.png',
        nameProduct: 'Trà sữa kiwi', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/tra-sua/tra-sua-socola.png',
        nameProduct: 'Trà sữa socola', 
        priceProduct: '40.000đ'
    },  

]  
var smooThies= [ 
    // SmooThies
    {
        pathProduct:  './assets/images/smoothies-1.png',
        nameProduct: 'Smoothies Chuối Dừa', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/smoothies-2.png',
        nameProduct: 'Smoothies Dâu Việt Quất', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/smoothties-3.png',
        nameProduct: 'Smoothies Dâu', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/smoothies-4.png',
        nameProduct: 'oothies Dâu Chuối', 
        priceProduct: '40.000đ'
    }
]  
var banhNgot= [ 
    // Banh Ngot
    {
        pathProduct:  './assets/images/banh-ca-phe.png',
        nameProduct: 'Bánh cà phê phô mai', 
        priceProduct: '40.000 đ'
    }, 
    {
        pathProduct:  './assets/images/banh-tiram.png',
        nameProduct: 'Tiramisu', 
        priceProduct: '40.000 đ'
    }, 
    {
        pathProduct:  './assets/images/banh-caramel.png',
        nameProduct: 'caramel phomai', 
        priceProduct: '40.000 đ'
    }, 
    {
        pathProduct:  './assets/images/banh-bongg-lan-cuon.png',
        nameProduct: 'Bông lan cuộn trà xanh', 
        priceProduct: '40.000 đ'
    }
]  
var caPhe = [ 
    // Banh Ngot
    {
        pathProduct:  './assets/images/latte.png',
        nameProduct: 'Latte', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/espresso.png',
        nameProduct: 'EsPresso', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/cappu.png',
        nameProduct: 'Cappuccino', 
        priceProduct: '40.000đ'
    }, 
    {
        pathProduct:  './assets/images/caramel-macchi.png',
        nameProduct: 'Caramel Macchiato', 
        priceProduct: '40.000đ'
    }
]   
var menu = [
    traHoaQua, traSua, smooThies, banhNgot, caPhe
]  
var currentActive = document.getElementsByClassName('active-color')
var activeColor = document.querySelector('.active-color')   
var timeChoose = 0   
var isRemove = false
var btnAddCarts = document.querySelectorAll('.btn-add-cart')  
var htmlCart   
var totalPrice
var indexUseds = [] 
var priceProductList = []  
var choosedProductList = []  
var totalPriceProduct = 0  
var totalPriceProductChoose = 0   
var currentLength
var i = 0 
var dataId = 0
var boxCart = document.querySelector('.cart-container')  
var boxContent = document.querySelector('.cart-content')    
// Owl Carousel 
$('.owl-carousel').owlCarousel({
    loop: false,  
    stagePadding: 25,
    margin:0,
    nav:true, 
    // autoplay: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
}) 
// Toggle Menu 
var buttonToggles = document.querySelectorAll('.menu--buttons button')  
for(var buttonToggle of buttonToggles) { 
    buttonToggle.onclick =  function(e){       
        // Thêm màu cho button   
        var buttonCurrentActive = document.getElementsByClassName('back-active')[0]
        buttonCurrentActive.classList.remove('back-active')
        e.target.classList.add('back-active')  
        e.target.style.outline = "none"
        // Toggle menu
        var acticeMenuItem = document.getElementsByClassName('block')
        acticeMenuItem[0].classList.remove('block') 
        var tabIndexCurrent = e.target.getAttribute("data-tab") 
        document.getElementsByClassName(`${tabIndexCurrent}`)[0].classList.add('block')
    }
}  

// Hàm Thay đổi giá trị html Cart 
function changeHTMLCart(path, name, price){  
            htmlCart  =`
                <div class="row mb-5 cart-row cart-content-item">  
                    <div class="col-3">
                        <img style="width: 85px;" src="${path}" alt="">
                    </div> 
                <div class="col-7">
                    <div class="cart-infor">
                        <h3 class="cart-heading cart-item-title">${name}</h3>
                        <p class="cart-price">${price}</p> 
                        <input min="0" value="1" type="number" name="" class="cart-quantity-input">
                    </div>
                </div> 
                <div class="trash-btn-contain">
                    <i class="trash-btn trash-btn ti-trash" data-id='${dataId}' onclick="function(e){console.log.(e.target)}"></i>
                </div>
            </div>       
        `   
        dataId++;
        return htmlCart
}   
function renderCartItem(path, name, price) {   
    var htmlCart  =`
                <div class="row mb-5 cart-content-item">  
                    <div class="col-3">
                        <img style="width: 85px;" src="${path}" alt="">
                    </div> 
                <div class="col-7">
                    <div class="cart-infor">
                        <h3 class="cart-heading">${name}</h3>
                        <p class="cart-price">${price}</p> 
                        <input min="0" value="1" type="number" name="" class="cart-quan">
                    </div>
                </div> 
                <div class="trash-btn-contain">
                    <i class="trash-btn ti-trash" data-id='${dataId}' onclick="removeProduct()"></i>
                </div>
            </div>       
        `   
        dataId++;           
    document.querySelector('.cart-content').innerHTML += htmlCart;  
    timeChoose++;     
}  

// Hàm lấy số
function getNumber(stringValues) {  
    var resultString = '' 
    for(var stringValue of stringValues) {   
        var stringValueNumber = Number(stringValue)
        if(!Number.isNaN(stringValueNumber)) { 
            resultString += stringValueNumber
        } 
    }
    return Number(resultString)  
}      
function reverse(s){
    return s.split("").reverse().join("");
}
function stringRender(stringValue){  
    result = '' 
    var count = 0 
    for(var i = stringValue.length - 1; i >= 0 ; i--) { 
        count++    
        result += stringValue[i] 
        if(count % 3 == 0) { 
            result += '.'
        } 
    }    
    lastResult = reverse(result) 
    if(stringValue.length % 3 == 0) { 
        return lastResult.substring(1)
    } else { 
        return lastResult
    }
   
}    

function getObjectProduct(path, name, price) { 
    return { 
            pathProduct: path, 
            nameProduct: name,  
            priceProduct: price
        } 
}   
function clearCart() { 
    document.querySelector('.cart-content').innerHTML = ''
} 
var updateValue  
var total
var dataId = 0
var storageArray =  []
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
// Click thêm vào giỏ hàng   
function ready() { 
    var removeCartItemButtons = document.getElementsByClassName('trash-btn')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Khi sô lượng thay
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
} 
function removeCartItem(event) {
    var buttonClicked = event.target
    var indexRemove = buttonClicked.getAttribute('data-id') 
    storageArray.splice( Number(indexRemove) , 1)
    buttonClicked.parentElement.parentElement.remove() 

    updateValue = getNumber(buttonClicked.parentElement.parentElement.getElementsByClassName('cart-price')[0].innerText)  

    total-=updateValue 

    document.getElementsByClassName('cart-total-price')[0].innerText = stringRender(total.toString()) + ' đ' 

} 

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) { 
    document.querySelector('.cart-container').classList.add('block') 
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    
    var objectProduct = getObjectProduct(title, price, imageSrc)
    storageArray.push(objectProduct) 
    addItemToCart(title, price, imageSrc) 
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
                <div class="row mb-5 cart-content-item">  
                    <div class="col-3">
                        <img style="width: 85px;" src="${imageSrc}" alt="">
                    </div> 
                <div class="col-7">
                    <div class="cart-infor">
                        <h3 class="cart-heading cart-item-title">${title}</h3>
                        <p class="cart-price">${price}</p> 
                        <input min="0" value="1" type="number" name="" class="cart-quantity-input">
                    </div>
                </div> 
                <div class="trash-btn-contain">
                    <i class="trash-btn ti-trash" data-id='${dataId}'></i>
                </div>
            </div>       
        ` 
    cartRow.innerHTML = cartRowContents; dataId++
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('trash-btn')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    total = 0
    for (var i = 0; i < cartRows.length; i++) { 
        var cartRow = cartRows[i] 
        var priceElement = cartRow.getElementsByClassName('cart-price')[0] 
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]   

        var price = getNumber(priceElement.innerText)
        var quantity = quantityElement.value 
        total += (price * quantity)  
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = stringRender(total.toString()) + ' đ'
}  
// Close Cart  
function closeBoxCart() { 
    document.querySelector('.cart-container').classList.remove('block')
}
// Mobi Mobi 
document.querySelector('.menu-mobi').onclick = function() { 
    document.querySelector('.nav-box-mobi').classList.add('block')
} 
document.querySelector('.nav-box-mobi').onclick = function() { 
    document.querySelector('.nav-box-mobi').classList.remove('block')
} 
document.querySelector('.nav-box-mobi').stopPropagation()
// Detail Cart    
// var time = 0
// document.querySelector('.cart-sumary').innerHTML = `
// <div class="row item-cart mb-5">
//     <img class="item-img mr-5" style="width: 160px;" src="${storageArray[0].pathProduct}" alt=""> 
//     <div class="item-infor">
//         <h3 class="item-title">${storageArray[0].nameProduct}</h3>
//         <p class="item-price">${storageArray[0].priceProduct}</p>
//     </div>
// </div>
// ` 
// if(time <= storageArray.length) { 
//     time++
// }












