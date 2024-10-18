function owlCarousel (){
    $(".section-anounce__slider").owlCarousel({
        loop: false, // False - обязательно так как клонированные элементы будут работать неправильно !
        margin: 0,
        nav: true,

        // navContainer: '.anounceNav',
        dotsContainer: '.anounceDots',
        responsive: {
            0: {
                items: 1
            }
            // 600:{
            //     items:3
            // },
            // 1000:{
            //     items:5
            // }
        },
        navText : ["",""]
    });


}

export default owlCarousel;