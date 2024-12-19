// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP8nXl5E_sbgWJ0gtg2Zc4g25qrKBwZig",
    authDomain: "project-petconnect.firebaseapp.com",
    projectId: "project-petconnect",
    storageBucket: "project-petconnect.firebaseapp.com",
    messagingSenderId: "155588273182",
    appId: "1:155588273182:web:fc35e82fcd02a509243a0f",
    measurementId: "G-8NPRLMDZ70"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Functionality for toggling password visibility
function EyeButton() {
    const passwordField = document.getElementById("passwordfield");
    const eyeIcon = document.getElementById("eye");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("ri-eye-line");
        eyeIcon.classList.add("ri-eye-off-line");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("ri-eye-off-line");
        eyeIcon.classList.add("ri-eye-line");
    }
}

// Google Login Functionality
const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            alert(`Welcome, ${user.displayName}!`);
            console.log("User Info:", user);

            // Optionally, redirect to another page after login
            // window.location.href = "dashboard.html";
        })
        .catch(error => {
            console.error("Error during Google Sign-In:", error);
            alert("Login failed. Please try again.");
        });
};

// Attach Google login function to the button
document.getElementById("google-login-btn").addEventListener("click", googleLogin);

// Prevent form submission for the Login button (if no backend is integrated yet)
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login with username/password is not implemented yet.");
});
