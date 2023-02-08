 function toggle(){
  let nav = document.getElementById("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
 }


// carousel start
var slideIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slider-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2500); // Change image every 2.5 seconds
}
// carousel end
showProduct();
// show Product start
function showProduct() {
    let arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
    if (arrProduct==null){
        arrProduct=[];
    }

let allProduct = document.getElementById("allProduct")
allProduct.innerHTML=``;
arrProduct.forEach((product, index) => {
    allProduct.innerHTML +=`
    
                <div class="col" data-key="${index}" >
                    <div class="card" style="width: 16rem;">
                        <img class="card-img-top" src="${product.productUrl}">
                        <div class="card-block">
                            <h4 class="card-title">${product.productName}</h4>
                            <p class="card-text">Price: ${product.productPrice}$</p>
                            <button type="button" class="add btn btn-primary" onclick="add_to_cart('${product.productId}','${product.productName}','${product.productPrice}')">Add to cart</button>
                        </div>
                    </div>
                </div>
            
    `
});
}



window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}






