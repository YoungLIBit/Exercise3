const step_container = $('.container__process')
const step1 = $('.content__process-one');
const step2 = $('.content__process-two');
const step3 = $('.content__process-three');

$(document).ready(function (){
    step1.addClass('active');
    step1.click(function (){
        step2.removeClass('active');
        step3.removeClass('active')
        $('.content__process').removeClass('active2','active3');

        $('.content__product').show();
        $('.content__txt').hide();
    });
    step2.click(function (){
        step2.addClass('active');
        step3.removeClass('active')
        $('.content__process').addClass('active2');
        $('.content__process').removeClass('active3');
        $('.content__product').hide();
        $('.content__txt').show();

    });
    step3.click(function (){
        step3.addClass('active');
        step2.addClass('active');
        $('.content__process').addClass('active3');
        $('.content__product').hide();
        $('.content__txt').hide();
    })
});