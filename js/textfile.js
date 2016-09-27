function show(target) {
    document.getElementById(target).style.display = 'block';
}

function hide(target) {
    document.getElementById(target).style.display = 'none';
}

function zoom(target) {
    document.getElementById(target).style.width = '98vw';
    document.getElementById(target).style.height = '80vh';
  	document.getElementById(target).style.margin = '0vh auto';
  	document.getElementById('textarea').style.width = '96.5vw';
  	document.getElementById('textarea').style.height = '67vh';
}
function minimize(target) {
    document.getElementById(target).style.width = '50vw';
    document.getElementById(target).style.height = 'auto';
  	document.getElementById(target).style.margin = '12.5vh auto';
  	document.getElementById('textarea').style.width = '48.5vw';
  	document.getElementById('textarea').style.height = '50vh';
}


$(function() {
  $( "#window2" ).draggable();
  $( "#window3" ).draggable();
  // $( "#facetime" ).draggable();
  $( "#finder" ).draggable();
  $( "#browser" ).draggable();
  $( "#container" ).draggable();
  $( "#imessage-background" ).draggable();
  $( "#trash-can" ).draggable();
  $( "#filefile" ).draggable();
  $( "#folder1" ).draggable();
  $( "#folder2" ).draggable();
  $( "#folder3" ).draggable();
  $( "#folder4" ).draggable();
  $( "#folder5" ).draggable();
  $( "#folder6" ).draggable();
  $( "#folderPic1" ).draggable();
  $( "#pdfView" ).draggable();
  $( "#dialogue" ).draggable();
  $( "#file" ).draggable();
  $( "#photobooth" ).draggable();
});