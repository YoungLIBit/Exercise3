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

$(document).ready(function(){
    var preClickElement = null;
    var sidebarList = [$('.sidebar__dashboard'),$('.sidebar__analyst'),$('.sidebar__ecommerce') ];
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