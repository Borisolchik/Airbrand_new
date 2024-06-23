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

});
$(function() {
    let header = $('.header_scroll');
    let header_mob = $('.header-mob');
    // let header_mob_hide = $('.header-mob.hide');

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

// let portfolio_array = document.querySelectorAll('.portfolio_item');
// for (let i = 6; i < portfolio_array.length; i++) {
//     portfolio_array[i].classList.add('none');
// }
// const portfolio_btn = document.querySelector('#portfolio_btn');
// if (portfolio_btn) {
//     portfolio_btn.addEventListener('click', () => {
//         let elements1 = document.querySelectorAll('.portfolio_item.none');
//
//         for (let i = 0; i < elements1.length; i++) {
//             elements1[i].classList.remove('none');
//         }
//         portfolio_btn.classList.add('none');
//     });
// }

// let iventsCases_array = document.querySelectorAll('.iventCases_item-box');
// for (let i = 3; i < iventsCases_array.length; i++) {
//     iventsCases_array[i].classList.add('none');
// }
// const iventsCases_btn = document.querySelector('#iventsCases_btn');
// if (iventsCases_btn) {
//     iventsCases_btn.addEventListener('click', () => {
//         let elements1 = document.querySelectorAll('.iventCases_item-box.none');
//
//         for (let i = 0; i < elements1.length; i++) {
//             elements1[i].classList.remove('none');
//         }
//         iventsCases_btn.classList.add('none');
//     });
// }

// $(".tariff_items").slick({
//     dots: false,
//     infinite: true,
//     speed: 1200,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0',
//     prevArrow: '<div class="arrow-prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//         '<circle cx="15" cy="15" r="14" transform="matrix(-1 0 0 1 30 0)" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
//         '<path d="M18 8L11 15L18 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
//         '</svg>\n</div>',
//     nextArrow: '<div class="arrow-next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//         '<circle cx="15" cy="15" r="14" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
//         '<path d="M12 8L19 15L12 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
//         '</svg>\n</div>',
//     adaptiveHeight: true,
//     responsive: [
//         {
//             breakpoint: 1380,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 dots: false,
//                 adaptiveHeight: true,
//             }
//         },
//         {
//             breakpoint: 901,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: false,
//                 adaptiveHeight: true,
//             }
//         }
//     ]
// });
$(".target_items").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow-prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<circle cx="15" cy="15" r="14" transform="matrix(-1 0 0 1 30 0)" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '<path d="M18 8L11 15L18 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="arrow-next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<circle cx="15" cy="15" r="14" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '<path d="M12 8L19 15L12 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
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
    prevArrow: '<div class="arrow-prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<circle cx="15" cy="15" r="14" transform="matrix(-1 0 0 1 30 0)" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '<path d="M18 8L11 15L18 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="arrow-next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<circle cx="15" cy="15" r="14" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '<path d="M12 8L19 15L12 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
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
    prevArrow: '<div class="arrow-prev"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<circle cx="15" cy="15" r="14" transform="matrix(-1 0 0 1 30 0)" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '<path d="M18 8L11 15L18 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '</svg>\n</div>',
    nextArrow: '<div class="arrow-next"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<circle cx="15" cy="15" r="14" fill="#2B2B2B" stroke="#FFFCFA" stroke-width="2"/>\n' +
        '<path d="M12 8L19 15L12 22" stroke="#FFFCFA" stroke-width="2"/>\n' +
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

// const reelsItems = document.querySelectorAll('.reels_item');
// reelsItems.forEach((item, index) => {
//     if (index >= 3) {
//         item.classList.add('none');
//     }
//     const reelsAll = reelsItem.querySelector('.reels_all');
//
//     // Если блок reels_all найден, получаем все его дочерние элементы с классом reels_item-one
//     if (reelsAll) {
//         const reelsItemOnes = reelsAll.querySelectorAll('.reels_item-one');
//
//         // Проходимся по всем элементам reels_item-one
//         reelsItemOnes.forEach((item, index) => {
//             // Если индекс элемента больше или равен 4, добавляем класс none
//             if (index >= 4) {
//                 item.classList.add('none');
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const reelsItems = document.querySelectorAll('.reels_item');

    // Начальная настройка для reels_item и reels_item-one
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

            // Скрыть кнопку reels_btn и показать кнопку reels_btn-hide
            reelsBtn.classList.add('none');
            reelsBtnHide.classList.remove('none');
        });

        reelsBtnHide.addEventListener('click', () => {
            // Скрыть блоки reels_item начиная с 4-го и reels_item-one начиная с 5-го
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

document.querySelector('#video_btn').addEventListener('click', function() {
    document.querySelector('.video_items').classList.add('open');
    const videoBtnHide = document.querySelector('#video_btn-hide');
    this.classList.add('none');
    videoBtnHide.classList.add('open');
});

document.querySelector('#video_btn-hide').addEventListener('click', function() {
    document.querySelector('.video_items').classList.remove('open');
    this.classList.remove('open');
    const videoBtn = document.querySelector('#video_btn');
    videoBtn.classList.remove('none');
});

const items = document.querySelectorAll('.development_item');
items.forEach((item, index) => {
    if (index >= 10) {
        item.classList.add('none');
    }
});

document.addEventListener('DOMContentLoaded', function() {
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
