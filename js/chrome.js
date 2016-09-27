// empty link
$("a[href^='#']").on("click", function(e){
  e.preventDefault();
  //return false;
});

// tab New
$(".add").on("click", function(e){ 
  if($(".tabs li").size() < 4){ 
    $(".tabs li.active").removeClass("active");
    $(".tabs").append('<li class="active"><span>New Tab</span><a class="close" href="#">×</a></li>');
    $(".page iframe").attr("src", " ");
  }
});
  

// tab Click.active
$(".tabs li").on("click", function(e){
  
  $(".tabs li.active").removeClass("active");
  $(this).addClass("active");
  
  $(".page iframe").attr("src", $(this).find("a").attr("href"));
  
  e.preventDefault();
});
  

// tab Close
$(".tabs li a.close").on("click", function(e){
  $(this).closest("li").remove();
  
  if($(".tabs li").size() == 0){
    $(".tabs").append('<li><span>New Tab</span><a class="close" href="#">×</a></li>');
  }
  
  $(".tabs li:last-child").addClass("active");
  
  e.preventDefault();
});


// bookmark link
$(".bookmark ul li a").on("click", function(e){
  $(".page iframe").attr("src", $(this).attr("href"));
  e.preventDefault();
});

//open bookmark, change tab info

function openSheLovesMeNot() {
  document.getElementById('searchbartext').value = 'shelovesmenot.com'
  document.getElementsByClassName('active')[0].innerHTML = '<img src="http://image005.flaticon.com/1/png/128/11/11094.png">' +
      '<span>she loves me not</span>' +
      '<a class="close" href="http://facebook.com">×</a>'
}

function openYoutube() {
  document.getElementById('searchbartext').value = 'youtube.com/watch?v=S7sGp7Glxis'
  document.getElementsByClassName('active')[0].innerHTML = '<img src="http://s.ytimg.com/yts/img/favicon-vfldLzJxy.ico">' +
      '<span>Where Is My Mind? 1988 London</span>' +
      '<a class="close" href="http://facebook.com">×</a>'
}

function openSoundcloud() {
  document.getElementById('searchbartext').value = 'soundcloud.com/lovefuck/lovefuck'
  document.getElementsByClassName('active')[0].innerHTML = '<img src="images/soundcloud.png">' +
      '<span>lovefuck</span>' +
      '<a class="close" href="http://facebook.com">×</a>'
}

function openHome() {
  document.getElementById('searchbartext').value = 'http://www.blackjackapprenticeship.com/resources/how-to-count-cards/'
  document.getElementsByClassName('active')[0].innerHTML = '<img src="images/cards.png">' +
      '<span>How To Count Cards</span>' +
      '<a class="close" href="http://facebook.com">×</a>'
}

function openWiki() {
  document.getElementById('searchbartext').value = 'http://www.wikihow.com/Make-a-Long-Distance-Relationship-Work'
  document.getElementsByClassName('active')[0].innerHTML = '<img src="images/wiki.png">' +
      '<span>Make Long Distance Work</span>' +
      '<a class="close" href="http://facebook.com">×</a>'
}


