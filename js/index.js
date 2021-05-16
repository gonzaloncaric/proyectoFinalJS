// Productos Destacados
const productsContainer = document.getElementById('products-container')
showProducts(featuredProductsList)

function showProducts(array) {
    productsContainer.innerHTML = ''

    array.forEach((product) => {
        let div = document.createElement('div')
        div.classList.add('product-card-small')
        div.innerHTML = `
            <div class="product-options">
                <button onclick=addToCart(${product.id}) class="cart-icon-container">
                    <img class="cart-icon" src="../images/icons/fluent_cart-24-regular.svg" alt="">
                </button>
            </div>
            <div class="product-img">
                <img src=${product.image} alt="">
            </div>
            <div class="product-info">
                <p class="product-title">${product.name}</p>
                <p class="product-cod">Code - ${product.cod}</p>
                <p class="product-price">$ ${product.price}</p>
            </div>
            `
        productsContainer.appendChild(div)
    });
}

// Ultimos productos
const latestProducts = document.getElementById('latest-products')
showLatestProducts(latestProductsList)

function showLatestProducts(array) {
    latestProducts.innerHTML = ''

    array.forEach((product) => {
        let div = document.createElement('div')
        div.classList.add('product-card-photo')
        div.innerHTML = `
            <div class="product-options">
                <button onclick=addToCart(${product.id}) class="cart-icon-container">
                    <img class="cart-icon" src="../images/icons/fluent_cart-24-regular.svg" alt="">
                </button>
            </div>
            <div class="product-img">
                <img src=${product.image} alt="">
            </div>
            <div class="product-info">
                <p class="product-title">${product.name}</p>
                <p class="product-price">$ ${product.price}</p>
            </div>
            `
        latestProducts.appendChild(div)
    });
}

// Carrito de compras
function addToCart(id) {
    const product = products.find(item => item.id == id)
    if (product) {
        cartItems.push(product)
    }
    setCart()
}

function deleteProduct(id) {
    const deleteProd = cartItems.find(item => item.id == id)
    const index = cartItems.indexOf(deleteProd)
    cartItems.splice(index, 1)

    setCart()
}

function setCart() {
    const itemsContainer = document.getElementsByClassName('items-view-cart')[0]
    itemsContainer.innerHTML = ''

    cartItems.forEach((product) => {
        itemsContainer.innerHTML += `
            <div class="product-item-cart">
                <div class="item-img">
                    <img src=${product.image} alt="">
                </div>
                <div class="product-item-info">
                    <p class="product-title">${product.name}</p>
                    <p class="product-price">Precio: $${product.price}</p>
                </div>
                <button onclick=deleteProduct(${product.id})  class="delete">Delete</button>
            </div>
        `
    })
}

const cartItems = []

const viewCart = document.getElementsByClassName('cart-button')[0]
const openCart = document.getElementsByClassName('cart-container')[0]

viewCart.addEventListener('click', () => {
    openCart.classList.toggle('cart-container-active')
})

const closeCart = document.getElementById('close-cart')
const cart = document.getElementsByClassName('bg-view-cart')[0]

closeCart.addEventListener('click', () => {
    openCart.classList.toggle('cart-container-active')
})
openCart.addEventListener('click', () => {
    openCart.classList.toggle('cart-container-active')
})
cart.addEventListener('click', (event) => {
    event.stopPropagation()
})