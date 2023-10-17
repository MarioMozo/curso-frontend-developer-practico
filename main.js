const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const aside = document.querySelector('.product-detail');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuIcon = document.querySelector('.menu');
const desktopMobile = document.querySelector('.mobile-menu');

const cardsContainer = document.querySelector('.product-card');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleDesktopMobile);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    console.log("Se hizo click");
    
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');        
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleDesktopMobile() {
    
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');        
    }
    desktopMobile.classList.toggle('inactive');

}

function toggleCarritoAside() {
    console.log("Funcion click para mostrar compras, ejecuntando correctamente...");
    //
    const isMobileMenuClosed = desktopMobile.classList.contains('inactive');
    if (!desktopMobile) {
        desktopMobile.classList.add('inactive');        
    }
    aside.classList.toggle('inactive');
}


const producList = [];

producList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

producList.push({
    name: 'Screen',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

producList.push({
    name: 'Smartphone',
    price: 280,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

producList.push({
    name: 'Smartphone',
    price: 280,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



for(product of producList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const producName = document.createElement('p');
    producName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(producName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('productImg');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo); 

    cardsContainer.appendChild(productCard);
}