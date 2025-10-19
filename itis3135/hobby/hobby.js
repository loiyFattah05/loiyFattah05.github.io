const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

function showSection(id) {
    sections.forEach((s) => s.classList.remove('active'));
    document.querySelector(id).classList.add('active');
}

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(link.getAttribute('href'));
    });
});

showSection('#what');

function findNearby() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const query = 'outdoor gym or park';
            const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}/@${lat},${lon},14z`;
            window.open(mapsUrl, '_blank');
        }, () => {
            alert('Location access denied. Please allow location or search manually.');
        });
    } else {
        alert('Geolocation not supported in this browser.');
    }
}