// let cartInfo = document.getElementById("cart-info")
//  let shopingCartItem1 = document.getElementById("shopingCart")

// cartInfo.addEventListener("click",function(){
//     console.log("zeft")
//     shopingCartItem1.classList.toggle()
// })
// var productElement = $(".product-item")


var sum = 0

var productimg = $("img").attr("src")
var productname = $(".catagory-name").text()
var productprice = $(".product-price").text()

for(var i = 0 ;i<productprice.length;i++){
    sum+= productprice[i]

}

console.log(sum)


// var productInfo =[]
// productInfo.push(productElement)
// console.log(productInfo.push(productElement))
// var productObj = {
//     "productimg":productimg ,
//     "productname":productname ,
//     "productprice":productprice
// }

// productInfo.forEach(id => {
    
// });



$(document).ready(function(){
  $("#cart-info").click(function(){
        console.log("zeft")

    $(".shopingCart").slideToggle()
  })
  $(".addToCartBtn").click(function(){
      $().click(function(){
        console.log(productObj)

      })

  })
})


// function to remove product 

var faTrash =  document.getElementsByClassName("fa-trash")
console.log(faTrash)

for(var i =0  ; i<faTrash.length ;i++){
  var buttom = faTrash[i]
  buttom.addEventListener("click",function(event){
    var  buttomClicked =  event.target ;
    console.log(buttomClicked)

     buttomClicked.parentElement.parentElement.remove()
  })
}


// Update total price 
// var shopingCartTotalPriceNumber = document.getElementById("shopingCart-totalPrice-number")
// var xx = shopingCartTotalPriceNumber.innerText=productprice 
// console.log(xx)