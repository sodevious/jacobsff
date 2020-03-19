jQuery(document).ready(function() {

  var flag = 0;
  if(jQuery('.header-container').find('.toggle-nav')) {
    jQuery('.toggle-nav').click(function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

      $x = jQuery('.header-container');
      if(flag == 0) {
        var menu_height = jQuery('.navbar__menu').height();
        var total_height = menu_height + 60;
        jQuery('.container-fluid.work-area, .contents-area, .contents-area2').animate({top: total_height});
        flag = 1;
      } else {
        flag = 0;
        jQuery('.container-fluid.work-area, .contents-area, .contents-area2').animate({top: '60'});
      }
      jQuery('.navbar__menu').slideToggle( 'fast' );
    })
  }

})
