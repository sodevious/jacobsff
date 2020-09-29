jQuery(document).ready(function($) {

  if(jQuery('.header-container').find('.toggle-nav')) {
    jQuery('.toggle-nav').click(function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    jQuery('body').toggleClass('navbar-is-open');

    jQuery(this).parent().toggleClass('is-open');
      jQuery('.navbar__menu').slideToggle( 'fast' );
    })
  }

  //modify css of 'body#body-content' element
        $("body#body-content").css({
            "overflow-y": "auto",
            "-webkit-overflow-scrolling": "touch"
        });

 var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident/.test(ua);

if ( isIE ) {
  //IE specific code goes here
  document.getElementById("page-wrapper").style.background = "#483d8b url('https://jacobsff.org/wp-content/themes/blankslate-child/images/istock_blue_diamond.svg') no-repeat center";
  document.getElementById("page-wrapper").style.backgroundSize = "100% 100%";
  document.getElementById("page-wrapper").style.zIndex = "1";
  document.getElementById("page-wrapper").style.minHeight = "100%";
  document.getElementById("page-wrapper").style.minWidth = "100%";
  document.getElementById("page-wrapper").style.top = "0";
  document.getElementById("page-wrapper").style.bottom = "0";
  document.getElementById("page-wrapper").style.left = "0";
  document.getElementById("page-wrapper").style.right = "0";
}

})
