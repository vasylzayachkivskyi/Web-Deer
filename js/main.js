$(document).ready(function () {

    // Text printing animation
    var $el = $('.animated-text');
    var fullText = $el.text().trim();
    var index = 0;
    var reverse = false;
    var delay = 100;

    $el.text('');

    function typeEffect() {
        if (!reverse) {
            if (index < fullText.length) {
                $el.text(fullText.substring(0, index + 1));
                index++;
            } else {
                reverse = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            if (index > 0) {
                $el.text(fullText.substring(0, index - 1));
                index--;
            } else {
                reverse = false;
                setTimeout(typeEffect, 1500);
                return;
            }
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();

    // Header scrolling animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('small');
        } else {
            $('.header').removeClass('small');
        }
    });

    // section animation
    if (document.querySelector('.gradient-bg')) {

        const interBubbles = document.querySelectorAll('.interactive');

        interBubbles.forEach((interBubble) => {
            let curX = 0;
            let curY = 0;
            let tgX = 0;
            let tgY = 0;


            const move = () => {
                curX += (tgX - curX) / 20;
                curY += (tgY - curY) / 20;
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
                requestAnimationFrame(move);
            };

            window.addEventListener('mousemove', (event) => {
                tgX = event.clientX;
                tgY = event.clientY;
            });

            move();
        });

    }


    //  Main slider
    var swiper = new Swiper(".aboutslider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 4000,
        loop: true,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

    });

    // Anchor
    $('.anchor').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        const offsetTop = $(target).offset().top;

        $('html, body').animate({
            scrollTop: offsetTop,
        }, 400);
    })

    // Mobile menu
    $('.burger').on('click', function () {
        $('.header__menu').toggleClass('active');
        $(this).toggleClass('on');
        $('body').toggleClass('on');
    });
    $('.header__menu a').on('click', function () {
        $('.header__menu').removeClass('active');
        $('.burger').removeClass('on');
        $('body').removeClass('on');
    });

    // Paralax 

    const paralaxBox = $('.paralax__box');
    const layers = $('.paralax__layer');

    const paralax = function (evt) {

        const paralaxWidth = paralaxBox.innerWidth();
        const paralaxHeight = paralaxBox.innerHeight();

        const coordX = evt.pageX - paralaxWidth;
        const coordY = evt.pageY - paralaxHeight;

        layers.each(function () {
            const layerSpeed = $(this).data('speed');
            const x = (coordX * layerSpeed).toFixed(1);
            const y = (coordY * layerSpeed).toFixed(1);
            $(this).css('transform', `translate(${x}px, ${y}px)`);
            console.log(layerSpeed);
        });
    }

    $(window).on('mousemove', paralax)




});