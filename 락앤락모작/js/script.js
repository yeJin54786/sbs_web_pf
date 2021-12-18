$(function () {

    $('header').on('mouseover', () => {
        $('.header_svg path').attr('fill', '#000')
    })

    $('header').on('mouseout', () => {
        $('.header_svg path').attr('fill', '#fff')
    })

    
})

$(document).ready(function(){
    $('.gnb li').on('click', function(){
        $(this).addClass('on');
        $(this).sibLings().removeClass('on');
    })

})
