const app = new Vue({
    el: '#avadaBakery',
    data: {
        navBarLogo: {
            src: 'img/avada-bakery-logo-retina.png',
            alt: 'Avada Bakery Shop',
        },
        navBarMenuObjects: [{
                title: 'home',
                link: '#',
            },
            {
                title: 'shop',
                link: '#',
            },
            {
                title: 'about',
                link: '#',
            },
            {
                title: 'gallery',
                link: '#',
            },
            {
                title: 'locations',
                link: '#',
            },
            {
                title: 'journal',
                link: '#',
            },
            {
                title: 'contact',
                link: '#',
            },
            {
                title: 'my account',
                link: '#',
            },
        ],
        footerMenuObjects: [{
                title: 'shop',
                link: '#',
            },
            {
                title: 'about',
                link: '#',
            },
            {
                title: 'gallery',
                link: '#',
            },
            {
                title: 'locations',
                link: '#',
            },
            {
                title: 'journal',
                link: '#',
            },
            {
                title: 'contact',
                link: '#',
            },
            {
                title: 'orders',
                link: '#',
            },
        ]
    },

    created() {
        // EFFETTO COMPARSA/SCOMPARSA NAVBAR QUANDO SUPERA HEADER
        window.addEventListener('scroll', function() {
            let navFixedTop = document.querySelector('nav');
            navFixedTop.classList.toggle('nav_scrollOverHeader', window.scrollY > 10);

            let toTopBtn = document.querySelector('.fixed_buttons_toTop');
            toTopBtn.classList.toggle('toTop_scrollOverHeader', window.scrollY > 570);
        })
    }
});