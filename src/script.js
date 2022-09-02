var periodflag = false;

$(document).keypress(function(event){
  if($('.calc').hasClass('active')){
    if(event.which === 13){

      equals();
    }else{  
      var n = String.fromCharCode(event.which);
      //console.log(n)
      var patt = new RegExp(/^[0-9+\-()^*/ .]+$/);
      if(patt.test(n)){
        if($('.scrndisp').html() == 0){
          $('.scrndisp').html(n);
        }else{
          $('.scrndisp').append(n);
          fixsize();
        }
      }
    }
  }
});



$('button').click(function(){
  var id = $(this).attr("id");
    //console.log(id);
  if($('.scrndisp').html() == 0){
    $('.scrndisp').html(id);
  }else{
    $('.scrndisp').append(id);
    fixsize();
  }
});

$('.clear').click(function(){
  $('.scrndisp').html('0');
  $('.scrndisp').css('font-size','65px')
  $('.scrndisp').css('word-wrap', '');
  $('.equals').focus();
});

$('.equals').click(function(){
  equals();
});

$('.plusmn').click(function(){
  var total = eval($('.scrndisp').html());
  total = -total;
  $('.scrndisp').html(total);
  fixsize();
});

$('.percent').click(function(){
  var total = eval($('.scrndisp').html());
  total = total/100;
  $('.scrndisp').html(total);
  fixsize();
});

function equals(){
  var total = eval($('.scrndisp').html());
  total = total.toString();
  console.log(total);
  $('.scrndisp').html(total);
  fixsize();
}

function fixsize(){
  if($('.scrndisp').html().length < 42){
    fixsizer()
  }else{
    fixsizetwo()
  }
};

function fixsizer(){
  if($('.scrndisp').html().length > 11){
      var number = $('.scrndisp').html().length - 11;
      var num = $('.scrndisp').css('font-size')
      num = num.substr(0, num.length-2);
      console.log(num, $('.scrndisp').html().length);
      var multiploo = num/12;
      if(multiploo < 1){
        multiploo = 1;
      }
      var pix = 65 - (number*multiploo);
      if(pix < 2){
        pix = 2;
      }
      $('.scrndisp').css('font-size', pix+'px');
    }
  $('.scrndisp').css('word-wrap', '');
};

function fixsizetwo(){ 
  $('.scrndisp').css('word-wrap', 'break-word');
};

$('.out').click(function(){
  out();
});

function out(){
  if($('.calc').hasClass('active')){ 
    $('.calc').animate({left: "-430"}, 500, function(){
      $('.calc').removeClass('active');
      $(document).find('*').off('keyup keydown keypressed');
    });
  }else{
    $('.calc').animate({left: "0"}, 500, function(){
      $('.calc').addClass('active');
    });
    
  }
}
