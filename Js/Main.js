const menuAdicional = document.querySelector('.navbar-email')
const menudesktop = document.querySelector('.desktop-menu')
const menuLogo = document.querySelector('.menuLogo')
const mobileMenu = document.querySelector('.mobile-menu')
const asideCarro = document.querySelector('.product-detail')
const aside = document.querySelector('.navbar-shopping-cart')
const flechita = document.querySelector('.flechita')
const cardsContainer = document.querySelector('.cards-container');
const productoDetalle = document.querySelector('.product-detail1')
const cerrarProductoDetalle = document.querySelector('.product-detail-close')
let opcionDeProducto

//
menuLogo.addEventListener('click', activarMenuMobile)
menuAdicional.addEventListener('click', activarMenu)
aside.addEventListener('click', activarCarrito)
flechita.addEventListener('click', esconder)
cerrarProductoDetalle.addEventListener('click', cerrarDetalle)

function activarMenu(){
    const asideCerrado = asideCarro.classList.contains('inactive')
    if(!asideCerrado){
        asideCarro.classList.add('inactive');
       }
    menudesktop.classList.toggle('inactive');
}
function activarMenuMobile(){
    const asideCerrado = asideCarro.classList.contains('inactive')
    if(!asideCerrado){
        asideCarro.classList.add('inactive');
       }

       cerrarDetalle();
      mobileMenu.classList.toggle('inactive');
}
function activarCarrito(){
    const mobileMenuCerrado = mobileMenu.classList.contains('inactive')
     if(!mobileMenuCerrado){
        mobileMenu.classList.add('inactive');
       }
   asideCarro.classList.toggle('inactive');     

    const productodetalleCerrado = productoDetalle.classList.contains('inactive')
    if(!productodetalleCerrado){
        productoDetalle.classList.add('inactive');  
    }     
    menudesktop.classList.add('inactive');


    const menudesktopCerrrado = menudesktop.classList.contains('inactive')
    if(!menudesktopCerrrado){
     menudesktop.classList.add('inactive');  
       }     
    menudesktop.classList.add('inactive');

}

function esconder(){
    asideCarro.classList.toggle('inactive');
}
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: './icons/pantalla.jpg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: './icons/pc.jfif',
});

function Productos(array) {
  for (producto of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', producto.image);
    productImg.addEventListener('click', abrirDetalle)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + producto.price;
    const productName = document.createElement('p');
    productName.innerText = producto.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}
Productos(productList);

function abrirDetalle(){
    
 asideCarro.classList.add('inactive')

productoDetalle.classList.remove('inactive')
}

function cerrarDetalle(){
    productoDetalle.classList.add('inactive')
}


/*
function Productos() {       

    productList.forEach((producto1) => {
        opcionDeProducto =  `<div class="product-card">
        <img src=${producto1.image} alt="">
        <div class="product-info">
          <div>
            <p>${producto1.price}</p>
            <p>${producto1.name}</p>
          </div>
          <figure>
            <img id="imagen" src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`


      cardsContainer.innerHTML += opcionDeProducto

    })
    
}

Productos(productList)
*/
