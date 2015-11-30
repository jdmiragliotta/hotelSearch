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
      $('.price').each(function(){
        priceCheck = $(this).attr('data-price')
        parseInt(priceCheck)
        if( priceCheck < '100'){
          $(this).closest('.results').show()
        }
        else{
          $(this).closest('.results').hide()
        }        
      });
    }
    if(numPrice === '200'){
      $('.price').each(function(){
        priceCheck = $(this).attr('data-price')
        parseInt(priceCheck)
        if(priceCheck > '100' && priceCheck < '200' ){
          $(this).closest('.results').show()
          console.log('Test if')
        }
        else{
          $(this).closest('.results').hide()
          console.log('Test else')
        }        
      });
    }
    if(numPrice === '300'){
      $('.price').each(function(){
        priceCheck = $(this).attr('data-price')
        parseInt(priceCheck)
        if(priceCheck > '300'){
          $(this).closest('.results').show()
        }
        else{
          $(this).closest('.results').hide()
        }        
      });
    }
    
  });


});
