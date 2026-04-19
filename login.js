function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded admin login
    const adminUsername = "admin";
    const adminPassword = "admin";

    if (username === adminUsername && password === adminPassword) {
        // Optional: mark user as logged in
        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";
    } else {
        document.getElementById("errorMsg").textContent = "Invalid username or password";
    }
}