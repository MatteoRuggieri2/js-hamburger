// Seleziono l'icona del burger-menu
const burgerIcon = document.querySelector( "div.header-right > a" );

// Aggiunto evento - Al click sull'icona del burger si apre il menu
burgerIcon.addEventListener('click',

    function() {
        // Seleziono il burger-menu
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.classList.add('active');
    }

);

const closeBurgerMenu = document.querySelector( ".close" );

// Aggiunto evento - Al click sull'icona "close" si chiude il menu
closeBurgerMenu.addEventListener('click',

    function() {
        const burgerMenu = document.querySelector('.hamburger-menu');
        burgerMenu.classList.remove('active');
    }

);