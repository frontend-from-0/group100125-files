fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Call a function to display the data
        displayCV(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function displayCV(data) {
    const cvContainer = document.getElementById('cv-container');
    // Code to dynamically insert data into the HTML will go here
}