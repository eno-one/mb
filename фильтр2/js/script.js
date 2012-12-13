$(document).ready(function(){
  
  $('#slides').slides({
    preload: true,
    preloadImage: 'img/loading.gif',
    play: 5000,
    pause: 2500,
    hoverPause: true
  });
  
  for(var i=3; i<15;i++)
    $('.cards li').eq(i).addClass('no-bottom-border');
  
  for(var n=0; n < 10; n++){
    var temp = 3*n + 2;
    $('.cards li').eq(temp).addClass('no-right-border');
  }
  
  var strokesQuantity = Math.ceil($('.cards li').size()/3);
  $('.cards').css('height', ($('.cards li').height() * strokesQuantity + strokesQuantity));
  
  $('.buttons a').bind('click', function(){
    
    var id = $(this).attr('id');
    $('.cards li').hide();
    $('.cards li[data-' + id + '=1]').show();
    
    
   
    return false;
  });

});