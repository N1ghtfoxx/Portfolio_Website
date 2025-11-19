const images = [
    { src: '../media/img/Illustrator_Project.png', title: 'Game Background' },
    { src: '../media/img/Carousel.png', title: 'Carousel At Night' },
    { src: '../media/img/TreasureChest.png', title: 'Dungeon Maze Asset - Chest' },
    { src: '../media/img/Ham.png', title: 'Dungeon Maze Asset - Ham' },
];

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');

    lightboxImg.src = images[index].src;
    lightboxTitle.textContent = images[index].title;
    lightbox.classList.add('active');

    // Verhindert Scrollen im Hintergrund
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    // Schlieﬂt nur wenn auf Hintergrund oder X geklickt wird
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ESC-Taste zum Schlieﬂen
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});
