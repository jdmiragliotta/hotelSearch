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
      $('body').find('.main-review').hide()

      $(this).hide();

    });
    var searchVal = $("#search").val()
    if(searchVal == ""){
      alert('Please fill in the blank fields');
    }
    else{
      $(".results").each(function(){
        $(this).attr('data-active', "")
        if((searchVal === 'nyc' || searchVal === 'new york city') && $(this).attr('data-city') === 'nyc'){
          $(this).show();
          $(this).attr('data-active', "active")
        }
        else if((searchVal === 'chi' || searchVal === 'chicago') && $(this).attr('data-city') === 'chicago'){
          $(this).show();
          $(this).attr('data-active', "active")
        }
        else if((searchVal === 'la' || searchVal === 'los angeles') && $(this).attr('data-city') === 'la'){
          $(this).show();
          $(this).attr('data-active', "active")
        }
        $('body').find('.filter').show()
      });
    }
  });
//Carousel Buttons
  $("#nycButton").on('click',function(){
    $(".results").each(function(){
      if($(this).attr('data-city') === "nyc"){
        $(this).show()
        $('body').find('.filter').show()
        $('body').find('.main-review').hide()
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
        $('body').find('.main-review').hide()
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
        $('body').find('.main-review').hide()
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
    var amenities 
    var checkAmenities
    var idSplit = []
    var loopCheck = 0
    var checkState = $(this).prop('checked')
    $(".checkboxAmenities").each(function(){//Finds all checked boxes
      if($(this).prop('checked')){
      idSplit.push($(this).attr('id'))//If box is checked, push id to an array
      }

    })
    $('.results').each(function(){
      amenities = false;
      loopCheck = 0
      var splitString
      checkAmenities = $(this).attr('data-amenities')
      splitString = checkAmenities.split(" ");//Array of amenities from results
      for(i=0;i<idSplit.length;i++){//Filter options seleceted
        amenities = false;//Reset check 
        for(j=0;j<splitString.length;j++){//Amenities List of Results
          if(splitString[j] === idSplit[i] && $(this).attr('data-active') == 'active'){//If both are equal and the div is active, sets amenities to true
            amenities = true
          }
        }
        if(amenities){//If the ids matched, add one to loop count
          loopCheck++
        }
      };
      if(loopCheck == idSplit.length){//if ever amenities selected come back true, show that div
        $(this).show()
      }
      else{
        $(this).hide()
      }

    });
  });
//Modal Hide
  $('.modalHide').on('click',function(){
    var id = $(this).closest('.fade').attr('id')
    id+= 'Result'
    $('.results').each(function(){
      if(id === $(this).attr('id')){
        $(this).hide();
      }
    })
  })
//Autocomplete function
  $(function() {
    var availableTags = [
      "nyc",
      "new york city",
      "chi",
      "chicago",
      "la",
      "los angeles",
    ];
    $("#search").autocomplete({
      source: availableTags
    });
  });
});
