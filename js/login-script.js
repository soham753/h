document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Simulate a successful login (you should replace this with actual authentication)
    if (username && password && role) {
        // Redirect to the appropriate dashboard based on the selected role
        switch(role) {
            case "patient":
                window.location.href = "patient-dashboard.html";
                break;
            case "doctor":
                window.location.href = "doctor-dashboard.html";
                break;
            case "lab":
                window.location.href = "lab-dashboard.html";
                break;
            case "hospital":
                window.location.href = "hospital-dashboard.html";
                break;
            case "medical":
                window.location.href = "medical-dashboard.html";
                break;
            default:
                alert("Please select a valid role.");
        }
    } else {
        alert("Please fill out all fields.");
    }
});
