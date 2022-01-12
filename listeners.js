import ProductCard from "./components/ProductCard.js";
import getData, { BASE_URL } from "./services/apiFetch.js";

export function loadCategory(e) {
  e.preventDefault();
  console.log(e.target.id)
  getData(BASE_URL + "/categories/" + e.target.id).then(res => {
    console.log(res)
    const root = document.querySelector("#root")
    root.innerHTML = res.map((product) => {
      return ProductCard(product)
    }).join("")

  })
}

export function loadResults(e) {
  e.preventDefault();
  const query = e.target.input.value
  getData(BASE_URL + "/products" + `?q=${query}&per_page=100`).then(res => {
    console.log(res)
    const root = document.querySelector("#root")
    root.innerHTML = res.results.map((product) => {
      return ProductCard(product)
    }).join("")

  })
}

