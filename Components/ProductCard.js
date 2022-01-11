function ProductCard(product) {
  return `
    <div class="product">
      <div class="thumbnail">
        <img class="img" src=${product.} alt="Card image cap">
      </div>
      <div class="product-content">
        <h6>${product.name}</h6>
        <div>
          <p class="font-weight-light">190.00</p>
          <p class="font-weight-light">${product.price}</p>
          <a href="#" class="btn btn-sm btn-outline-secondary mt-1">Add to cart</a>
        </div>
      </div>
    </div>
  `
}