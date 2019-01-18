$(function(){//bouton #bio
    $('#bio div:last-child p').css('color', 'transparent');
    $('#bio div:last-child img').mouseover(function(){
        $('#bio div:last-child p').css('color', 'orange');
    });
    $('#bio div:last-child img').mouseout(function(){
        $('#bio div:last-child p').css('color', 'transparent');
    });
});

$(function(){//fleche vers #profil
    $('#bio div:last-child img').click(function(){
        $(window).scrollTop(1532);
    });
});

$(function(){//sens fleche #profil
    if(2625<$(window).scrollTop()){
        $('#cv>div:first-child a img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
        $('#cv>div:first-child a').attr('href', '#expP');
    }
    else{
        $('#cv>div:first-child a img:last-of-type').css({transform: 'none'});
        $('#cv>div:first-child a').attr('href', '#cursusP');
    }
    if(2980<$(window).scrollTop()){
        $('#cv>div:nth-child(3) a img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
        $('#cv>div:nth-child(3) a').attr('href', '#cursusP');
    }
    else{
        $('#cv>div:nth-child(3) a img:last-of-type').css({transform: 'none'});
        $('#cv>div:nth-child(3) a').attr('href', '#diplP');
    }
    if(3400<$(window).scrollTop()){
        $('#cv>div:nth-child(5) a  img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
        $('#cv>div:nth-child(5) a').attr('href', '#diplP');
    }
    else{
        $('#cv>div:nth-child(5) a img:last-of-type').css({transform: 'none'});
        $('#cv>div:nth-child(5) a').attr('href', '#loisP');
    }
    if(3745<$(window).scrollTop()){
        $('#cv>div:nth-child(7) a img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
        $('#cv>div:nth-child(7) a').attr('href', '#loisP');
    }
    else{
        $('#cv>div:nth-child(7) a img:last-of-type').css({transform: 'none'});
        $('#cv>div:nth-child(7) a').attr('href', '#footer');
    }
    $(window).scroll(function(){
    if(2625<$(window).scrollTop()){
            $('#cv>div:first-child a img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
            $('#cv>div:first-child a').attr('href', '#expP');
        }
        else{
            $('#cv>div:first-child a img:last-of-type').css({transform: 'none'});
            $('#cv>div:first-child a').attr('href', '#cursusP');
        }
        if(2980<$(window).scrollTop()){
            $('#cv>div:nth-child(3) a img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
            $('#cv>div:nth-child(3) a').attr('href', '#cursusP');
        }
        else{
            $('#cv>div:nth-child(3) a img:last-of-type').css({transform: 'none'});
            $('#cv>div:nth-child(3) a').attr('href', '#diplP');
        }
        if(3400<$(window).scrollTop()){
            $('#cv>div:nth-child(5) a img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
            $('#cv>div:nth-child(5) a').attr('href', '#diplP');
        }
        else{
            $('#cv>div:nth-child(5) a img:last-of-type').css({transform: 'none'});
            $('#cv>div:nth-child(5) a').attr('href', '#loisP');
        }
        if(3745<$(window).scrollTop()){
            $('#cv>div:nth-child(7) a img:last-of-type').css({transform: 'rotate3d(1,0,0,0.5turn)'});
            $('#cv>div:nth-child(7) a').attr('href', '#loisP');
        }
        else{
            $('#cv>div:nth-child(7) a img:last-of-type').css({transform: 'none'});
            $('#cv>div:nth-child(7) a').attr('href', '#footer');
        }
    });
});


var bool=false;//burger-menu
function cache(id){
    if(bool==false){
        $('header>div:nth-child(2) div').slideDown();
        bool=true;
    }
    else{
        $('header>div:nth-child(2) div').slideUp();
        bool=false;
    }
}