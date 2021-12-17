$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel(({
        items: 1,
        loop: true,
        autoplay: false,
        dots: false,
        autoHeight: true,
        autoplayTimeout: 5000,
        responsive: {
            992:{
                items: 1
            },
            768:{
                items: 1
            },
        }
    }));
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });


    //tabs
    $('ul.catalog__caption').on('click', 'li:not(.catalog__item_active)', function() {
        $(this)
            .addClass('catalog__item_active')
            .siblings().removeClass('catalog__item_active')
            .closest('div.catalog__tabs')
            .find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index())
            .addClass('catalog__content_active');
    });



    //переход
    $('.catalog__frontMore').each(function (item) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog__front').eq(item).addClass('catalog__front_active')
            $('.catalog__back').eq(item).addClass('catalog__back_active')
        })
    });

    $('.catalog__backOff').each(function (item) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog__front').eq(item).removeClass('catalog__front_active')
            $('.catalog__back').eq(item).removeClass('catalog__back_active')
        })
    });


    //2GIS
    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.843755, 74.623103],
            zoom: 13
        });
        var myIcon = DG.icon({
            iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
            iconSize: [50, 50],
        });
       var marker =  DG.marker([42.843755, 74.623103],{icon: myIcon}).addTo(map).bindPopup('IT-RUN');
        marker.bindLabel('IT-RUN', { static: true });
    });


    $('.tel').inputmask('+\\9\\96(999)-99-99-99');



    $(window).on('scroll',function () {
        if($(this).scrollTop() > 2000){
            $('.goTop').fadeIn('slow')
        }
        else{
            $('.goTop').fadeOut('slow')
        }
    });




    $('.header__btn, .home__btn').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup__consultation').fadeIn(300)
    });


    $('.catalog__btn').each(function (item) {
        $(this).on('click', function () {
            $('.overlay, .popup__order').fadeIn(300);
            $('.popup__orderSubtitle').text($('.catalog__frontTitle').eq(item).text())
        })
    });

    $('.popupForm__btn, .sectionForm__btn').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup__thanks').fadeIn(300);
        $('.popup__consultation, .popup__order').fadeOut(1)
    });

    $('.popup__close').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup__thanks, .popup__consultation, .popup__order').fadeOut(300)
    });

    $('.overlay').on('click', function (e) {
        if(e.target.className === 'overlay'){
            $('.overlay, .popup__consultation, .popup__order, .popup__thanks').fadeOut('300');
        }
    })
});