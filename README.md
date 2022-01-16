# Bsale Challenge - Frontend

## Challenge Overview

The challenge requires the implementation of a server and a client side app for an online store. The frontend and the backend apps communicate through a REST API. An existing MySQL database is provided wich comprises products and categories. Additionally, search logic must be implemented serverside.

## Client side application

The client side application is a Single Page Application built with Vanilla Javascript and some Bootstrap components

### Structure

```
rails-challenge-frontend
├─ README.md
├─ assets
│  └─ default-product-image.png
├─ components
│  ├─ CategoryLink.js
│  └─ ProductCard.js
├─ css
│  └─ index.css
├─ index.html
├─ index.js
├─ listeners.js
├─ loaders.js
└─ services
   └─ apiFetch.js

```
The `index.html` file has two main static html elements. A navbar whith an emptiy category list that is loaded dynamically on page load and a products container where products are loaded when: page loads, the user clicks a category or the user searches for a product. This file calls `index.js` with the attribute `type="module"` so that the app structure is modularized.

Components in `./components` take the data retrieved by the `getData` function from the API and outputs a string of html with the data inserted.

Html is dynamically loaded when a loader is called in `loaders.js` or when an event triggers a listener in `listeners.js` by inserting a component inside a DOM element with the `innerHTMl` method.

## Development

To run locally clone this repo and open `index.html` in the browser or with live server. There's no need to install anything since there are no dependencies.

## Production
 This project was deployed using Netlify. View here: https://naughty-easley-52bfc9.netlify.app/





