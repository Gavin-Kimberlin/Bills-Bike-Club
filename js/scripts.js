$(document).ready(function(){
  $(".night-toggle").click(function(){
    $("body").removeClass();
    $("body").addClass("night-mode");
  });
  $(".day-toggle").click(function() {
    $("body").removeClass();
  });
  $(".highlight").click(function() {
    $(".highlight").addClass("highlight-paragraph")
  })
});
