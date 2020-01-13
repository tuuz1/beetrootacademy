let newsPhoto = [];
let newsTitle = [];
let newsText = [];
let newsAuthorName = [];
let newsAuthorPhoto = [];
let newsDate = [];
let qtySlides = 4;

$.get('http://199.247.3.125:1337/sliders').then((data) => {
    for (let i = 0; i < qtySlides; i++) {
        $('.news__slider').append(`
            <div class="slide">
                <div class="slide__image">
                    <img src="http://199.247.3.125:1337/${data[i].photo.url}" alt="">
                </div>
                <div class="slide__content-wrapper">
                    <div class="slide__text-wrapper">
                        <div class="slide__title">

                        </div>
                        <div class="slide__text">
                        </div>
                    </div>
                    <div class="slide__info">
                        <div class="info__author-photo">
                            <img src="http://199.247.3.125:1337/" alt="">
                        </div>
                        <div class="info__text-wrapper">
                            <div class="info__author-name">

                            </div>
                            <div class="info__date">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    // let item_length = $('.news__slider > div').length - 1;
    // Слайдер новин
    $('.news__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="arrow-prev-wrapper"><svg class="arrow-prev"><use xlink:href="sprite.svg#arrow-left"></use></svg></div>',
        nextArrow: '<div class="arrow-next-wrapper"><svg class="arrow-next"><use xlink:href="sprite.svg#arrow-right"></use></svg></div>',
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: false,
    })
});

// let body = $('body');

// Плавна прокрутка до певного блоку
$('.js-scroll').click(function (event) {
    event.preventDefault();
    let targetSelector = $(event.currentTarget).attr('href');
    let $targetElem = $(targetSelector);

    $('html, body').animate({
        scrollTop: $targetElem.offset().top
    }, 500);
});

// Slider in the header
$('.header__slider').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // infinite: false,
    vertical: true,
});

// vertical navbar
var contentSections = $('.js-section'),
    navigationItems = $('#vertical__navbar a');

updateNavigation();
$(window).on('scroll', function () {
    updateNavigation();
});

//smooth scroll to the section
navigationItems.on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
});

function updateNavigation() {
    contentSections.each(function () {
        $this = $(this);
        var activeSection = $('#vertical__navbar a[href="#' + $this.attr('id') + '"]').data('number') - 1;
        if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
            navigationItems.eq(activeSection).addClass('is-selected');
        } else {
            navigationItems.eq(activeSection).removeClass('is-selected');
        }
    });
}

function smoothScroll(target) {
    $('body,html').animate(
        { 'scrollTop': target.offset().top },
        600
    );
}




// Прокрутка слайдера мишкой
// .on('wheel', (function (e) {
//     e.preventDefault();
//     if (e.originalEvent.deltaY < 0) {
//         $(this).slick('slickPrev');
//     } else {
//         $(this).slick('slickNext');
//     }
// }));



// $.get('http://199.247.3.125:1337/sliders', (data) => {
//     qtySlides = data.length;
//     console.log(data);
//     for (let i = 0; i < qtySlides; i++) {
//         newsPhoto.push(data[i].photo.url);
//         newsTitle.push(data[i].title);
//         newsText.push(data[i].text);
//         newsAuthorName.push(data[i].author_name);
//         newsAuthorPhoto.push(data[i].author_photo.url);
//         newsDate.push(data[i].date);

//     }
// }).done(() => {
    // for (let i = 0; i < qtySlides; i++) {
    //     $('.news__slider').append(`
    //         <div class="slide">
    //             <div class="slide__image">
    //                 <img src="http://199.247.3.125:1337/${newsPhoto[i]}" alt="">
    //             </div>
    //             <div class="slide__content-wrapper">
    //                 <div class="slide__text-wrapper">
    //                     <div class="slide__title">
    //                         ${newsTitle[i]}
    //                     </div>
    //                     <div class="slide__text">
    //                         ${newsText[i]}
    //                     </div>
    //                 </div>
    //                 <div class="slide__info">
    //                     <div class="info__author-photo">
    //                         <img src="http://199.247.3.125:1337/${newsAuthorPhoto[i]}" alt="">
    //                     </div>
    //                     <div class="info__text-wrapper">
    //                         <div class="info__author-name">
    //                             ${newsAuthorName[i]}
    //                         </div>
    //                         <div class="info__date">
    //                             ${newsDate[i]}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     `);
//     }