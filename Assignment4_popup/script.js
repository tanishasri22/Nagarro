var check=true;
$(document).ready(function(){
  $('.clicks').on('click',function(){
    if(check==true){
      $('#box').addClass('show');
      check=false;
    }
    else{
      $('#box').removeClass('show');
      check=true;
    }
  })

  $('.submission').on('click',function(){
    $('#box').removeClass('show');
  });
});
