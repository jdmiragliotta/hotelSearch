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
        $('body').find('.filter').show()
      }
    });
  });
  $("#chiButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "chicago"){
        $(this).show()
        $('body').find('.filter').show()
      }
    });
  });
  $("#laButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "la"){
        $(this).show()
        $('body').find('.filter').show()

      }
    });
  });

  $(".starsFilter").on('click', function(){
    var numStars = $(this).attr('value');//Value of Radio Button
    var check = 0
    var count = 0
    $('.stars').children('span').each(function(){//going through phyphicon Spans
      if($(this).hasClass('glyphicon-star')){
        check++;//If star, add 1
      }
      count++//Count iterations
      if(count === 5) {//Went through all glyphicons in a div
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
      check = 0;//Reset for next iteration
      }
    });
  });

  $(".priceFilter").on('click', function(){
    var numPrice = $(this).attr('value');
    var priceCheck = 0
    if(numPrice === '100'){
      $('.results').each(function(){
        priceCheck = $(this).find('.price').attr('data-price')
        parseInt(priceCheck)
        if( priceCheck > '100'){
          $(this).hide()
        }
      });
    }
    if(numPrice === '200'){
      $('.results').each(function(){
        priceCheck = $(this).find('.price').attr('data-price')
        parseInt(priceCheck)
        if(priceCheck <= '100' || priceCheck >= '200' ){
          $(this).hide()
        }      
      });
    }
    if(numPrice === '300'){
      $('.results').each(function(){
        priceCheck = $(this).find('.price').attr('data-price')
        parseInt(priceCheck)
        if(priceCheck < '300'){
          $(this).hide()  
          }    
      });
    }
    
  });


});
