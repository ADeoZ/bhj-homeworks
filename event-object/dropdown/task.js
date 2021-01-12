const buttons = document.querySelectorAll('.dropdown__value');

[...buttons].forEach((button) => {
    const list = button.closest('.dropdown').querySelector('.dropdown__list'),
        items = button.closest('.dropdown').querySelectorAll('.dropdown__item');

    button.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    [...items].forEach((item) => {
        item.addEventListener('click', (e) => {
            button.textContent = item.textContent.trim();
            list.classList.remove('dropdown__list_active');

            e.preventDefault();
        });
    });


});
