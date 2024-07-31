

function toggleDropdown(id) {
    var dropdown = document.querySelector('#' + id).nextElementSibling; // Get the next sibling ul.drop-down

    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none'; // Hide the dropdown if it's visible
    } else {
        dropdown.style.display = 'block'; // Show the dropdown if it's hidden
    }
}
