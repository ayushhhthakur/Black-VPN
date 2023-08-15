document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.querySelector(".btn");

    downloadButton.addEventListener("click", function() {
        const alertBox = document.createElement("div");
        alertBox.className = "alert-box";
        alertBox.textContent = "Black VPN will be released soon !";
        document.body.appendChild(alertBox);

        setTimeout(function() {
            alertBox.remove();
        }, 5000); // Remove after 5 seconds
    });
});
