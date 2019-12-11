function submitForm() {
    $('form').on('click', function (e){
        e.preventDefault();
        const userValue = $('#inputText').val();
        acquireData(userValue);
        $('.data').empty();
    })
    //this function is going to listen form an event on the form
    //then is needs to grab the users input and prevent default submission
    //then pass in displayResults function to help display the results lol
}

function acquireData(userName) {
    fetch (`https://api.github.com/users/${userName}/repos`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson, maxResults))
    .catch(error => {
        $('.message').text(`Something happened behind the scenes: ${error.message}`);
    });
    //this function is going to use the fetch api to use user input to grab data
    //this function will handle the promises and check if the response is okay with response.ok
    //this function will use parameters 
}

function displayResults() {
    //this function is going to use the data from the responseJSON
    //jquery will be used to traverse the dom to display the data
}

submitForm();