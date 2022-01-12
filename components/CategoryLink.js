function CategoryLink(category) {
  return `
  <a class="dropdown-item" id="${category.id}"href="#">${category.name}</a>
  `
}

export default CategoryLink;