document.body.classList.add('loaded');

document.querySelectorAll('.dev-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', () => {
        window.location.href = `dev-profile.html?dev=${card.getAttribute('data-index')}`;
    });

    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});
