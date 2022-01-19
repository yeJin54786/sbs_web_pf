$(function() {


    // 슬릭 슬라이드 시작!
    $('.slide-container').slick({
        dots: true,
        arrows: true,


        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤


        /* 효과 */
        // fade: true,
        // cssEase: 'linear',


        // 네비게이션 화살표 커스텀
        //prevArrow: '<button class="uslide-arrow prev-arrow"></button>',
        //nextArrow: '<button class="slide-arrow next-arrow"></btton>',


    })


    // 인기상품 슬라이드
    $('.product-slide').slick({
        dots: false,
        arrows: true,


        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 4,                // 보여질 슬라이드 개수
        slidesToScroll: 4,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤


        /* 효과 */
        // fade: true,
        // cssEase: 'linear',


        // 네비게이션 화살표 커스텀
        //prevArrow: '<button class="uslide-arrow prev-arrow"></button>',
        //nextArrow: '<button class="slide-arrow next-arrow"></btton>',


    })

    // 슬릭 슬라이드 - 화살표 벗어날 때  
    $('.slick-prev, slick-next').on('mouseout', function() {
        $('.slick-prev').css({'background-image':'url(../img/arrow_s.png) no-repeat center center'})
    })
})

