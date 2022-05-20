window.onload = function createDivs() {
  var cartItems = JSON.parse(localStorage.getItem('cart-products'));
  if(cartItems === null) {
    var displayEmpty = document.createElement('div');
    displayEmpty.innerHTML = "Your Cart Is Empty!";
    displayEmpty.setAttribute('id', 'empty-cart');
    document.getElementById('cartDisplay').appendChild(displayEmpty);
    updateCartTotal();
  } else {
    for(let i = 0; i<cartItems.length; i++) {
      var divProductPhoto = document.createElement('div');
      divProductPhoto.className = "grid-item";
      divProductPhoto.setAttribute("id", "cartItemPhoto");
      productPhoto = document.createElement('img');
      productPhoto.setAttribute("id", "cart-item");
      var src = "images/" + cartItems[i].ProductName + ".jpg";
      productPhoto.setAttribute("src", src);
      divProductPhoto.appendChild(productPhoto);
      document.getElementById('cartDisplay').appendChild(divProductPhoto);


      divProductDesc = document.createElement('div');
      divProductDesc.className = "grid-item";
      divProductDesc.setAttribute("value", cartItems[i].ProductName);
      divProductDesc.setAttribute("id", "name");
      var productSize = cartItems[i].ProductSize;

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
      divProductDesc.innerHTML = cartItems[i].ProductName + "<br>" + productSize + "<br>" + productPrice + "<br>";
      var removeButton = document.createElement('a');
      removeButton.innerHTML = "remove";
      removeButton.setAttribute('id', 'removeProduct');
      removeButton.setAttribute('onclick', "removeCartItem(event)");
      divProductDesc.appendChild(removeButton);
      document.getElementById('cartDisplay').appendChild(divProductDesc);
    }
    updateCartTotal();
  }
}

function updateDivs() {
  var cartItems = JSON.parse(localStorage.getItem('cart-products'));
  if(cartItems === null) {
    var displayEmpty = document.createElement('div');
    displayEmpty.innerHTML = "Your Cart Is Empty!";
    displayEmpty.setAttribute('id', 'empty-cart');
    document.getElementById('cartDisplay').appendChild(displayEmpty);
    updateCartTotal();
  }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var item = document.getElementById('name').value;
    buttonClicked.parentElement.remove();
    document.getElementById('cartItemPhoto').remove();
    var removeStorage = JSON.parse(localStorage.getItem('cart-products'));
    const index = removeStorage.indexOf(item);
    console.log(index);
    console.log(removeStorage.length);
    console.log(removeStorage);
    if(index > -1){
      removeStorage.splice(index,1);
      localStorage.setItem('cart-products', JSON.stringify(removeStorage));
      console.log(removeStorage.length);
    } else {
      removeStorage.shift(index);
      localStorage.setItem('cart-products', JSON.stringify(removeStorage));
      console.log(removeStorage.length);
    }
    if(removeStorage.length === 0) {
      localStorage.removeItem('cart-products');
    }
    updateCartTotal();
    updateDivs();
}

function updateCartTotal() {
  var cartItems = JSON.parse(localStorage.getItem('cart-products'));
  var total = 0;
  if(cartItems === null) {
    document.getElementById('total-price').innerHTML = "Total Price: $0";
    document.getElementById('total-items').innerHTML = "Total Items: 0";
    var checkoutButton = document.getElementById('checkout-cart');
    checkoutButton.remove();
  } else {
    for(let i = 0; i<cartItems.length; i++) {
      productSize = cartItems[i].ProductSize;
      switch (productSize) {
        case '1-lb':
          productPrice = 19.95;
          break;
        case '2.5-lb':
          productPrice = 32.75;
          break;
        case '5-lb':
          productPrice = 46.75;
          break;
        default:
          productPrice = 0;
      }
      total += productPrice;
    }
    document.getElementById('total-price').innerHTML = "Total Price: $" + total;
    document.getElementById('total-items').innerHTML = "Total Items: " + cartItems.length;
  }
}

function clearCart() {
  localStorage.removeItem('cart-products');
}
