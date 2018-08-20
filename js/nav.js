$(document).ready(function() {
    navSet();
    $(window).scroll(function() {
      navSet();
    });
    $('.burger').click(function() {
      $('.menu_burger_box').css({ transform: 'translateX(0%)' });
      $('.burger_box_background').css('display', 'block');
    });
    $('#close_menu_burger').click(function() {
      closeMenuBar();
    });
    $('.burger_box_background').click(function() {
      closeMenuBar();
    });
    $('.menu_burger_box > ol > li > a').click(function() {
      closeMenuBar();
    });
});

const closeMenuBar = () => {
  $('.menu_burger_box').css({ transform: 'translateX(100%)' });
  $('.burger_box_background').css('display', 'none');
}

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
      $('.logo').css( { height: '70px' } );
      $('.logo').css('background-position', '20px');
      $('.main_slider').css('margin-top', '100px');
    } else {
      $('nav > div').css(
        { position: 'relative' },
        { top: 'none' },
        { left: 'none' }
      );    
      $('nav > div').css({ height: '100px' });
      $('.logo').css({ height: '90px' });
      $('.logo').css('background-position', 'left');
      $('.main_slider').css('margin-top', '0px');
    }
}