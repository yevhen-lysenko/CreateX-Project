$(function () {
    var mixer = mixitup('.directions__list');

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        
        responsive:
        [
            {
                breakpoint: 1000 ,
                settings: {
                    slidesToShow: 3,
                } ,
            },
            {
                breakpoint: 800 ,
                settings: {
                    slidesToShow: 2,
                } ,
            },
            {
                breakpoint: 550 ,
                settings: {
                    slidesToShow: 1,
                } ,
            }
        ]
    })
    
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })


    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
       
        
    })

    $('.testimonomials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonomials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    }) 
    
    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('program__acc-link--active')
        $(this).toggleClass('program__acc-tekst--empty')
    })



    $('.checkbox__custom').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('checkbox__custom--agree')
    })


    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.burger').toggleClass('burger--active')
        $('.overlay').toggleClass('overlay---show')
    })

})  


