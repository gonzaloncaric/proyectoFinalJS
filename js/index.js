const productsContainer = document.getElementById('products-container')

showProducts(products)

function showProducts(array) {
    productsContainer.innerHTML = ''

    array.forEach((product) => {
        let div = document.createElement('div')
        div.classList.add('product-card-small')
        div.innerHTML = `
            <div class="product-options">
                <button onclick=addToCart() class="cart-icon-container">
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

function addToCart() {
    console.log("click")
}