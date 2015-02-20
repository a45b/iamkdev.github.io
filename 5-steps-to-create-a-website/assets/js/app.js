/*
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {                
        $('html,body').animate({                
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
*/


$(function(){
  $('#my-photo').addClass('animated wobble');
  $('#about-text').addClass('animated bounceInDown');

  $(".main").onepage_scroll({
    pagination: false,
    updateURL: false,
    loop: false
  });

  $('ul#menu li').on('click', function(e){    
    e.preventDefault();
    $(".main").moveTo($(this).attr('data-index'));
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
      event.preventDefault();
      var pageNo = $('body').attr('class');
      if(pageNo == 'viewing-page-1'){
        $("ul#menu li").siblings().removeClass('active');
        $("ul#menu").find("[data-index='1']").addClass('active');
      }
      if(pageNo == 'viewing-page-2'){
        $("ul#menu li").siblings().removeClass('active');
        $("ul#menu").find("[data-index='2']").addClass('active');
      }
      if(pageNo == 'viewing-page-3'){
        $("ul#menu li").siblings().removeClass('active');
        $("ul#menu").find("[data-index='3']").addClass('active');
      }
      if(pageNo == 'viewing-page-4'){
        $("ul#menu li").siblings().removeClass('active');
        $("ul#menu").find("[data-index='4']").addClass('active');
      }
  });

  $( "#my-photo" ).mouseover(function() {
    $('#my-photo').removeClass('wobble').addClass('tada');
  });
  $( "#my-photo" ).mouseout(function() {
    $('#my-photo').removeClass('tada');
  });
});