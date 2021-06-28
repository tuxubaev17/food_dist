'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

<<<<<<< HEAD
    //timer

    const deadline = new Date('2021-06-30');

    function getTimerReamaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
=======
    hideTabContent();
    showTabContent();

    // Timer

    const deadline = '2021-06-28';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
>>>>>>> 88ad0bc381d7d0f9e0449e81dc328e166fb3cb9c

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

<<<<<<< HEAD
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
=======
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
>>>>>>> 88ad0bc381d7d0f9e0449e81dc328e166fb3cb9c
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
<<<<<<< HEAD
=======

>>>>>>> 88ad0bc381d7d0f9e0449e81dc328e166fb3cb9c
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();
<<<<<<< HEAD
        function updateClock() {
            const t = getTimerReamaining(endtime);
=======

        function updateClock() {
            const t = getTimeRemaining(endtime);
>>>>>>> 88ad0bc381d7d0f9e0449e81dc328e166fb3cb9c

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
<<<<<<< HEAD

    // modal 

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        btnClose = document.querySelector('[data-close]');

    modalTrigger.forEach(event => {
        event.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    btnClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target == modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });
=======
>>>>>>> 88ad0bc381d7d0f9e0449e81dc328e166fb3cb9c
});
