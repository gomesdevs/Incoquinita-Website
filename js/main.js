const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn__active');
    document.body.classList.toggle('dark');
};