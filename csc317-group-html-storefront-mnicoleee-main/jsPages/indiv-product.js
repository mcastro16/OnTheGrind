//FOR INDIV-PRODUCT.HTML

window.onload = function getSelectedProduct() {
  var selectedProduct = localStorage.getItem('productName');
  document.getElementById('product-name').innerHTML = selectedProduct;
  switch (selectedProduct) {
    case 'arabica':
      var src = "images/packaging_photos/arabica_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'bourbon':
      var src = "images/packaging_photos/bourbon_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'excelsa':
      var src = "images/packaging_photos/excelsa_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'french roast':
      var src = "images/packaging_photos/frenchroast_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'geisha':
      var src = "images/packaging_photos/geisha_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'liberica':
      var src = "images/packaging_photos/liberica_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'robusta':
      var src = "images/packaging_photos/robusta_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'typica':
      var src = "images/packaging_photos/typica_Packaging.png";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'green tea':
      var src = "images/green.jpg";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
    case 'rose tea':
      var src = "images/rose.jpg";
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
    default:
      var src = "";
      document.getElementById('productPhoto').setAttribute("src", src);
      break;
  }
}
