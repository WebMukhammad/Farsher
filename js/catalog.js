$(function(){

  $(".catalog_nav_link").mPageScroll2id({
    offset: 100
  });
  
  $('.catalog_kind_title, .catalog_kind_menu').click(function () {
    $('.catalog_kind_menu').toggleClass('catalog_kind_active');
    $('.catalog_kind_links').toggleClass('catalog_links_active');
  });

  $('.catalog_kind_title').click(function (e) {
    e.preventDefault();
  });

  linkActive();
  topHeight();

  $(window).scroll(function () {
    linkActive();
    topHeight();
  });

  var h_hght, pt_cat_prod;

  $(window).resize(function () {
    topHeight();
  });

  function topHeight() {
    h_hght = $("header").outerHeight() + Number($(".catalog").css('padding-top').slice(0, -2)); // высота шапки

    var elem = $('.catalog_nav');
    pt_cat_prod = elem.outerHeight();
    var top = $(this).scrollTop();
    if (top > h_hght) {
      elem.css('position', 'fixed');
      $(".catalog_products").css("padding-top", pt_cat_prod + "px");
      $('.catalog_nav').addClass('sticky');
    }
    else {
      elem.css('position', 'static');
      $(".catalog_products").css("padding-top","0");
      $('.catalog_nav').removeClass('sticky');
    } 
  };

  function linkActive() {
    if ($('.catalog_nav_link').hasClass('mPS2id-highlight')) {
      $('.catalog_nav_link').removeClass('catalog_nav_active')
    }
    else {
      $('.catalog_nav_link:first').addClass('catalog_nav_active')
    }
  };
  
});