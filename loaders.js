import CategoryLink from "./components/CategoryLink.js"
import ProductCard from "./components/ProductCard.js"
import { loadCategory } from "./listeners.js"
import getData, { BASE_URL } from "./services/apiFetch.js"

export function loadProducts() {
  const root = document.querySelector("#root")
  getData(BASE_URL + "/products?per_page=100").then(res => {
    console.log(res)
    root.innerHTML = res.results.map((product) => {
      return ProductCard(product)
    }).join("")
  })
}

export function loadCategories() {
  const categories = document.querySelector("#categories")
  categories.addEventListener("click", loadCategory)

  getData(BASE_URL + "/categories").then(res => {
    console.log(res)
    categories.innerHTML = res.map((category) => {
      return CategoryLink(category)
    }).join("")
  })
}



