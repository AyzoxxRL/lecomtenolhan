document.addEventListener('DOMContentLoaded', () => {
    const space = document.getElementById('space');
    const numStars = 250;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'stars';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        space.appendChild(star);
    }

    generateShootingStars();
});

function generateShootingStars() {
    setInterval(createShootingStar, 3000);
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    document.body.appendChild(shootingStar);

    shootingStar.style.left = `${Math.random() * 100}vw`;
    shootingStar.style.animationDuration = `${Math.random() * 2 + 2}s`;

    setTimeout(() => {
        shootingStar.remove();
    }, 2000);
}
$(function() { 
    $("#one").addClass("progress-bar-purple");
    $("#two").addClass("progress-bar-orange");
    $("#three").addClass("progress-bar-blue")
 });