document.addEventListener('DOMContentLoaded', (event) => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.getElementById('loading-progress');
    const profilePic = document.querySelector('.profile-pic');
    const username = document.querySelector('.username');
    const bio = document.querySelector('.bio');
    const links = document.querySelectorAll('.link-item');
    const discordBtn = document.getElementById('discordBtn');
    const copyNotification = document.getElementById('copyNotification');
    const modItems = document.querySelectorAll('.mod-item h3');
    const themeSwitch = document.getElementById('theme-switch');
    const backgroundElement = document.querySelector('.background');
    const navButtons = document.querySelectorAll('.nav-button');
    const hacksSection = document.getElementById('hacks');

    // Simulated loading
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    animateContent();
                }, 500);
            }, 1000);
        }
        loadingProgress.textContent = progress.toFixed(2);
    }, 200);

    // Theme toggle functionality
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.style.setProperty('--c1', '#00ffe1');
            document.documentElement.style.setProperty('--c2', '#ccd1ea');
            backgroundElement.style.backgroundImage = "url('background12.gif')";
        } else {
            document.documentElement.style.setProperty('--c1', '#ff0000');
            document.documentElement.style.setProperty('--c2', '#030821');
            backgroundElement.style.backgroundImage = "url('background.gif')";
        }
    });

    function animateContent() {
        // Animate profile picture
        profilePic.style.opacity = '0';
        profilePic.style.transform = 'scale(0.5)';
        setTimeout(() => {
            profilePic.style.transition = 'all 1s ease';
            profilePic.style.opacity = '1';
            profilePic.style.transform = 'scale(1)';
        }, 100);

        // Animate username and bio
        [username, bio].forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'all 1s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 300 + index * 200);
        });

        // Animate links
        links.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px)';
            setTimeout(() => {
                link.style.transition = 'all 0.8s ease';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 700 + index * 100);
        });
    }

    // Discord button click event
    discordBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('px93').then(() => {
            copyNotification.style.display = 'block';
            setTimeout(() => {
                copyNotification.style.opacity = '1';
            }, 10);
            setTimeout(() => {
                copyNotification.style.opacity = '0';
                setTimeout(() => {
                    copyNotification.style.display = 'none';
                }, 300);
            }, 2000);
        });
    });

    // Add click animation to links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.target.closest('.link-item').style.animation = 'none';
            setTimeout(() => {
                e.target.closest('.link-item').style.animation = 'glow 0.5s ease-in-out';
            }, 10);
        });
    });

    // MODS section toggle
    modItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            const toggleBtn = item.querySelector('.toggle-btn');
            content.classList.toggle('active');
            toggleBtn.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });

    // Smooth scroll for nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Blur effect for hacks section
    function handleScroll() {
        const rect = hacksSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
            hacksSection.classList.add('blur-active');
        } else {
            hacksSection.classList.remove('blur-active');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
});