var wrap = document.querySelectorAll('ul');
    var arrow = document.querySelector('.arrow');
	var names = document.querySelectorAll('#names');
	for (var i = 0; i < names.length; i++) {
			names[i].addEventListener('click', function(e) {
			for (var i = 0; i < wrap.length; i++) {
			if(e.target === document.getElementById('newArrivals')){
					wrap[i].style.left = '0%';
					arrow.style.left = '26%';
			}else if(e.target === document.getElementById('bestSellers')){
					wrap[i].style.left = '-100%';
					arrow.style.left = '40%';

			}
		}
	})
}

function setSelectedProduct(product) {
  console.log(product);
  localStorage.setItem('productName', product);
}
