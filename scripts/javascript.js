$(document).ready(function(){
  $(".datePicker").pickadate()
  $(".results").each(function(){
    $(this).hide();
  });



  $("#submit").on('click', function(){
    $(".results").each(function(){
      if($("#search").val() === "nyc"){
        $(this).show();
      }
      if($("#search").val() === "chicago"){
        $(this).show();
      }
      if($("#search").val() === "la"){
        $(this).show();
      }
    });
  });

  $("#nycButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "nyc"){
        $(this).show()
      }
    });
  });
  $("#chiButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "chicago"){
        $(this).show()
      }
    });
  });
  $("#laButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "la"){
        $(this).show()
      }
    });
  });




});
