function buttonToUp(){
    const buttonUp = document.getElementById('button-up');

    // Добавление класса is-visible при скролле вниз
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Показывать кнопку после 300px скролла
            buttonUp.classList.add('is-visible');
        } else {
            buttonUp.classList.remove('is-visible');
        }
    });

    // Скролл на самый верх по клику на кнопку
    buttonUp.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

export default buttonToUp;