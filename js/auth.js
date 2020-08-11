// New user registration onclick function
document.getElementById("register").onclick = function () {

    // Retrieve the email and password information off the index.html page
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    e.preventDefault();
    e.stopPropagation();

    firebase.auth().createUserWithEmailAndPassword(username, password).catch(function (error) {
        // Handle errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })

}

// Login onclick function
document.getElementById("login").onclick = function () {

    // Retrieve the email and password information off the index.html page
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    e.preventDefault();
    e.stopPropagation();

    firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
        // Handle errors here
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })

}