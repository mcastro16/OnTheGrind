function setSelectedValue() {
  document.getElementById('added-alert').innerHTML = " ";
  var selectedValue = document.getElementById('product').value;
  localStorage.setItem('product-size', selectedValue);
  var productSize = "$0";
  switch (productSize) {
    case '1-lb':
      productPrice = "$19.95";
      break;
    case '2.5-lb':
      productPrice = "$32.75";
      break;
    case '5-lb':
      productPrice = "$46.75";
      break;
    default:
      productPrice = "$0";
  }
  localstorage.setItem('product-price', productPrice);

}

function addCartAlert() {
  var cartProducts = JSON.parse(localStorage.getItem('cart-products'));
  document.getElementById('added-alert').innerHTML = "Added to Cart!";
  if(cartProducts === null) {
    localStorage.removeItem('cart-sizes');
    localStorage.removeItem('cart-products');
    cartProducts = [];
    cartSizes = [];
  }
  var entryProduct = document.getElementById('product-name').innerHTML;
  var entrySize = document.getElementById('product').value;
  var entry = {
    "ProductName": entryProduct,
    "ProductSize": entrySize
  };
  cartProducts.push(entry);
  localStorage.setItem("cart-products", JSON.stringify(cartProducts));
}

window.onload = function getSelectedValue() {
  var selectedProduct = localStorage.getItem('productName');
  var sizeProduct = localStorage.getItem('product-size');
  document.getElementById('product-title').innerHTML = selectedProduct;
  document.getElementById('result-size').value = sizeProduct;
  switch (selectedProduct) {
    case 'arabica':
      var src = "images/packaging_photos/arabica_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'bourbon':
      var src = "images/packaging_photos/bourbon_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'excelsa':
      var src = "images/packaging_photos/excelsa_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'french roast':
      var src = "images/packaging_photos/frenchroast_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'geisha':
      var src = "images/packaging_photos/geisha_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'liberica':
      var src = "images/packaging_photos/liberica_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'robusta':
      var src = "images/packaging_photos/robusta_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'typica':
      var src = "images/packaging_photos/typica_packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'green tea':
      var src = "images/green.jpeg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'rose tea':
      var src = "images/rose.jpeg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'herbal tea':
      var src = "images/herbal.jpg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'white tea':
      var src = "images/herbal.jpg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'shirt':
      var src = "images/shirt.jpg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'shirt2':
      var src = "images/shirt2.jpg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'shirt3':
      var src = "images/shirt3.jpg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    default:
      var src = "";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
  }
  const productSize = document.getElementById('result-size').value;
  document.getElementById('result-size').innerHTML = productSize;
  switch (productSize) {
    case '1-lb':
      document.getElementById('result-price').innerHTML = "$19.95";
      break;
    case '2.5-lb':
      document.getElementById('result-price').innerHTML = "$32.75";
      break;
    case '5-lb':
      document.getElementById('result-price').innerHTML = "$46.75";
      break;
    default:
      document.getElementById('result-price').innerHHTML = "$0";
  }
}


/*slideshow for images*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
