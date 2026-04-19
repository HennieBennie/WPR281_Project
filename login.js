function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let admin = "admin";

    if (username === admin && password === admin) {
        localStorage.setItem("loggedIn", "true");
        window.location.href ="index.html";

    }
}