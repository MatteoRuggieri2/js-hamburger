// Seleziono l'icona del burger-menu
const burgerIcon = document.querySelector( "div.header-right > a" );

// Seleziono il burger-menu
const activeBurgerMenu = document.querySelector('.hamburger-menu');

// Aggiunto evento - Al click sull'icona del burger si apre il menu
burgerIcon.addEventListener('click',

    function() {
        activeBurgerMenu.classList.add('active');
    }

);