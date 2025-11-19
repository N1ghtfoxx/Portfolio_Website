// Einfacher JavaScript-Code für Interaktionen

// Navigation - Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Button zum Anzeigen der Projekte
document.getElementById('projekte-button').addEventListener('click', function () {
    document.getElementById('projekte').scrollIntoView({
        behavior: 'smooth'
    });
});

// Projekt-Buttons
document.querySelectorAll('.projekt-button').forEach(button => {
    button.addEventListener('click', function () {
        const projektTitel = this.parentElement.querySelector('h3').textContent;
        alert('Mehr Informationen zu: ' + projektTitel + '\n\n(Dies ist nur eine Demo. In einer echten Website würde hier eine Detailseite geöffnet.)');
    });
});

//// Formular-Absenden
//document.getElementById('kontakt-formular').addEventListener('submit', function (e) {
//    e.preventDefault();
//    alert('Vielen Dank für deine Nachricht! Ich melde mich bald bei dir.');
//    this.reset();
//});

// Einfache Animation beim Scrollen
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});

// Start-Animation
window.addEventListener('load', function () {
    document.querySelector('#home').classList.add('fade-in');
});