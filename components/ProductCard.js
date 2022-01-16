// Return html elements for a product as a string

function ProductCard(product) {
  const image = product.url_image ? product.url_image : "../assets/default-product-image.png"
  let price = ""

  // Check wether the product has discount in order to display it and change the final price
  if (product.discount) {
    price = `    
    <p class="font-weight-light" style="text-decoration: line-through;">S/ ${(product.price / 100).toFixed(2)}</p>
    <p class="font-weight-light">S/ ${((product.price / 100) * (1 - (product.discount / 100))).toFixed(2)}</p>
    `
  } else {
    price = `    
    <p class="font-weight-light" >S/ ${(product.price / 100).toFixed(2)}</p>
    `
  }
  return `
    <div class="product" id=${product.id}>
      <div class="thumbnail">
        <img class="img" src=${image} alt="Card image cap">
      </div>
      <div class="product-content">
        <div>
          <h6 class="title">${product.name}</h6>
        </div>
        <div>
          ${price}
          <a href="#" class="btn btn-sm btn-outline-secondary mt-1">Add to cart</a>
        </div>
      </div>
    </div>
  `
}

export default ProductCard;