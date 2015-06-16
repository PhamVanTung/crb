$(function() {
  var icon = $(".plus").parent().find("span.glyphicon:first");
  $(document).on("click",".plus", function(){
    class_name = $(this).parent().find("span.glyphicon:first").attr("class");
    if(class_name == "glyphicon glyphicon-plus-sign") {
      $(this).parent().find("span.glyphicon:first").attr("class","glyphicon glyphicon-minus-sign");
    } else {
      $(this).parent().find("span.glyphicon:first").attr("class","glyphicon glyphicon-plus-sign");
    }
    $("#event-" + $(this).data("event-id")).slideToggle();
  });

  $(document).on("click", ".expand", function() {
    icon.removeClass("glyphicon-plus-sign");
    icon.addClass("glyphicon-minus-sign");
    $(".s-detail").slideDown();
  });

  $(document).on("click", ".coll", function() {
    icon.addClass("glyphicon-plus-sign");
    icon.removeClass("glyphicon-minus-sign");
    $(".s-detail").slideUp();
  });
});
