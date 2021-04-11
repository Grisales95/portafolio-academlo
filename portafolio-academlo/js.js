window.onload = function(){
    $("#onload").fadeOut();
    $("body").removeClass("hidden");
}

$(".lbl-menu").click(function(){
   $(".menu").slideToggle("slow");
 })

$(".lbl-menu").click(function(){
    $("body").toggleClass("hidden");
 });

$(".menu a").click(function(){
  $(".menu").slideUp("slow");
});

$(".menu a").click(function(){
    $("body").removeClass("hidden");
})