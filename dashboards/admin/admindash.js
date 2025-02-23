document.addEventListener("DOMContentLoaded", function() {
    const profileBtn = document.getElementById("profileBtn");
    const profileDropdown = document.getElementById("profileDropdown");

    const notificationBtn = document.getElementById("notificationBtn");
    const notificationDropdown = document.getElementById("notificationDropdown");

    profileBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
        notificationDropdown.style.display = "none";
    });

    notificationBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        notificationDropdown.style.display = notificationDropdown.style.display === "block" ? "none" : "block";
        profileDropdown.style.display = "none";
    });

    document.addEventListener("click", function(event) {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.style.display = "none";
        }
        if (!notificationBtn.contains(event.target) && !notificationDropdown.contains(event.target)) {
            notificationDropdown.style.display = "none";
        }
    });

    document.getElementById("logoutBtn").addEventListener("click", function() {
        window.location.href = "/index.html"; 
    });
});
