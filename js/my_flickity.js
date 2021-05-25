W$(function(){

  /* Slick-slider */
  $('.banner_carousel_items').slick({
    dots: true, 
    autoplay: true, 
    autoplaySpeed: 5000,
    speed: 1200,
    fade: true,
    appendArrows:'.nav_banner',
    appendDots:'.nav_banner'
  });

  $('.popup_main_slider').flickity({
    pageDots: false,
    dragThreshold: 1,
    fade: true
  });

  $('.popup_slider_items').flickity({
    asNavFor: '.popup_main_slider',
    contain: true,
    pageDots: false,
    prevNextButtons: false
  });


  // Текст в баннере
  var len_fit = 6;

  if ($(this).width() <= 1200) {
    var len_fit = 9;
  }

  if ($(this).width() <= 769) {
    var len_fit = 6;
  }

  if ($(this).width() <= 480) {
    var len_fit = 10;
  }

  $(".banner_title").each(function () {
    if ($(this).html().length > len_fit) {
      var size_now = parseInt($(this).css("font-size"));
      var size_new = size_now * len_fit / $(this).html().length;
      $(this).css("font-size", size_new)
    }
  });


  // Табы на главное странице
  $('.product_kind_blocks div').click(function () {
    var myId = ".products_" + $(this).attr("id");
    $('.product_kind_blocks div').removeClass("kind_block_active");
    $(this).addClass("kind_block_active");
    $(".hide_products").hide();
    $(myId).css('display', 'flex');
    $('.nav_banner').removeAttr('style');
  });


  
});