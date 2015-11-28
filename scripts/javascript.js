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

  $(".starsFilter").on('click', function(){
    if($(this).attr('value') === '1'){
      console.log($("#star").siblings());
    }
    if($(this).attr('value') === '2'){
      
    }
    if($(this).attr('value') === '3'){
      
    }
    if($(this).attr('value') === '4'){
      
    }
    if($(this).attr('value') === '5'){
      
    }
  })



});
