jQuery(document).ready(function() {

  if(jQuery('.header-container').find('.toggle-nav')) {
    jQuery('.toggle-nav').click(function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    jQuery(this).parent().toggleClass('is-open');
      jQuery('.navbar__menu').slideToggle( 'fast' );
    })
  }

})
