// ===============================
// LOGIN
// ===============================

function login() {

    const teamId = document.getElementById("teamId").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Temporary demo login
    if (teamId === "RAMPAGE" && password === "1234") {

        error.textContent = "";

        document.getElementById("login-page").style.display = "none";
        document.getElementById("dashboard").style.display = "block";

        document.getElementById("home-section").style.display = "block";
        document.getElementById("freefire-section").style.display = "none";

        document.body.style.overflow = "auto";

    } else {

        error.style.color = "#ff3333";
        error.textContent = "Invalid Team ID or Password.";

    }
}


// ===============================
// OPEN FREE FIRE MAX
// ===============================

function openFreeFire() {

    document.getElementById("home-section").style.display = "none";

    document.getElementById("freefire-section").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// BACK TO DASHBOARD
// ===============================

function goHome() {

    document.getElementById("freefire-section").style.display = "none";

    document.getElementById("home-section").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// FLIP TEAM CARD
// ===============================

function flipCard(button) {

    const card = button.closest(".team-card");

    card.classList.toggle("flipped");

}


// ===============================
// LOGOUT
// ===============================

function logout() {

    document.getElementById("dashboard").style.display = "none";

    document.getElementById("login-page").style.display = "flex";

    document.getElementById("home-section").style.display = "block";

    document.getElementById("freefire-section").style.display = "none";

    document.getElementById("teamId").value = "";

    document.getElementById("password").value = "";

    document.getElementById("error").textContent = "";

    window.scrollTo(0, 0);

    document.body.style.overflow = "hidden";
}


// ===============================
// ENTER KEY LOGIN
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const loginPage =
            document.getElementById("login-page");

        if (
            loginPage &&
            loginPage.style.display !== "none"
        ) {

            login();

        }

    }

});
