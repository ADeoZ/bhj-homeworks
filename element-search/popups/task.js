// Показываем окно modal_main
const main = document.getElementById('modal_main');
main.classList.add('modal_active');

// Обработчик клика на кнопки закрытия
const close = document.getElementsByClassName('modal__close');
[...close].forEach((item) => item.onclick = () => {
    const active = document.getElementsByClassName('modal_active');
    [...active].forEach((item) => item.classList.remove('modal_active'));
});

// Показываем окно modal_success
const success = document.getElementById('modal_success');
const showSuccess = document.getElementsByClassName('show-success');
[...showSuccess].forEach((item) => item.onclick = () => {
    success.classList.add('modal_active');
});
