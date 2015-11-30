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
      else{
        $(this).hide()
      }
    });
  });
  $("#chiButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "chicago"){
        $(this).show()
      }
      else{
        $(this).hide()
      }
    });
  });
  $("#laButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "la"){
        $(this).show()
      }
      else{
        $(this).hide()
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

  $("input[type=checkbox]").on('click', function(){
    var amenities = $(this).attr('id')
    var id = amenitiesFilter(amenities);
    var checkAmenities
    var checkState = $(this).checked  
    $('.results').each(function(){
      checkAmenities = $(this).attr('data-amenities')
      checkAmenities.split(" ");
      for(i=0;i<checkAmenities.length;i++){
        if(checkAmenities[i] == id){
          if(checkState){
            $(this).show()
          }
          if(!checkState){
            $(this).hide()
          }
        }
      }
    });
  })

  function amenitiesFilter(filter){
    switch(filter){
      case 'option1' :
        return 'wifi';
      break;
      case 'option2' :
        return 'bar';
      break;
      case 'option3' :
        return 'valet';
      break;
      case 'option4' :
        return 'gym';
      break;
      case 'option5' :
        return 'rooftop';
      break;
      case 'option6' :
        return 'child';
      break;
      case 'option7' :
        return 'spa';
      break;
      case 'option8' :
        return 'pool';
      break;
    }
  }
});
