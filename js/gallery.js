var actualImg = 1;
var imgCount = 20;
$(document).ready(function() { 
    $('.img_mini_box').click(function() {
        $('.img_big_box').css({display:'block'});
        let id = $(this).attr('id');
        console.log(id);
        actualImg = id.substring(3, id.length);
        console.log(actualImg);
        galleryImgUpdate();
    });
    $('.cross').click(function() {
        galleryBoxDisappearance();
    });
    $('.next').click(function() {
        actualImg++;
        if(actualImg > imgCount)
          actualImg = 1;
        galleryImgUpdate();
    });
    $('.previous').click(function() {
        actualImg--;
        if(actualImg < 1)
          actualImg = imgCount;
        galleryImgUpdate();
    });
});

async function galleryBoxDisappearance() {
    $('.img_big_box').animate({
        opacity: 0
    }, 300);
    await sleep(400);
    $('.img_big_box').css({display: 'none'});
    $('.img_big_box').css({opacity: '1'});
}

const galleryImgUpdate = () => {
    $('#gallery_stage').css("opacity", "0");
    $('#gallery_stage').attr('src', 'img/gallery/img'+actualImg+'.jpg');
    $('#gallery_stage').css("opacity", "1");
    
}