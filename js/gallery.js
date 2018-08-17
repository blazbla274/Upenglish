var actualImg = 1;
$(document).ready(function() { 
    $('.img_mini_box').click(function() {
        $('.img_big_box').css({display:'block'});
        let id = $(this).attr('id');
        actualImg = id[id.length - 1];
        galleryImgUpdate();
    });
    $('.cross').click(function() {
        galleryBoxDisappearance();
    });
    $('.next').click(function() {
        actualImg++;
        galleryImgUpdate();
    });
    $('.previous').click(function() {
        actualImg--;
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