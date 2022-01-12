export const BASE_URL = "https://bsale-test-rdrg0.herokuapp.com"

function getData(url) {
  const response = fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log(response.message)
      }
    })

  return response

}

export default getData;