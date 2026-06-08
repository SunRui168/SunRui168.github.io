const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        siteNav.classList.toggle('is-open');
    });
}

const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll('[data-nav]');

navLinks.forEach((link) => {
    if (link.dataset.nav === currentPage) {
        link.classList.add('is-active');
    }
});

const yearNode = document.getElementById('year');
if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formTip = document.getElementById('formTip');

        if (formTip) {
            formTip.textContent = '留言发送成功，我会尽快回复你。';
        }

        contactForm.reset();
    });
}
