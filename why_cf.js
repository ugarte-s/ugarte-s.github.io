// Video modal
const modal = document.getElementById('videoModal');
function openVideo() {
	modal.style.display = 'block';
}
function closeVideo() {
	modal.style.display = 'none';
}

// Links
function gotoGallery() {
	window.location.href = 'clubs.html';
}
function gotoMap() {
	window.location.href = 'locations.html';
}

// Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
