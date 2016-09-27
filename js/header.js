
// Spotlight toggles
$(function() {
  $('.results').hide();
 

  $( "#spotlight" ).click(function() {
    $(this).toggleClass( "active" );
    $('.spotlight-search').toggleClass( "active" );
    $('.demo').toggleClass( "active" );
  });
  
  $('#search').focus(function(){
    $('.results'+ this.value).show();
  });
    
  $('#search').on("focusout", function(){ 
    $('.spotlight-search').toggleClass( "active" );
    $('#spotlight').toggleClass( "active" );
  });
  
});



// Open Finder
$(function() {


  $( "#openFinder" ).click(function() {
    $('.results').hide();
    $(this).toggleClass( "active" );
    $('.spotlight-search').toggleClass( "active" );
    $('.iconn spotlight').toggleClass( "active" );
    $('.demo').toggleClass( "active" );
  });
  
});

// Open Downloads
$(function() {


  $( "#downloadsFolder1" ).click(function() {
    $('.results').hide();
    $('.spotlight-search').toggleClass( "active" );
    $('.iconn spotlight').toggleClass( "active" );
    $('.demo').toggleClass( "active" );
  });
  
});