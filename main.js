function acquireData(userValue) {
    fetch (`https://api.github.com/users/${userValue}/repos`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => {
        $('.message').text(`Something happened behind the scenes: ${error.message}`);
    });
    //this function is going to use the fetch api to use user input to grab data
    //this function will handle the promises and check if the response is okay with response.ok
    //this function will use parameters 
}

function displayResults(responseJson) {
    console.log(responseJson);
    const userValue = $('#userVal').val();
    let userRepo = responseJson;
    $('.data').append(`<h2>${userValue}</h2`)
    $('.data').append(`<ul class='user-results'></ul>`) 
        for (let i = 0; i < userRepo.length; i++){
            console.log(userRepo[i].name);
            console.log(userRepo[i].html_url);
            $('.data').append(`<li>
            <p><a href="${userRepo[i].html_url}">${userRepo[i].name}</a></p>
            </li>`)
        }
    }

    //this function is going to use the data from the responseJSON
    //jquery will be used to traverse the dom to display the data
function submitForm() {
    $('#inputText').on('click', function (e){
        e.preventDefault();
        const userValue = $('#userVal').val();
        acquireData(userValue);
        $('.data').empty();
    })
    //this function is going to listen form an event on the form
    //then is needs to grab the users input and prevent default submission
    //then pass in displayResults function to help display the results lol
}

submitForm();