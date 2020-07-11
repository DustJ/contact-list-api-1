import './style.css';

const userListContainer = document.querySelector('.user-list')
const searchField = document.querySelector('.user-list__search-input')
const userCard = document.querySelectorAll('.user-list__user-card')
const loadingIndicator = document.querySelector('.user-list__loading-indicator')

const apiKey = ''
const apiURL = ''



// —————————————————————————————————————————————————————————————————
// Events
// —————————————————————————————————————————————————————————————————
// searchField even keyup with debounce helper
// create list of dom elements.includes(searchTerm)
// matchedEls
// if(searchTerm.length) {
  // matchedEls Leave row visible
// } else {
  // !matchedEls Hide row
// }




// —————————————————————————————————————————————————————————————————
// Helpers
// —————————————————————————————————————————————————————————————————
// debounce for keyup search




// —————————————————————————————————————————————————————————————————
// API Call
// Method: GET
// Requires: endpoint with leading slash: apiGet('/users')
// —————————————————————————————————————————————————————————————————
// async function apiGet(apiEndpoint, OPTIONAL pagination, fetchOptions with token)
// Note: pagination format &page=3
// return apiResponse




// —————————————————————————————————————————————————————————————————
// Build initial list of users
// —————————————————————————————————————————————————————————————————
// async function loopThroughUsers()
// show loading indicator
// const usersData = await apiGet() endpoint + OPTIONAL pagination
// hide loading indicator
// loop through users 
// insert user cards using insertAdjacentHTML
// div.user-list__user-card
// user-list__user-name
// user-list__user-email
