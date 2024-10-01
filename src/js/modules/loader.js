function loader(){
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const body = document.body;
    body.classList.add('no-scroll');
    window.addEventListener('load', function() {
        body.classList.remove('no-scroll');
        loaderWrapper.classList.add('fade-out');
        setTimeout(function() {
            loaderWrapper.style.display = 'none';
        }, 500);
    });
}

export default loader;