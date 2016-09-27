function highlightTextFile() {
  document.getElementById('textFileName').style.color = 'white'
  document.getElementById('textFileName').style.background = '#116cd6'
  document.getElementById('textFileName').style.textShadow = "none";
  document.getElementById('textFileName').style.borderRadius = "8px";
  document.getElementById('textFileName').style.padding = "3px";

  document.getElementById('textIcon').style.color = 'white'
  document.getElementById('textIcon').style.background = '#e0e0e0'
  document.getElementById('textIcon').style.borderRadius = "5px";
  document.getElementById('textIcon').style.padding = "10px";
}

function highlightTextFile3() {
  document.getElementById('textFileName').style.color = 'white'
  document.getElementById('textFileName').style.background = '#116cd6'
  document.getElementById('textFileName').style.textShadow = "none";
  document.getElementById('textFileName').style.borderRadius = "8px";
  document.getElementById('textFileName').style.padding = "3px";

  document.getElementById('textIcon').style.color = 'white'
  document.getElementById('textIcon').style.background = '#e0e0e0'
  document.getElementById('textIcon').style.borderRadius = "5px";
  document.getElementById('textIcon').style.padding = "10px";
}

function openTextFile() {
  document.getElementById('window2').style.display = 'block'
}

function testMethod() {
  console.log('in test method');
}


function highlightTextFile2() {
  document.getElementById('textFileName2').style.background = '#116cd6'
  document.getElementById('textFileName2').style.textShadow = "none";
  document.getElementById('textFileName2').style.borderRadius = "6px";
  document.getElementById('textFileName2').style.padding = "2px";
  document.getElementById('textFileName2').className = "selected";
  document.getElementById('textFileName2').display = "inline";



  document.getElementById('textIcon2').style.background = '#707070'
  document.getElementById('textIcon2').style.borderRadius = "5px";
  document.getElementById('textIcon2').style.padding = "2px";
  document.getElementById('textIcon2').style.marginBottom = "-2px";
  document.getElementById('textIcon2').style.marginLeft = "31px";
    document.getElementById('textIcon2').style.marginTop = "4px";

}

function openTextFile2() {
  document.getElementById('window3').style.display = 'block'
  document.getElementById('textFileWindow').style.display = 'none'
    document.getElementById('finder').style.display = 'none'

}

function closeTextFile2() {
  document.getElementById('window3').style.display = 'none'
  document.getElementById('textFileWindow').style.display = 'block'
}

function closePdfFile() {
    document.getElementById('pdfView').style.display = 'none'

}

function closeMovieFIle() {
    document.getElementById('pdfView').style.display = 'none'
    document.getElementById('pdfView').innerHTML = '';

}

function openEmptyDialog() {
      document.getElementById('dialogue-container').style.display = 'flex'
      document.getElementById('trash-can').style.display = 'none'
      document.getElementById('filefile').style.display = 'none'

}

function closeDialogue() {
      document.getElementById('dialogue-container').style.display = 'none'
      document.getElementById('trash-can').style.display = 'block'
      document.getElementById('filefile').style.display = 'block'


}

function eraseTrash() {
      document.getElementById('dialogue-container').style.display = 'none'
      document.getElementById('trash-can').style.display = 'block'
      document.getElementById('filefile').style.display = 'block'
      document.getElementById('trashFile').style.display = 'none'
      document.getElementById('trashIconFinder').innerHTML = "<label>Trash</label>" +
       "<img onclick='openTrash()' src='http://cdn.osxdaily.com/wp-content/uploads/2010/07/512-TrashIcon-macosx1.png'>"
      document.getElementById("trash-icon")
        .getElementsByTagName("i")[0].style.background="url('images/trashEmpty.png')"; 

}      




