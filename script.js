
function checkPassword() {
    const correctPassword = "cyber@123";
    const enteredPassword = document.getElementById("password").value;
    if (enteredPassword === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("error-msg").innerText = "Incorrect Password!";
    }
}
