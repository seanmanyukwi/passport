// Get the search form elements
const searchForm = document.querySelector('.search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Add a submit event listener to the search form
searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Get the search query from the input field
  const searchQuery = searchInput.value.trim();

  // Perform the search logic here
  // For example, you can make an AJAX request to a server to search for the query
  console.log(`Searching for: ${searchQuery}`);
});