//Video Modals
function openVideo(n) {
    var modal = document.getElementsByClassName('videoModal')[n];
    modal.style.display = 'block';
}

function closeVideo(n) {
    var modal = document.getElementsByClassName('videoModal')[n];
    modal.style.display = 'none';
}

// Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
