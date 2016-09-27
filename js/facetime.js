$(document).ready(function () {

  $( ".selected" ).each(function(index) {
    $(this).on("click", function(){
	  // remove classes from all
      $(".selected").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
    });
});
});


function openVidFacetime() {
	  document.getElementById('vidButton').style.color = 'black' 
	  document.getElementById('vidButton').style.background = 'white' 
	  document.getElementById('audioButton').style.color = 'white' 
	  document.getElementById('audioButton').style.background = '#888d8b' 
	  document.getElementById('audioButton').style.borderLeftColor = '#888d8b' 
	  document.getElementById('facetimeContacts').style.display = 'block';
	  document.getElementById('facetimeContacts2').style.display = 'none';

}

function openAudioFacetime() {
	  document.getElementById('audioButton').style.color = 'black' 
	  document.getElementById('audioButton').style.background = 'white' 
	  document.getElementById('audioButton').style.borderLeftColor = 'white' 
	  document.getElementById('vidButton').style.color = 'white' 
	  document.getElementById('vidButton').style.background = '#888d8b' 
	  document.getElementById('facetimeContacts').style.display = 'none';
	  document.getElementById('facetimeContacts2').style.display = 'block';

}