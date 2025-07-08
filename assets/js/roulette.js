// Script for the randomize button
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
    
    // Randomize button functionality (only on pages that have it)
    const randomizeBtn = document.querySelector('.randomize-btn');
    if (randomizeBtn) {
        randomizeBtn.addEventListener('click', function() {
            const menus = [
                {
                    title: "Menu 'Cursed dishes'",
                    entre: "Eyeball Bruschettas",
                    plat: "Zombie Pasta",
                    dessert: "Spiced pumpkin Halloween cake"
                },
                {
                    title: "Menu 'Demonic Desserts'",
                    entre: "Witch's Finger Canapés",
                    plat: "Bloody Beet Risotto",
                    dessert: "Cemetery Chocolate Mousse"
                },
                {
                    title: "Menu 'Ghoulish Grub'",
                    entre: "Spider Web Dip",
                    plat: "Mummy Meatballs",
                    dessert: "Pumpkin Spice Tart"
                },
                {
                    title: "Menu 'Spooky Aperitifs'",
                    entre: "Vampire's Blood Cocktail",
                    plat: "Haunted Shepherd's Pie",
                    dessert: "Ghostly Vanilla Pudding"
                },
                {
                    title: "Menu 'Sweet Vampire'",
                    entre: "Black Olive Tapenade",
                    plat: "Bat Wing Chicken",
                    dessert: "Blood Orange Crème Brûlée"
                }
            ];
            
            const randomMenu = menus[Math.floor(Math.random() * menus.length)];
            
            document.querySelector('.menu-title').textContent = randomMenu.title;
            document.querySelectorAll('.menu-item-desc')[0].textContent = randomMenu.entre;
            document.querySelectorAll('.menu-item-desc')[1].textContent = randomMenu.plat;
            document.querySelectorAll('.menu-item-desc')[2].textContent = randomMenu.dessert;
        });
    }
});

// Script pour la vidéo
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const thumbnail = document.getElementById('videoThumbnail');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (playButton && thumbnail && videoPlayer) {
        playButton.addEventListener('click', function() {
            const video = videoPlayer.querySelector('video');
            
            // Cacher la thumbnail et montrer la vidéo
            thumbnail.style.display = 'none';
            videoPlayer.style.display = 'block';
            
            // Lancer la vidéo
            video.play();
        });
    }
});

// Optionnel : Remettre la thumbnail si la vidéo se termine
document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const thumbnail = document.getElementById('videoThumbnail');
    
    if (videoPlayer && thumbnail) {
        const video = videoPlayer.querySelector('video');
        if (video) {
            video.addEventListener('ended', function() {
                // Remettre la thumbnail quand la vidéo se termine
                videoPlayer.style.display = 'none';
                thumbnail.style.display = 'block';
            });
        }
    }
});
