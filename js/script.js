$(document).ready(function(){
  
  for(var i=3; i<15;i++)
    $('.cards li').eq(i).addClass('no-bottom-border');
  
  for(var n=0; n < 10; n++){
    var temp = 3*n + 2;
    $('.cards li').eq(temp).addClass('no-right-border');
  }
  

});