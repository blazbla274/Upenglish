$(document).ready(function() {
    navSet();
    $(window).scroll(function() {
      navSet();
    });
});

const navSet = () => {

    if($(window).scrollTop() > 110 &&
    $(window).scrollTop() < 250) {
      $('nav > div').css(
        { opacity: '0' },
      );
    } else {
      $('nav > div').css(
        { opacity: '1' },
      );
    }

    if($(window).scrollTop() > 250) {
      $('nav > div').css(
        { position: 'fixed' },
        { top: '0px' },
        { left: '0px' }    
      );  
      $('nav > div').css({ height: '70px' });
      $('.logo').css({height: '70px'});
      } else {
      $('nav > div').css(
        { position: 'relative' },
        { top: 'none' },
        { left: 'none' }
      );    
      $('nav > div').css({ height: '100px' });
      $('.logo').css({height: '90px'});
    }
}