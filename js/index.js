function checkTextHighlight() {

  if (document.getElementById('textFileName2').className === 'selected') {

  document.getElementById('textFileName2').style.background = 'black'
  document.getElementById('textFileName2').style.borderRadius = '0px';
  document.getElementById('textFileName2').style.padding = '0px';
  document.getElementById('textIcon2').style.marginLeft = "55px";


  document.getElementById('textFileName2').className = '';


  document.getElementById('textIcon2').style.background = null
  document.getElementById('textIcon2').style.padding = "8px";
  document.getElementById('textFileName2').style.borderRadius = "0px";
  document.getElementById('textIcon2').style.marginBottom = "-8px";
  document.getElementById('textIcon2').style.marginLeft = "26px";
  document.getElementById('textIcon2').style.marginTop = "0px";

  }

}

function openFinder() {
  document.getElementById('finder').style.display = 'block'
  document.getElementById('browser').style.display = 'none'
  document.getElementById('container').style.display = 'none'
  document.getElementById('imessage-background').style.display = 'none'
  document.getElementById('trash-can').style.display = 'none'
  document.getElementById('facetime').style.display = 'none'
  document.getElementById('spotlight').className = null 
  document.getElementById('photobooth').style.display = 'none'
 
}

function closeFinder() {
  document.getElementById('finder').style.display = 'none'
}

function openTerminal() {
  document.getElementById('container').style.display = 'flex'
  document.getElementById('browser').style.display = 'none'
  document.getElementById('finder').style.display = 'none'
  document.getElementById('imessage-background').style.display = 'none'
  document.getElementById('trash-can').style.display = 'none'
  document.getElementById('facetime').style.display = 'none'
  document.getElementById('textIcon2').style.display = 'none'
  document.getElementById('textFileName2').style.display = 'none'
  document.getElementById('photobooth').style.display = 'none'
}

function closeTerminal() {
  document.getElementById('container').style.display = 'none'
  document.getElementById('textIcon2').style.display = 'block'
  document.getElementById('textFileName2').style.display = 'inline'
}

function openChrome() {
  document.getElementById('browser').style.display = 'block'
  document.getElementById('container').style.display = 'none'
  document.getElementById('finder').style.display = 'none'
  document.getElementById('trash-can').style.display = 'none'
  document.getElementById('facetime').style.display = 'none'
  document.getElementById('photobooth').style.display = 'none'
}

function closeChrome() {
  document.getElementById('browser').style.display = 'none'
}

function openMessages() {
  document.getElementById('imessage-background').style.display = 'block'
  document.getElementById('browser').style.display = 'none'
  document.getElementById('container').style.display = 'none'
  document.getElementById('finder').style.display = 'none'
  document.getElementById('trash-can').style.display = 'none'
  document.getElementById('facetime').style.display = 'none'
  document.getElementById('textIcon2').style.display = 'none'
  document.getElementById('textFileName2').style.display = 'none'
  document.getElementById('photobooth').style.display = 'none'
}

function closeMessages() {
  document.getElementById('imessage-background').style.display = 'none'
  document.getElementById('textIcon2').style.display = 'block'
  document.getElementById('textFileName2').style.display = 'inline'

}

function openTrash() {
  document.getElementById('trash-can').style.display = 'block'
  document.getElementById('imessage-background').style.display = 'none'
  document.getElementById('browser').style.display = 'none'
  document.getElementById('container').style.display = 'none'
  document.getElementById('finder').style.display = 'none'
  document.getElementById('facetime').style.display = 'none'
  document.getElementById('photobooth').style.display = 'none'

}

function closeTrash() {
  document.getElementById('trash-can').style.display = 'none'
}

function openFacetime() {
  document.getElementById('facetime').style.display = 'block'
  document.getElementById('trash-can').style.display = 'none'
  document.getElementById('imessage-background').style.display = 'none'
  document.getElementById('browser').style.display = 'none'
  document.getElementById('container').style.display = 'none'
  document.getElementById('finder').style.display = 'none'
  document.getElementById('photobooth').style.display = 'none'
}

function scrollToBottom() {
  document.getElementsByClassName('chat')[0].scrollTo(0,document.getElementsByClassName('chat')[0].scrollHeight);
}


function closeFacetime() {
  document.getElementById('facetime').style.display = 'none'
}

function openPhotobooth() {  
  document.getElementById('photobooth').style.display = 'block'
  document.getElementById('facetime').style.display = 'none'
  document.getElementById('trash-can').style.display = 'none'
  document.getElementById('imessage-background').style.display = 'none'
  document.getElementById('browser').style.display = 'none'
  document.getElementById('container').style.display = 'none'
  document.getElementById('finder').style.display = 'none'
}

function closePhotobooth() {
  document.getElementById('photobooth').style.display = 'none'
}