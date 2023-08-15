document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.querySelector(".download-button");
    const alertBox = document.getElementById("alert-box");

    downloadButton.addEventListener("click", function() {
        alertBox.style.display = "block";
        setTimeout(function() {
            alertBox.style.display = "none";
        }, 5000); // Hide after 5 seconds
    });
});
