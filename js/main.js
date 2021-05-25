$(function(){

  $('input[type="tel"]').mask("+7(999) 999-99-99");

  var body_height = $('.header_items');
  var all_height = body_height.outerHeight();

  $(window).resize(function () {
    all_height = body_height.outerHeight();
  })
  
  // Выпадающее меню
  $('.menu_mobile').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('menu_mobile_active')) {
      $('html, body').removeAttr('style');
    }
    else {
      $('html, body').css('height', all_height + 'px');
    }
    $('.cart_mobile').toggle();
    $(this).toggleClass('menu_mobile_active');
    $('html, body').toggleClass('body_hidden');
    body_height.toggleClass('header_items_active');
  });

  var $col = $('.submenu_block'),
    $plus = $('.submenu_toggle'),
    $sub = $('.submenu_item');

    $plus.click(function () {

      var subHeight = $(this).parent().siblings($sub).height();
      $(this).parent().parent().toggleClass('submenu_block_active');

      if ($(this).parent().parent().hasClass('submenu_block_active')) {
        $(this).addClass('submenu_toggle_active')
          .parent().parent().css('max-height', (60 + subHeight) + 'px')
          .siblings($col).removeClass('submenu_block_active').css('max-height', 30 + 'px')
          .find($plus).removeClass('submenu_toggle_active');
      } else {
        $(this).removeClass('submenu_toggle_active').parent().parent().css('max-height', 30 + 'px');
      }
    });


  // Открытие popup
  $('.product_btn, .social_callback').click(function () {
    var scrollX = window.scrollX;
    var scrollY = window.scrollY;
    var modal_popup = '.' + $(this).attr('class') + "_popup";
    $(modal_popup).addClass('modal_active');
    $(modal_popup).find('.modal_wrap').addClass('modal_wrap_active');
    $('html, body').css('overflow', 'hidden');
    window.onscroll = function () { window.scrollTo(scrollX, scrollY);
    };
  });

  // Закрытие popup
  $('.popup_close, .modal_close').click(function () {
    $('.product_popup, .modal').removeClass('modal_active');
    $('.popup_wrap, .modal_wrap, .modal_cart_wrap').removeClass('modal_wrap_active');
    $('html, body').css('overflow', 'auto');
    $('.popup_overlay').show();
    $('.popup_block_active .sas').text($('.popup_block_active .sas').parents('.popup_price_summ').data('price'));
    $('.popup_block').removeClass('popup_block_active');
    $('.popup_block:first').addClass('popup_block_active');
    $('.marinades_btn').removeClass('marinade_checked');
    $('.popup_label span').removeClass('span_check');
    $('.popup_label span:first').addClass('span_check');
    $('.marinades_btn:last').addClass('marinade_checked');
    $('.popup_product_count').text(1);
    $('.alert_info_text').removeClass('alert_info_active');
    window.onscroll = function () { return; };
  });

 

  $('.cart_add, .cart_remove').click(function (e) {
    if ($(this).hasClass('popup_plus_minus')) {
      if (!$(e.target).parents('.popup_block_active').length)
        return;
    }
    prod_count = Number($(this).parent().find('.popup_product_count').text());
    if ($(this).hasClass('cart_add')) {
      prod_count_result = prod_count + 1;
    }
    else if ($(this).hasClass('cart_remove')) {
      if (prod_count === 1)
        return;
      prod_count_result = prod_count - 1;
    }
    $(this).parent().find('.popup_product_count').text(prod_count_result);
    sas = $(this).parents('.cart_popup_js').find('.sas');
    popup_summ = Number(sas.text().replace(/\s/g, '')) / prod_count * prod_count_result;
    sas.text(popup_summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
    if (!$(this).hasClass('popup_plus_minus')) {
    total_count = 0;
    $(".sas").each(function () {
      total_count += Number($(this).text().replace(/\s/g, ''));
      $('.cart_add').parents('.cart_blocks').find('#total_summ').text(total_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
    });
  }
  });

});
