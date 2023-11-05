document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const showError = urlParams.get("error");

    if (showError) {
        // If 'error' is present, show the error alert
        const errorAlert = document.getElementById("errorAlert");
        errorAlert.style.display = "block";

        // Hide the error alert after 5000 milliseconds (5 seconds)
        setTimeout(() => {
            errorAlert.style.display = "none";
            // Optionally, clear the query parameter from the URL
            window.history.replaceState(null, null, window.location.pathname);
        }, 2000);
    }
});
