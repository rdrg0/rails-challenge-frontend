import CategoryLink from "./components/CategoryLink.js";
import ProductCard from "./components/ProductCard.js";
import { loadCategory, loadResults } from "./listeners.js";
import { loadCategories, loadProducts } from "./loaders.js";
import getData, { BASE_URL } from "./services/apiFetch.js";


loadProducts();
loadCategories();

const searchForm = document.querySelector("#search")
searchForm.addEventListener("submit", loadResults)








