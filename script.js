function login() {

    const teamId = document.getElementById("teamId").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Temporary demo login
    // Real database authentication baad me add karenge.

    if (teamId === "RAMPAGE" && password === "1234") {

        error.style.color = "#8cff00";
        error.textContent = "Login successful!";

        setTimeout(() => {
            alert("Rampage Dashboard coming next!");
        }, 500);

    } else {

        error.style.color = "#ff3333";
        error.textContent = "Invalid Team ID or Password.";

    }
}


// Enter key se login
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        login();
    }

});
