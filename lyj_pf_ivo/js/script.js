$(function () {

    // 메인 비주얼 스와이퍼
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

     // 뉴 아이템 스와이퍼
     const swiper2 = new Swiper('.new-swiper', {
        
        direction: 'horizontal',        // 슬라이드 방향 : 'vertical', 'horizontal'
        loop: true,                     // 반복여부
        slidesPerView: 4,               // 보여지는 슬라이드 개수
        spaceBetween: 0,               // 슬라이드 간 여백
        
        
    });
})