const step_container = $('.container__process')
const step1 = $('.content__process-one');
const step2 = $('.content__process-two');
const step3 = $('.content__process-three');

$(document).ready(function (){
    step1.addClass('active');
    step1.click(function (){
        step2.removeClass('active');
        step3.removeClass('active')
        $('.content__process').removeClass('active2 active3');

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
$(function (){
    $('.sidebar__dashboard').addClass('sidebar-active-dashboard');
    $('.sidebar__dashboard-arrow').css('transform','rotate(90deg');
    $('.sidebar__dashboard').click(function (){
        $(this).toggleClass('sidebar-active-dashboard');
        if($(this).hasClass('sidebar-active-dashboard')){
            $('.sidebar__dashboard-arrow').css('transform','rotate(90deg');

            $('.sidebar__analyst, .sidebar__ecommerce, .sidebar__title,.sidebar__ui-grid, .sidebar__ui-down').show();
        }else{
            $('.sidebar__dashboard-arrow').css('transform','rotate(0deg');

            $('.sidebar__analyst, .sidebar__ecommerce, .sidebar__title,.sidebar__ui-grid, .sidebar__ui-down').hide();
        }
    });
});
$(document).ready(function(){
    var preClickElement = null;

    var sidebarList = [$('.sidebar__analyst'),$('.sidebar__ecommerce') ];
    $.each(sidebarList,function (){
        $(this).click(function (){
            if(preClickElement !== null){
                preClickElement.removeClass('sidebar-active');
            }

            $(this).addClass('sidebar-active');
            preClickElement = $(this);
        });
    });
});
$(document).ready(function(){
    var preClickElement = null;
    $('.sidebar__ui-down').click(function(){
        if(preClickElement !== null){
            preClickElement.removeClass('sidebar-active');
        }
        $(this).addClass('sidebar-active');
        preClickElement = $(this);
    })
});
$(document).ready(function(){
    $('label.sidebar__ui-grid').click(function(){
        $(this).toggleClass('sidebar-active');
        if($(this).hasClass('sidebar-active')){
            $('.sidebar__ui-icon').hide();
            $('.sidebar__ui-icon-down').show();
            $('.sidebar_children').show();
            var preElementActive = null;
            $('.sidebar_children .sidebar__ui-grid').click(function (){
                if(preElementActive !== null){
                    preElementActive.removeClass('sidebar-active');
                }
                $(this).addClass('sidebar-active');
                preElementActive = $(this);
            });
        }else{
            $('.sidebar__ui-icon').show();
            $('.sidebar__ui-icon-down').hide();
            $('.sidebar_children').hide();
        }
    });
});

$(function (){
    $('.content__sidebar-user-image').click(function(){
        var userActive = 'content__sidebar-user-active';
        $(this).toggleClass(userActive);
        if($(this).hasClass(userActive)){
            $('.user').show();
        }else{
            $('.user').hide();
        }
    })


});

$(function (){
    $('.content__product-image .product-image').hover(function (){
        $(this).siblings('.content__product-description').css('margin-left','10px');
    },function (){
        $(this).siblings('.content__product-description').css('margin-left', '0');
    });
});

$(function(){

        $('.product-quantity-decrease').click(function(){
            var parent = $(this).closest('.product-quantity-id');
            var quantityCurrent = parseInt(parent.find('.product-quantity-number').text());
            if(quantityCurrent > 0){
                var newQuantity = quantityCurrent - 1;
                parent.find('.product-quantity-number').text(newQuantity);
            }
        });
        $('.product-quantity-increase').click(function(){
           var parent = $(this).closest('.product-quantity-id');
           var quantityCurrent = parseInt(parent.find('.product-quantity-number').text());
           var newQuantity = quantityCurrent + 1;
           parent.find('.product-quantity-number').text(newQuantity);
        });
});
$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('.content__cart').offset().top;

        if (scrollTop > elementOffset) {
            $('.content__cart').css({
                position: 'relative',
                top: 100% - elementOffset
            });
        } else {
            $('.content__cart').css({
                position: 'static'
            });
        }
    });
});