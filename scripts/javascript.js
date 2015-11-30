$(document).ready(function(){
  $(".datePicker").pickadate()
  $(".results").each(function(){
    $(this).hide();
  });
  $(".filter").each(function(){
    $(this).hide();
  });


//Submit
  $("#submit").on('click', function(){
    $(".results").each(function(){
      $(this).attr('data-active', "")
      if($("#search").val() === "nyc"){
        $(this).show();
        $(this).attr('data-active', "active")
      }
      if($("#search").val() === "chicago"){
        $(this).show();
        $(this).attr('data-active', "active")
      }
      if($("#search").val() === "la"){
        $(this).show();
        $(this).attr('data-active', "active")
      }
      $('body').find('.filter').show()
    });
  });
//Carousel Buttons
  $("#nycButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "nyc"){
        $(this).show()
        $('body').find('.filter').show()
        $(this).attr('data-active', "active")
      }
      else{
        $(this).hide()
        $(this).attr('data-active', "")
      }
    });
  });
  $("#chiButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "chicago"){
        $(this).show()
        $('body').find('.filter').show()
        $(this).attr('data-active', "active")
      }
      else{
        $(this).hide()
        $(this).attr('data-active', "")
      }
    });
  });
  $("#laButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "la"){
        $(this).show()
        $('body').find('.filter').show()
        $(this).attr('data-active', "active")
      }
      else{
        $(this).hide()
        $(this).attr('data-active', "")
      }
    });
  });
//Star Filter
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
        if(check === numStars && $(this).attr('data-active') == 'active'){
          $(this).show();
        }
      });
      count = 0;
      check = 0;//Reset for next iteration
      }
    });
  });
//Price Filter
  $(".priceFilter").on('click', function(){
    var numPrice = $(this).attr('value');
    var priceCheck = 0
    if(numPrice === '100'){
      $('.results').each(function(){
        priceCheck = $(this).find('.price').attr('data-price')
        parseInt(priceCheck)
        if(priceCheck < 100 && $(this).attr('data-active') == 'active' ){
          $(this).show()
        }
        else{
          $(this).hide()
        }
      });
    }
    if(numPrice === '200'){
      $('.results').each(function(){
        priceCheck = $(this).find('.price').attr('data-price')
        parseInt(priceCheck)
        if(priceCheck > 100 && priceCheck < 300 && $(this).attr('data-active') == 'active' ){
          $(this).show()
        }   
        else{
          $(this).hide()
        }   
      });
    }
    if(numPrice === '300'){
      $('.results').each(function(){
        priceCheck = $(this).find('.price').attr('data-price')
        parseInt(priceCheck)
        if(priceCheck >= 300 && $(this).attr('data-active') == 'active'){
          $(this).show()  
          }
        else{
          $(this).hide()
        }    
      });
    }
  });
//Amenities Filter
  $(".checkboxAmenities").on('click', function(){
    var amenities = $(this).attr('id')
    var id = amenitiesFilter(amenities);
    var checkAmenities
    var checkState = $(this).prop('checked')  
    $('.results').each(function(){
      amenities = false;
      var splitString
      checkAmenities = $(this).attr('data-amenities')
      splitString = checkAmenities.split(" ");
      for(i=0;i<splitString.length;i++){
        if(splitString[i] === id && $(this).attr('data-active') == 'active'){
          amenities = true;
        }
      }
      if(amenities){
        if(checkState){
          $(this).show()
        }
      }
      if(!amenities){
        $(this).hide()
      }
    });
  });

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
        return 'fitness';
      break;
      case 'option5' :
        return 'rooftop';
      break;
      case 'option6' :
        return 'childcare';
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
