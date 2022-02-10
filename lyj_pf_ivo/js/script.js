$(function () {

    // 메인 비주얼 슬라이더
    const swiper1 = new Swiper('.main-swiper', {
        
        direction: 'horizontal',        // 슬라이드 방향 : 'vertical', 'horizontal'
        loop: true,                     // 반복여부
        autoplay: {                     // 자동재생    
            delay: 3000,                // 슬라이드 당 지연시간 (ms) 
            pauseOnMouseEnter: true,    // 슬라이드에 마우스 올려두면, 자동재생 멈춤
            disableOnInteraction: true, // 인터렉션(화살표,드래그,...) 중의 자동재생 비활성화여부
        },


        slidesPerView: 1,               // 보여지는 슬라이드 개수
        spaceBetween: 0,               // 슬라이드 간 여백
        
    });


     // 뉴 아이템 슬라이더
    const swiper2 = new Swiper('.new-swiper', {
        
        direction: 'horizontal',        // 슬라이드 방향 : 'vertical', 'horizontal'
        loop: true,                     // 반복여부
        slidesPerView: 4,               // 보여지는 슬라이드 개수
        spaceBetween: 61,               // 슬라이드 간 여백

        // 네비게이션 화살표
        navigation: {
            nextEl: '.swiper-button-next',   // 다음 화살표가 적용될 요소
            prevEl: '.swiper-button-prev',   // 이전 화살표가 적용될 요소
        },

        pagination: {
            el: '.swiper-pagination',       // 페이지 네이션이 적용될 요소 (선택자)
            type: 'fraction',            // 'bullets'        : • • • 
                                            // 'fraction'       : (현재번호/전체번호) 
                                            // 'progressbar'    : 진행률(게이지)
                                            // 'custom'         
            clickable: true,                // 페이지 네이션 클릭 가능 여부
        },
        
    });





    // 검색창 x버튼
    $('.search-wrap .x-bt').on('click', function() {
        $('.search-wrap-bg').slideToggle()
        $('.search-wrap').slideToggle()
    })


    // 검색(돋보기) 버튼
    $('.gnb-search').on('click', function() {
        $('.search-wrap-bg').slideToggle()
        $('.search-wrap').slideToggle()
    })


    // gnb 호버 애니메이션
    $('header .gnb > li').on('mouseenter', function() {
        let index = $(this).index()
        let width = $(this).width()
        let gap = 80


        if( index == 0 )
            $('.animation.start-home').css('left', 54)
            
        if( index == 1 )
            $('.animation.start-home').css('left', 155 + gap)


        if( index == 2 )
            $('.animation.start-home').css('left', 330 + gap)


        if( index == 3 )
            $('.animation.start-home').css('left', 490 + gap)


        if( index == 4 )
            $('.animation.start-home').css('left', 655 + gap)
    })


    // gnv 하위 li 호버 시
    $('header .gnb li').on('mouseenter', function() {
        $('.animation.start-home').css('opacity', 1)
    })

    // gnb 마우스 벗어났을 때
    $('header .gnb li').on('mouseleave', function() {
        $('.animation.start-home').css('opacity', 0)
    })

    
    
    //video 마우스 올렸을 때  내렸을때 
    $('.video-box').on('mouseenter', function(){
        $('.video-cover').css({'opacity': '0.6'})
        $('.v-bt').css({'opacity': '1'})
    });

    $('.video-box').on('mouseleave', function(){
        $('.video-cover').css({'opacity': '0'})
        $('.v-bt').css({'opacity': '0'})
    });
    

    
    // video 클릭 - 비디오 모달
    var iframe = $('#modal-video')
    var player = new Vimeo.Player(iframe)

    $('#video1').on('click', function() {
        $('.video-modal').css("display", "block")

        player.play();

    })
    
    // 비디오 모달 x, 여백 클릭
    $('.modal-close a, .video-modal').on('click', function() {
        $('.video-modal').css("display", "none")

        player.pause(); 
    })
    

    // 마우스 포인터 좌표값 가져오기
    let pointerIndex = 1
    $(document).on('click', function(event) {
        let scrollTop = $(this).scrollTop()
        let x = event.pageX
        let y = event.pageY

        // alert(x + ',' + y + ',' + scrollTop)
        // 좌표에 이미지 보여주기
        $('.pointer-box').css({
            'left' : x,
            'top' : y - scrollTop           // 3600 - 3000 = 600
        })

        $('.pointer-box ul li').removeClass('active')
        $('.pointer-box ul li:nth-child(' + pointerIndex + ')').addClass('active')
        $('.pointer-box ul li img').css({'opacity' : '1'})
        $('.pointer-box ul li img').stop().animate({'opacity' : '0'}, 800)

        if( pointerIndex == 3 )
            pointerIndex = 0

        pointerIndex++
    })


})