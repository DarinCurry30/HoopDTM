
document.addEventListener("DOMContentLoaded", async () => {
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (!footerPlaceholder) {
        return;
    }

    try {
        const response = await fetch("footer.html");

        if (!response.ok) {
            throw new Error(`Failed to load footer: ${response.status}`);
        }

        const footerHTML = await response.text();
        footerPlaceholder.innerHTML = footerHTML;
    } catch (error) {
        console.error("Error loading the Hoop DTM footer:", error);
    }
});
