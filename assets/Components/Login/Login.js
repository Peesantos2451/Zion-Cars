function login () {
    //Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
}

    //Check if the username and password are valid
    if (username == "exampleuser" && password == "examplepass") {
        alert("Login successful!");
    } else {
      alert("Invalid username or password!")
    }