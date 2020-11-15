<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(function(){
  var tscroll = $('#t-scroll');
  tscroll.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          tscroll.fadeIn();
     } else {
          tscroll.fadeOut();
     }
  });
  tscroll.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});
</script>