$(function(){

  $(".marinades_btn").click(function(){
    var parent = $(this).parents(".popup_info");
    parent.find('.popup_blocks').removeClass('popup_blocks_active');
    var marinade_btn = $(this).data('name');
    var popup_active = '.popup_blocks_' + marinade_btn;
    $(popup_active).addClass("popup_blocks_active");
    $('.popup_product_count').text('1');
    $(".popup_price_summ[data-price]").each(function () {
      $(this).find("span").text($(this).data('price'))
    });
    $(this).siblings().removeClass("marinade_checked");
    $(this).addClass("marinade_checked");
  });

  $('.popup_footer_btn').click(function () {
    $('.popup_wrap').removeClass('modal_wrap_active');
    $('.modal_hidden').fadeIn();
    $('.popup_overlay').fadeIn();
    $('.modal_cart_wrap').addClass('modal_wrap_active');
  });


  // Переключатель с блока "Килограммы" на "Штуки"
  $('.popup_block').click(function (e) {
    if (Number($('.popup_blocks_active .popup_block_active .popup_product_count').text()) <= 1) {
      $('.popup_blocks_active .popup_block .popup_label span').removeClass('span_check');
      $(this).children('.popup_label').children('span').addClass('span_check');
      $(this).siblings().removeClass("popup_block_active");
      $(this).addClass("popup_block_active");
      if ($(e.target).parents('.popup_col_wrap').length)
        return;
      $('.alert_info_text').addClass('alert_info_active');
    }
    if ($(this).is(':first-child')) {
      $('.alert_info_text').removeClass('alert_info_last');
    }
    else {
      $('.alert_info_text').addClass('alert_info_last');
    }
  });


  $(document).mouseup(function (e) {
    var container = $(".alert_info_text");
    if (container.has(e.target).length === 0) {
      container.removeClass('alert_info_active');
    }
  });

  $('.alert_info_close').click(function () {
    $('.alert_info_text').removeClass('alert_info_active');
  });

  
});
