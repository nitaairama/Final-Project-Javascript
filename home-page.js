// Go To Top Button
var topButton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Loading Screen
$(window).on("load", () => {
  const $loader = $(".loader");
  $loader.addClass("hide-loader");

  $loader.on("transitionend", () => {
    $loader.remove();
  });
});

// Latest Headline Slider
$(document).ready(function () {
  var $slideHeadline = $(".headline");
  var $backBtn = $("#backBtn");
  var $nextBtn = $("#nextBtn");

  $nextBtn.on("click", function () {
    $slideHeadline.css("scrollBehavior", "smooth");
    $slideHeadline.scrollLeft($slideHeadline.scrollLeft() + 900);
  });

  $backBtn.on("click", function () {
    $slideHeadline.css("scrollBehavior", "smooth");
    $slideHeadline.scrollLeft($slideHeadline.scrollLeft() - 900);
  });
});
