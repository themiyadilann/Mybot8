function updateDateTime() {
    const now = new Date();
    const dateTime = now.toLocaleString();
    document.getElementById('datetime').textContent = dateTime;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call
