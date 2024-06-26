$(document).ready(function() {
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        },
    };

    if (isMobile.any()) {
        document.body.classList.add('_touch');
        let menuArrows = document.querySelectorAll('.menu__link-catalog')
        if (menuArrows.length > 0) {
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener('click', function (e) {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }

    } else {
        document.body.classList.add('_pc');
    }

    const iconMenu = document.body.querySelector('.menu__icon')
    const iconMenuBlock = document.body.querySelector('.menu__icon-block')

    if (iconMenu) {
        const menuBody = document.body.querySelector('.menu__body')
        iconMenuBlock.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock')
            iconMenu.classList.toggle('_active')
            menuBody.classList.toggle('_active')
        })
    }

    document.querySelector('#video_btn').addEventListener('click', function() {
        document.querySelector('.video_items').classList.add('open');
        document.querySelector('#video_btn-hide').classList.add('open');
        this.classList.add('none');
    });

    document.querySelector('#video_btn-hide').addEventListener('click', function() {
        document.querySelector('.video_items').classList.remove('open');
        document.querySelector('#video_btn').classList.remove('none');
        this.classList.remove('open');
    });

});

// document.addEventListener('DOMContentLoaded', function() {
//     const reelsAll = document.querySelector('.reels_all');
//     const firstItem = document.querySelector('.reels_item-one');
//
//     function setInitialScrollPosition() {
//         if (window.innerWidth <= 768) { // Условие для мобильных устройств
//             const scrollPosition = firstItem.offsetWidth / 2;
//             reelsAll.scrollLeft = scrollPosition;
//         }
//     }
//     setTimeout(setInitialScrollPosition, 100);
//     window.addEventListener('resize', setInitialScrollPosition); // Обновить при изменении размера окна
// });


$(function() {
    let header = $('.header_scroll');
    let header_mob = $('.header-mob');

    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            header_mob.addClass('header_fixed');
            // header_mob_hide.addClass('hide-block');
        } else {
            header.removeClass('header_fixed');
            header_mob.removeClass('header_fixed');
        }
    });
});

let array1 = document.querySelectorAll('.cases_item-block');
for (let i = 3; i < array1.length; i++) {
    array1[i].classList.add('none');
}
const button1 = document.querySelector('#services_btn');
const button2 = document.querySelector('#cases_action-hide');
if (button1) {
    button1.addEventListener('click', () => {
        let elements1 = document.querySelectorAll('.services_items-right.none');

        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove('none');
        }
        button1.classList.add('none');
        button2.classList.add('none');
    });
}

$(".target_items").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9 1L2 8L9 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="arrow-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1 1L8 8L1 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                adaptiveHeight: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true
            }
        },
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                variableWidth: true
            }
        }
    ]
});

$(".branding_items").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9 1L2 8L9 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="arrow-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1 1L8 8L1 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                adaptiveHeight: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                variableWidth: true
            }
        },
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                variableWidth: true
            }
        }
    ]
});

$(".instScreen_items-mob").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9 1L2 8L9 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="arrow-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1 1L8 8L1 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                adaptiveHeight: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
            }
        },
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                variableWidth: true
            }
        }
    ]
});
$(document).ready(function() {
    $(".steps_items").slick({
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="arrow-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M9 1L2 8L9 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
            '</svg>\n</div>',
        nextArrow: '<div class="arrow-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1 1L8 8L1 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
            '</svg>\n</div>',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    adaptiveHeight: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    variableWidth: false
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    variableWidth: false
                }
            }
        ]
    });

    function setMaxHeight() {
        var maxHeight = 0;
        $('.steps_items .slick-slide').each(function() {
            var slideHeight = this.getBoundingClientRect().height;
            if (slideHeight > maxHeight) {
                maxHeight = slideHeight;
            }
        });
        $('.steps_items .slick-slide').css('height', maxHeight + 'px');
    }
    setMaxHeight();
    $(window).on('resize', function() {
        setMaxHeight();
    });
    $(window).on('load', function() {
        setMaxHeight();
    });
});


$(".reviews_items").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9 1L2 8L9 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="arrow-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1 1L8 8L1 15" stroke="#2B2B2B" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '450px',
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                adaptiveHeight: true,
                centerMode: false,
                centerPadding: '450px',

            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                variableWidth: false,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                variableWidth: false,
                centerPadding: '0',
                speed: 1,
            }
        }
    ]
});

document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.menu__link');
    var menuIcon = document.querySelector('.menu__icon');
    const menuBody = document.body.querySelector('.menu__body')

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (menuIcon.classList.contains('_active')) {
                menuIcon.classList.toggle('_active');
            }
            menuBody.classList.toggle('_active')
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const reelsItems = document.querySelectorAll('.reels_item');
    reelsItems.forEach((reelsItem, index) => {
        if (index >= 3) {
            reelsItem.classList.add('none');
        } else {
            const reelsAll = reelsItem.querySelector('.reels_all');
            if (reelsAll) {
                const reelsItemOnes = reelsAll.querySelectorAll('.reels_item-one');
                reelsItemOnes.forEach((item, index) => {
                    if (index >= 4) {
                        item.classList.add('none');
                    }
                });
            }
        }
    });

    const reelsBtn = document.querySelector('#reels_btn');
    const reelsBtnHide = document.querySelector('#reels_btn-hide');

    if (reelsBtn && reelsBtnHide) {
        reelsBtn.addEventListener('click', () => {
            // Показать все скрытые блоки reels_item и reels_item-one
            reelsItems.forEach((reelsItem) => {
                reelsItem.classList.remove('none');
                const reelsAll = reelsItem.querySelector('.reels_all');
                if (reelsAll) {
                    const reelsItemOnes = reelsAll.querySelectorAll('.reels_item-one');
                    reelsItemOnes.forEach((item) => {
                        item.classList.remove('none');
                    });
                }
            });

            reelsBtn.classList.add('none');
            reelsBtnHide.classList.remove('none');
        });

        reelsBtnHide.addEventListener('click', () => {
            reelsItems.forEach((reelsItem, index) => {
                if (index >= 3) {
                    reelsItem.classList.add('none');
                } else {
                    const reelsAll = reelsItem.querySelector('.reels_all');
                    if (reelsAll) {
                        const reelsItemOnes = reelsAll.querySelectorAll('.reels_item-one');
                        reelsItemOnes.forEach((item, index) => {
                            if (index >= 4) {
                                item.classList.add('none');
                            }
                        });
                    }
                }
            });

            reelsBtn.classList.remove('none');
            reelsBtnHide.classList.add('none');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const language = document.querySelector('.language');
    const anotherLang = document.querySelector('.another_lang');

    language.addEventListener('click', function() {
        anotherLang.classList.toggle('none');
    });

    document.addEventListener('click', function(event) {
        if (!anotherLang.contains(event.target) && !language.contains(event.target)) {
            anotherLang.classList.add('none');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const language = document.querySelector('#language-2');
    const anotherLang = document.querySelector('.another_lang-2');

    language.addEventListener('click', function() {
        anotherLang.classList.toggle('none');
    });

    document.addEventListener('click', function(event) {
        if (!anotherLang.contains(event.target) && !language.contains(event.target)) {
            anotherLang.classList.add('none');
        }
    });
});

const items = document.querySelectorAll('.development_item');
items.forEach((item, index) => {
    if (index >= 10) {
        item.classList.add('none');
    }
});

    var developmentItems = document.querySelectorAll('.development_item');
    var developmentItemsBlock = document.querySelector('.development_items');
    var showButton = document.getElementById('development_btn');
    var hideButton = document.getElementById('development_btn-hide');
    for (var i = 10; i < developmentItems.length; i++) {
        developmentItems[i].classList.add('none');
    }
    showButton.addEventListener('click', function() {
        developmentItems.forEach(function(item) {
            item.classList.remove('none');
        });
        showButton.classList.add('none');
        hideButton.classList.add('open');
        if (window.innerWidth < 1200) {
            developmentItemsBlock.classList.add('mobile');
        }
    });

    hideButton.addEventListener('click', function() {
        hideButton.classList.remove('open');
        for (var i = 10; i < developmentItems.length; i++) {
            developmentItems[i].classList.add('none');
        }
        if (window.innerWidth < 1200) {
            developmentItemsBlock.classList.remove('mobile');
        }
        showButton.classList.remove('none');
    });


    var portfolioItems = document.querySelectorAll('.portfolio_item');
    if (window.innerWidth < 901) {
        portfolioItems.forEach((item, index) => {
            if (index >= 4) {
                item.classList.add('none');
            }
            if(index === 3) {
                item.classList.add('bottom_none');
            }
        })
    }

    var portfolioBtn = document.getElementById('portfolio_btn');
    portfolioBtn.addEventListener('click', function() {
        portfolioBtn.classList.add('none');
        portfolioItems.forEach((item, index) => {
            if (index >= 4) {
                item.classList.remove('none');
            }
            if(index === 3) {
                item.classList.remove('bottom_none');
            }
        })
    });


function openInfo(evt, info) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}




