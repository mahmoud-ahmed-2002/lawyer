
function aos(){
    AOS.init({
        duration:800,
        delay:5-00
      })
}
function responsiveDropdown(){
    /* ---- For Footer JS Start ---- */
  $(".icon-click i").on("click", function () {
    if ($(this).hasClass("fa-plus")) {
      $(this).removeClass("fa-plus");
      $(this).addClass("fa-minus");
      $(this).parent().parent().find(".footer-block-content").slideDown();
      // console.log("yes");
    } else {
      $(this).addClass("fa-plus");
      $(this).removeClass("fa-minus");
      $(this).parent().parent().find(".footer-block-content").slideUp();
      // console.log("no");
    }
});
/* ---- For Footer JS End ---- */
}
$(document).ready(function(){
    aos();
    responsiveDropdown()
})

// -------- navbar change bg when window was scroll ------------
$(Window).scroll(function () {
  let tScroll = $(window).scrollTop()
  if (tScroll > 10) {
    $('#main-nav').addClass('bg-light')
    $('#main-nav').removeClass('bg-transparent')
    $('#second-nav').addClass('d-none')


  } else {
    $('#main-nav').addClass('bg-transparent')
    $('#main-nav').removeClass('bg-light')
    $('#second-nav').removeClass('d-none')
  }
})