// Firebase configuration and initialization
firebase.initializeApp(firebaseConfig);

// Navbar dynamic update based on user auth state
const authSection = document.getElementById("authSection");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is logged in
    authSection.innerHTML = `
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="profileMenu" data-bs-toggle="dropdown" aria-expanded="false">
          ${user.displayName || "Profile"}
        </button>
        <ul class="dropdown-menu" aria-labelledby="profileMenu">
          <li><a class="dropdown-item" href="/profile.html">View Profile</a></li>
          <li><a class="dropdown-item" id="logoutButton">Logout</a></li>
        </ul>
      </div>
    `;

    document.getElementById("logoutButton").addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        alert("Logged out successfully!");
        window.location.reload();
      });
    });
  } else {
    // User is not logged in
    authSection.innerHTML = `<a href="login.html">Sign In</a>`;
  }
});
