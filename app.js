function fetchData(searchQuery) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    const url = `https://api.publicapis.org/entries`;

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parse the JSON response
            const data = JSON.parse(xhr.responseText);
            // Call the function to display the data on the webpage
            displayData(data);
        } else {
            console.error(`Error fetching data. Status code: ${xhr.status}`);
        }
    };

    // Open the GET request with the API endpoint
    xhr.open('GET', url, true);
    // Send the request
    xhr.send();
}

// Display the data on the webpage
function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';

    // Loop through the data and create a new div element for each item
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = item.name; // Use the relevant property from the API response
        dataContainer.appendChild(itemDiv);
    });
}

// Add event listener to the search form
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('search-input').value;
    fetchData(searchQuery);
});

