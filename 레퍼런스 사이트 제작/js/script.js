$(function () {

    $('header').on('mouseover', () => {
        $('.header_svg path').attr('fill', '#000')
    })

    $('header').on('mouseout', () => {
        $('.header_svg path').attr('fill', '#fff')
    })


    // 스크롤 감지
    // 이전 스크롤 위치
    let lastScrollTop = 0
    $(window).on('scroll resize', function(){
        // 현재 스크롤 위치
        let scrollTop = $(document).scrollTop()

        console.log(scrollTop);
        if( scrollTop == 0 ) {
            $('.header_wrap').removeClass('on')
        }

        if( scrollTop > lastScrollTop ) {
            // 스크롤 아래로
            $('.header_wrap').addClass('on')
            $('header').slideUp()
        } else {
            // 스크롤 위로
            $('header').slideDown()
        }

        lastScrollTop = scrollTop
    });

    //라운지 슬라이더
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 50,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',                // 'bullets'        : • • • 
                                            // 'fraction'       : (현재번호/전체번호) 
                                            // 'progressbar'    : 진행률(게이지)
                                            // 'custom'         
          clickable: true,                // 페이지 네이션 클릭 가능 여부
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

})
