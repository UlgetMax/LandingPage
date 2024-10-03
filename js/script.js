document.querySelector('.feedback__additonService-title').addEventListener('click', function() {
    this.classList.toggle('active');
    
    const serviceBlock = document.querySelector('.additonService__block');
    serviceBlock.classList.toggle('hidden');
});




function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const timeString = document.getElementById('timer').textContent;
    const timeParts = timeString.split(':');
    const duration = parseInt(timeParts[0], 10) * 3600 + parseInt(timeParts[1], 10) * 60 + parseInt(timeParts[2], 10);
    const display = document.getElementById('timer');
    startTimer(duration, display);
};


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.header__menu');
    const burger = document.querySelector('.header__burger');
    
    burger.addEventListener('click', function () {
        menu.classList.toggle('menu--visible');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.header__menu');
    const menuIcon = document.querySelector('.menu__list img');
    
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('menu--visible');
    });
});
