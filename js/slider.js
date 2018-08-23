var carouselIndex = 0;
var numberOfCells = 9;
var zTranslate = 0;
var resizing = true;
$(document).ready(function() {
    sliderResize();
    initCarousel();
    setInterval(rotateCarousel, 7000);

    $(window).resize(function() {
      resizing = true;
      $('.scene_resizing').css('z-index', '19');
      $('.scene_resizing').css('opacity', '1');
      sliderResize();
    });
});

const sliderResize = () => {

    let cellSize = parseInt($('.scene').css('width'));
    let tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );
    $('.cell:nth-child(1)').css( 'transform', 'rotateY(  0deg) translateZ('+tz+'px)');
    $('.cell:nth-child(2)').css( 'transform', 'rotateY( 40deg) translateZ('+tz+'px)'); 
    $('.cell:nth-child(3)').css( 'transform', 'rotateY( 80deg) translateZ('+tz+'px)'); 
    $('.cell:nth-child(4)').css( 'transform', 'rotateY(120deg) translateZ('+tz+'px)'); 
    $('.cell:nth-child(5)').css( 'transform', 'rotateY(160deg) translateZ('+tz+'px)'); 
    $('.cell:nth-child(6)').css( 'transform', 'rotateY(200deg) translateZ('+tz+'px)'); 
    $('.cell:nth-child(7)').css( 'transform', 'rotateY(240deg) translateZ('+tz+'px)'); 
    $('.cell:nth-child(8)').css( 'transform', 'rotateY(280deg) translateZ('+tz+'px)'); 
    $('.cell:nth-child(9)').css( 'transform', 'rotateY(320deg) translateZ('+tz+'px)'); 
    zTranslate = tz;
}

const rotateCarousel = () => {
    carouselIndex++;
    let angle = carouselIndex / numberOfCells * -360;
    document.querySelector('.carousel').style.transform = 'translateZ(-'+zTranslate+'px) rotateY(' + angle + 'deg)';

    if(resizing) resizing = false;
    else resizeOffDelay(200);
      
}

async function initCarousel() {
    let angle = carouselIndex / numberOfCells * -360;
    let transition = $('.carousel').css('transition');
    $('.carousel').css('transition', 'all 0s ease');
    document.querySelector('.carousel').style.transform = 'translateZ(-'+zTranslate+'px) rotateY(' + angle + 'deg)';
    await sleep (1);
    $('.carousel').css('transition', transition);
}

async function resizeOffDelay(x) {
    await sleep(x);
    $('.scene_resizing').css("opacity", "0");
    $('.scene_resizing').css('z-index', '19');
} 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}