$(document).ready(function(){
  $(".datePicker").pickadate()
  $(".results").each(function(){
    $(this).hide();
  });
  $(".filter").each(function(){
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
        $(this).prev().show()
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
    var numStars = $(this).attr('value');//Value of Radio Button
    var check = 0
    var count = 0
    $('.stars').children('span').each(function(){//going through phyphicon Spans
        console.log(check)      
        console.log(numStars)  
        console.log(count)
      if($(this).hasClass('glyphicon-star')){
        check++;//If star, add 1
      }
      count++
      if(count === 5) {
      $(".results").each(function(){
        check = parseInt(check);//Force both to ints
        numStars = parseInt(numStars);    
        if(check !== numStars){ //If they are not equal, hide the result
          $(this).hide();
        }
        if(check === numStars){
          $(this).show();
        }
      });
        count = 0;
        check = 0;
      }
    });
  });



});
