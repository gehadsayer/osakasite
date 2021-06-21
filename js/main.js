
$(document).ready(function(){

$(window).scroll(function(){
    let scrollTop= $(window).scrollTop();
    let offAbout= $('.about').offset().top;
    if(scrollTop >= offAbout){
        $('.btn-up').fadeIn(1000);
        $('nav').css({
            backgroundColor:'rgba(0,0,0,0.5)',
            transition:'all 1s',
            padding:'5 10px'
        })
    }
    else{
        $('.btn-up').fadeOut(1000);
        $('nav').css({
            backgroundColor:'transparent',
            transition:'all 1s',
            padding:'0 0px'
        })
    }
});

$('.btn-up').click(function(){
    $('body, html').animate({
        scrollTop:'0'
    },3000)
});

$('.nav-link').click(function(){
  let hrefValue=  $(this).attr('href');
  let offsetSec=$(hrefValue).offset().top;
  $('body').animate({
      scrollTop:offsetSec
  },2000)
})

$('.parent-option .icon i').click(function(){
  
   
let boxWidth=$('.options').innerWidth();


let x=$('.parent-option').css('left');

if(x == '0px')
{
    $('.parent-option').animate({
        left:`-${boxWidth}`
    },3000);
    
}else{
    $('.parent-option').animate({
        left:'0px'
    },3000);
}

});

$('.parent-option li').click(function(){


    let color=$(this).css('backgroundColor');
    $('i,.view,.btn-up,.about .creative,.blog span,.item h6 ,.icon').css({'color':color,transition:'all 1s'})
    $('#testmonial .carousel-indicators li').css('backgroundColor',color)
    $('.icon').css('borderColor',color)
    
    $('.navbar a').mouseover(function(){
      
        $(this).css({'color':color,transition:'all 1s'})
      })
      $('.navbar a').mouseout(function(){
      
        $(this).css({'color':'white',transition:'all 1s'})
      })
   
})
$('.parent-option img').click(function(){
    let imgSrc=$(this).attr('src');
    $('.home').css({
        backgroundImage: `url(${imgSrc})`,
        transition:'all 2s',
    })
})

    $('.loading').fadeOut(3000,function(){
        $('body').css('overflow','auto')
    })
})