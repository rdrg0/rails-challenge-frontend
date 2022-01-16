import { loadResults } from "./listeners.js";
import { loadCategories, loadProducts } from "./loaders.js";

// Load products and categories
loadProducts();
loadCategories();

// Add listener to the search form
const searchForm = document.querySelector("#search")
searchForm.addEventListener("submit", loadResults)








