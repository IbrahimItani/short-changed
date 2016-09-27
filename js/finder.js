function openDesktopFolder() {
  document.getElementById('windowname').innerHTML = '<span id="iconFolder"></span>Desktop'
  document.getElementById('iconFolder').style.background = 'url("./images/folderS.png")';
  document.getElementById('finderContent').innerHTML = '<div id="folder1" ondblclick="openTextFile2()"'+
  'onClick="highlightTextFile()" class="folder"> <img id="folderPic1" src="images/textfileDesktop2.png">' +
  '<span id="folderText1">' +
   '&lt;/3' +       
  '</span>'


}

function openDocumentFolder() {
  document.getElementById('finderContent').innerHTML = '' 
  document.getElementById('windowname').innerHTML = '<span id="iconFolder"></span>Documents'
  document.getElementById('iconFolder').style.background = 'url("./images/folderS.png")';
}

function openDownloadsFolderSearchBar() {
  document.getElementById('finder').style.display = 'block'
  document.getElementById('browser').style.display = 'none'
  document.getElementById('container').style.display = 'none'
  document.getElementById('imessage-background').style.display = 'none'
  document.getElementById('trash-can').style.display = 'none'
  document.getElementById('facetime').style.display = 'none'
  document.getElementById('spotlight').className = null  
  document.getElementById('windowname').innerHTML = '<span id="iconFolder"></span>Downloads'
  document.getElementById('iconFolder').style.background = 'url("./images/folderS.png")';
    document.getElementById('finderContent').innerHTML = '<div id="folder1" ondblclick="openPdfFile()"'+
  'onClick="highlightPDFFile()" class="folder"> <img id="folderPic1" src="images/pdfIcon.png">' +
  '<span style="margin-right:17px;" id="folderText1">' +
   'IncidentReport.pdf' +       
  '</span>'
}

function openDownloadsFolder() {
  document.getElementById('windowname').innerHTML = '<span id="iconFolder"></span>Downloads'
  document.getElementById('iconFolder').style.background = 'url("./images/folderS.png")';
    document.getElementById('finderContent').innerHTML = '<div id="folder1" ondblclick="openPdfFile()"'+
  'onClick="highlightPDFFile()" class="folder"> <img id="folderPic1" src="images/pdfIcon.png">' +
  '<span style="margin-right:17px;" id="folderText1">' +
   'IncidentReport.pdf' +       
  '</span>'
}

function openMoviesFolder() {
    document.getElementById('windowname').innerHTML = '<span id="iconFolder"></span>Movies'
  document.getElementById('iconFolder').style.background = 'url("./images/folderS.png")';
    document.getElementById('finderContent').innerHTML = '<div id="folder1" ondblclick="openMovieFile()"'+
  'onClick="highlightTextFile()" class="folder"> <img id="folderPic1" src="images/bag.png">' +
  '<span id="folderText1">' +
   'bag scene' +       
  '</span>'
  
}

function openMusicFolder() {
    document.getElementById('windowname').innerHTML = '<span id="iconFolder"></span>Music'
  document.getElementById('iconFolder').style.background = 'url("./images/folderS.png")';
      document.getElementById('finderContent').innerHTML = '<div id="folder1" ondblclick="openMusicFile()"'+
  'onClick="highlightTextFile()" class="folder"> <img id="folderPic1" src="images/prettyGirls.png">' +
  '<span id="folderText1">' +
   'pretty-girls-put-boys-in-cemeteries' +       
  '</span>'
}

function openPicturesFolder() {
  document.getElementById('windowname').innerHTML = '<span id="iconFolder"></span>Pictures'
  document.getElementById('iconFolder').style.background = 'url("./images/folderS.png")';
  document.getElementById('finderContent').innerHTML = '' 
}

function openPdfFile() {
  document.getElementById('pdfView').style.display = 'block'
    document.getElementById('finder').style.display = 'none'

  document.getElementById('pdfView').innerHTML = '<div style="width:725px; height:500px; margin-bottom: 35px;" id="toolbar"> <div id="traffic-light"> <div onclick="closePdfFile();" id="red"></div>' +
      '<div id="yellow"></div> <div id="green"></div> </div>' +
  '<iframe src="images/IncidentReport.pdf" style="margin-top: 30px; width:720px; height:500px;" frameborder="40"></iframe>';
}

function openMovieFile() {
  document.getElementById('pdfView').style.display = 'block'
    document.getElementById('finder').style.display = 'none'

  document.getElementById('pdfView').innerHTML = '<div style="width:505px; height:400px; margin-bottom: 35px;" id="toolbar"> <div id="traffic-light"> <div onclick="closeMovieFIle();" id="red"></div>' +
      '<div id="yellow"></div> <div id="green"></div> </div>' +
  '<iframe src="videos/bag.mp4" style="margin-top: 30px; width:500px; height:400px;" frameborder="40"></iframe>';
}

function openMusicFile() {
  document.getElementById('pdfView').style.display = 'block'
    document.getElementById('finder').style.display = 'none'

  document.getElementById('pdfView').innerHTML = '<div style="width:305px; height:95px;" id="toolbar"> <div id="traffic-light"> <div onclick="closeMovieFIle();" id="red"></div>' +
      '<div id="yellow"></div> <div id="green"></div> </div>' +
  '<iframe src="music/pretty-girls-put-boys-in-cemeteries.mp3" style="background: black; margin-top: 30px; padding-top:30px; width:300px; height:65px;" frameborder="40"></iframe>';
}


function finderBack() {

    document.getElementById('windowname').innerHTML = '<i></i>All My Files'


  document.getElementById('finderContent').innerHTML = '<div id="folder1" ondblclick="openDesktopFolder()" onClick="highlightFolder1()" class="folder">'
  + '<img id="folderPic1" src="images/folder.png">' +
        '<span id="folderText1">' +
          'Desktop' +
        '</span>' +
      '</div>' +
      '<div id="folder2" ondblclick="openDocumentFolder()" onClick="highlightFolder2()" class="folder">' +
        '<img id="folderPic2" src="images/folder.png">' +
        '<span id="folderText2">' +
          'Documents' +
        '</span>' +
      '</div>' + 
      '<div id="folder3" ondblclick="openDownloadsFolder()" onClick="highlightFolder3()" class="folder">' + 
        '<img id="folderPic3" src="images/folder.png">' + 
        '<span id="folderText3">' + 
          'Downloads' + 
        '</span>' + 
      '</div>' + 
      '<div id="folder4" ondblclick="openMoviesFolder()" onClick="highlightFolder4()" class="folder">' + 
        '<img id="folderPic4" src="images/folder.png">' + 
        '<span id="folderText4">' + 
          'Movies' + 
        '</span>' + 
      '</div>' + 
      '<div id="folder5" ondblclick="openMusicFolder()" onClick="highlightFolder5()" class="folder">' + 
        '<img id="folderPic5" src="images/folder.png">' + 
        '<span id="folderText5">' + 
          'Music' + 
        '</span>' + 
      '</div>' + 
      '<div id="folder6" ondblclick="openPicturesFolder()" onClick="highlightFolder6()" class="folder">' + 
        '<img id="folderPic6" src="images/folder.png">' + 
        '<span id="folderText6">' + 
          'Pictures' + 
        '</span>' + 
      '</div>'      



}

function highlightTextFile() {  
  document.getElementById('folderText1').style.background = '#116cd6'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "6px";
  document.getElementById('folderText1').style.padding = "2px";
  document.getElementById('folderText1').style.color = "white";

  document.getElementById('folderPic1').style.background = '#c9c9c9'
  document.getElementById('folderPic1').style.borderRadius = "5px";
  document.getElementById('folderPic1').style.padding = "2px";
  document.getElementById('folderPic1').className = "selected2";
  }

  function highlightPDFFile() {  
  document.getElementById('folderText1').style.background = '#116cd6'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "5px";
  document.getElementById('folderText1').style.padding = "3px";
  document.getElementById('folderText1').style.color = "white";
  document.getElementById('folderText1').style.right = "17px";

  document.getElementById('folderPic1').style.background = '#c9c9c9'
  document.getElementById('folderPic1').style.borderRadius = "4px";
  document.getElementById('folderPic1').style.padding = "2px";
  document.getElementById('folderPic1').className = "selected2";
  }




function highlightFolder1() {  
  document.getElementById('folderText1').style.background = '#116cd6'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "6px";
  document.getElementById('folderText1').style.padding = "2px";
  document.getElementById('folderText1').style.color = "white";

  document.getElementById('folderPic1').style.background = '#c9c9c9'
  document.getElementById('folderPic1').style.borderRadius = "5px";
  document.getElementById('folderPic1').style.padding = "3px";
  document.getElementById('folderPic1').className = "selected2";

  document.getElementById('folderText2').style.background = 'none'
  document.getElementById('folderText2').style.textShadow = "none";
  document.getElementById('folderText2').style.borderRadius = "0px";
  document.getElementById('folderText2').style.padding = "0px";
  document.getElementById('folderText2').style.color = "black";

  document.getElementById('folderPic2').style.background = 'none'
  document.getElementById('folderPic2').style.borderRadius = "0px";
  document.getElementById('folderPic2').style.padding = "0px";

  document.getElementById('folderText3').style.background = 'none'
  document.getElementById('folderText3').style.textShadow = "none";
  document.getElementById('folderText3').style.borderRadius = "0px";
  document.getElementById('folderText3').style.padding = "0px";
  document.getElementById('folderText3').style.color = "black";

  document.getElementById('folderPic3').style.background = 'none'
  document.getElementById('folderPic3').style.borderRadius = "0px";
  document.getElementById('folderPic3').style.padding = "0px";

  document.getElementById('folderText4').style.background = 'none'
  document.getElementById('folderText4').style.textShadow = "none";
  document.getElementById('folderText4').style.borderRadius = "0px";
  document.getElementById('folderText4').style.padding = "0px";
  document.getElementById('folderText4').style.color = "black";

  document.getElementById('folderPic4').style.background = 'none'
  document.getElementById('folderPic4').style.borderRadius = "0px";
  document.getElementById('folderPic4').style.padding = "0px";

  document.getElementById('folderText5').style.background = 'none'
  document.getElementById('folderText5').style.textShadow = "none";
  document.getElementById('folderText5').style.borderRadius = "0px";
  document.getElementById('folderText5').style.padding = "0px";
  document.getElementById('folderText5').style.color = "black";

  document.getElementById('folderPic5').style.background = 'none'
  document.getElementById('folderPic5').style.borderRadius = "0px";
  document.getElementById('folderPic5').style.padding = "0px";

  document.getElementById('folderText6').style.background = 'none'
  document.getElementById('folderText6').style.textShadow = "none";
  document.getElementById('folderText6').style.borderRadius = "0px";
  document.getElementById('folderText6').style.padding = "0px";
  document.getElementById('folderText6').style.color = "black";

  document.getElementById('folderPic6').style.background = 'none'
  document.getElementById('folderPic6').style.borderRadius = "0px";
  document.getElementById('folderPic6').style.padding = "0px";
}

function highlightFolder2() {
  
  document.getElementById('folderText2').style.background = '#116cd6'
  document.getElementById('folderText2').style.textShadow = "none";
  document.getElementById('folderText2').style.borderRadius = "6px";
  document.getElementById('folderText2').style.padding = "2px";
  document.getElementById('folderText2').style.color = "white";

  document.getElementById('folderPic2').style.background = '#c9c9c9'
  document.getElementById('folderPic2').style.borderRadius = "5px";
  document.getElementById('folderPic2').style.padding = "3px";
  document.getElementById('folderPic2').className = "selected2";

  document.getElementById('folderText1').style.background = 'none'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "0px";
  document.getElementById('folderText1').style.padding = "0px";
  document.getElementById('folderText1').style.color = "black";

  document.getElementById('folderPic1').style.background = 'none'
  document.getElementById('folderPic1').style.borderRadius = "0px";
  document.getElementById('folderPic1').style.padding = "0px";

  document.getElementById('folderText3').style.background = 'none'
  document.getElementById('folderText3').style.textShadow = "none";
  document.getElementById('folderText3').style.borderRadius = "0px";
  document.getElementById('folderText3').style.padding = "0px";
  document.getElementById('folderText3').style.color = "black";

  document.getElementById('folderPic3').style.background = 'none'
  document.getElementById('folderPic3').style.borderRadius = "0px";
  document.getElementById('folderPic3').style.padding = "0px";

  document.getElementById('folderText4').style.background = 'none'
  document.getElementById('folderText4').style.textShadow = "none";
  document.getElementById('folderText4').style.borderRadius = "0px";
  document.getElementById('folderText4').style.padding = "0px";
  document.getElementById('folderText4').style.color = "black";

  document.getElementById('folderPic4').style.background = 'none'
  document.getElementById('folderPic4').style.borderRadius = "0px";
  document.getElementById('folderPic4').style.padding = "0px";

  document.getElementById('folderText5').style.background = 'none'
  document.getElementById('folderText5').style.textShadow = "none";
  document.getElementById('folderText5').style.borderRadius = "0px";
  document.getElementById('folderText5').style.padding = "0px";
  document.getElementById('folderText5').style.color = "black";

  document.getElementById('folderPic5').style.background = 'none'
  document.getElementById('folderPic5').style.borderRadius = "0px";
  document.getElementById('folderPic5').style.padding = "0px";

  document.getElementById('folderText6').style.background = 'none'
  document.getElementById('folderText6').style.textShadow = "none";
  document.getElementById('folderText6').style.borderRadius = "0px";
  document.getElementById('folderText6').style.padding = "0px";
  document.getElementById('folderText6').style.color = "black";

  document.getElementById('folderPic6').style.background = 'none'
  document.getElementById('folderPic6').style.borderRadius = "0px";
  document.getElementById('folderPic6').style.padding = "0px";
}

function highlightFolder3() {
  
  document.getElementById('folderText3').style.background = '#116cd6'
  document.getElementById('folderText3').style.textShadow = "none";
  document.getElementById('folderText3').style.borderRadius = "6px";
  document.getElementById('folderText3').style.padding = "2px";
  document.getElementById('folderText3').style.color = "white";

  document.getElementById('folderPic3').style.background = '#c9c9c9'
  document.getElementById('folderPic3').style.borderRadius = "5px";
  document.getElementById('folderPic3').style.padding = "3px";
  document.getElementById('folderPic3').className = "selected2";

  document.getElementById('folderText2').style.background = 'none'
  document.getElementById('folderText2').style.textShadow = "none";
  document.getElementById('folderText2').style.borderRadius = "0px";
  document.getElementById('folderText2').style.padding = "0px";
  document.getElementById('folderText2').style.color = "black";

  document.getElementById('folderPic2').style.background = 'none'
  document.getElementById('folderPic2').style.borderRadius = "0px";
  document.getElementById('folderPic2').style.padding = "0px";

  document.getElementById('folderText1').style.background = 'none'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "0px";
  document.getElementById('folderText1').style.padding = "0px";
  document.getElementById('folderText1').style.color = "black";

  document.getElementById('folderPic1').style.background = 'none'
  document.getElementById('folderPic1').style.borderRadius = "0px";
  document.getElementById('folderPic1').style.padding = "0px";

  document.getElementById('folderText4').style.background = 'none'
  document.getElementById('folderText4').style.textShadow = "none";
  document.getElementById('folderText4').style.borderRadius = "0px";
  document.getElementById('folderText4').style.padding = "0px";
  document.getElementById('folderText4').style.color = "black";

  document.getElementById('folderPic4').style.background = 'none'
  document.getElementById('folderPic4').style.borderRadius = "0px";
  document.getElementById('folderPic4').style.padding = "0px";

  document.getElementById('folderText5').style.background = 'none'
  document.getElementById('folderText5').style.textShadow = "none";
  document.getElementById('folderText5').style.borderRadius = "0px";
  document.getElementById('folderText5').style.padding = "0px";
  document.getElementById('folderText5').style.color = "black";

  document.getElementById('folderPic5').style.background = 'none'
  document.getElementById('folderPic5').style.borderRadius = "0px";
  document.getElementById('folderPic5').style.padding = "0px";

  document.getElementById('folderText6').style.background = 'none'
  document.getElementById('folderText6').style.textShadow = "none";
  document.getElementById('folderText6').style.borderRadius = "0px";
  document.getElementById('folderText6').style.padding = "0px";
  document.getElementById('folderText6').style.color = "black";

  document.getElementById('folderPic6').style.background = 'none'
  document.getElementById('folderPic6').style.borderRadius = "0px";
  document.getElementById('folderPic6').style.padding = "0px";
}

function highlightFolder4() {
  
  document.getElementById('folderText4').style.background = '#116cd6'
  document.getElementById('folderText4').style.textShadow = "none";
  document.getElementById('folderText4').style.borderRadius = "6px";
  document.getElementById('folderText4').style.padding = "2px";
  document.getElementById('folderText4').style.color = "white";

  document.getElementById('folderPic4').style.background = '#c9c9c9'
  document.getElementById('folderPic4').style.borderRadius = "5px";
  document.getElementById('folderPic4').style.padding = "3px";
  document.getElementById('folderPic4').className = "selected2";

  document.getElementById('folderText2').style.background = 'none'
  document.getElementById('folderText2').style.textShadow = "none";
  document.getElementById('folderText2').style.borderRadius = "0px";
  document.getElementById('folderText2').style.padding = "0px";
  document.getElementById('folderText2').style.color = "black";

  document.getElementById('folderPic2').style.background = 'none'
  document.getElementById('folderPic2').style.borderRadius = "0px";
  document.getElementById('folderPic2').style.padding = "0px";

  document.getElementById('folderText3').style.background = 'none'
  document.getElementById('folderText3').style.textShadow = "none";
  document.getElementById('folderText3').style.borderRadius = "0px";
  document.getElementById('folderText3').style.padding = "0px";
  document.getElementById('folderText3').style.color = "black";

  document.getElementById('folderPic3').style.background = 'none'
  document.getElementById('folderPic3').style.borderRadius = "0px";
  document.getElementById('folderPic3').style.padding = "0px";

  document.getElementById('folderText1').style.background = 'none'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "0px";
  document.getElementById('folderText1').style.padding = "0px";
  document.getElementById('folderText1').style.color = "black";

  document.getElementById('folderPic1').style.background = 'none'
  document.getElementById('folderPic1').style.borderRadius = "0px";
  document.getElementById('folderPic1').style.padding = "0px";

  document.getElementById('folderText5').style.background = 'none'
  document.getElementById('folderText5').style.textShadow = "none";
  document.getElementById('folderText5').style.borderRadius = "0px";
  document.getElementById('folderText5').style.padding = "0px";
  document.getElementById('folderText5').style.color = "black";

  document.getElementById('folderPic5').style.background = 'none'
  document.getElementById('folderPic5').style.borderRadius = "0px";
  document.getElementById('folderPic5').style.padding = "0px";

  document.getElementById('folderText6').style.background = 'none'
  document.getElementById('folderText6').style.textShadow = "none";
  document.getElementById('folderText6').style.borderRadius = "0px";
  document.getElementById('folderText6').style.padding = "0px";
  document.getElementById('folderText6').style.color = "black";

  document.getElementById('folderPic6').style.background = 'none'
  document.getElementById('folderPic6').style.borderRadius = "0px";
  document.getElementById('folderPic6').style.padding = "0px";
}

function highlightFolder5() {
  
  document.getElementById('folderText5').style.background = '#116cd6'
  document.getElementById('folderText5').style.textShadow = "none";
  document.getElementById('folderText5').style.borderRadius = "6px";
  document.getElementById('folderText5').style.padding = "2px";
  document.getElementById('folderText5').style.color = "white";

  document.getElementById('folderPic5').style.background = '#c9c9c9'
  document.getElementById('folderPic5').style.borderRadius = "5px";
  document.getElementById('folderPic5').style.padding = "3px";
  document.getElementById('folderPic5').className = "selected2";

  document.getElementById('folderText2').style.background = 'none'
  document.getElementById('folderText2').style.textShadow = "none";
  document.getElementById('folderText2').style.borderRadius = "0px";
  document.getElementById('folderText2').style.padding = "0px";
  document.getElementById('folderText2').style.color = "black";

  document.getElementById('folderPic2').style.background = 'none'
  document.getElementById('folderPic2').style.borderRadius = "0px";
  document.getElementById('folderPic2').style.padding = "0px";

  document.getElementById('folderText3').style.background = 'none'
  document.getElementById('folderText3').style.textShadow = "none";
  document.getElementById('folderText3').style.borderRadius = "0px";
  document.getElementById('folderText3').style.padding = "0px";
  document.getElementById('folderText3').style.color = "black";

  document.getElementById('folderPic3').style.background = 'none'
  document.getElementById('folderPic3').style.borderRadius = "0px";
  document.getElementById('folderPic3').style.padding = "0px";

  document.getElementById('folderText4').style.background = 'none'
  document.getElementById('folderText4').style.textShadow = "none";
  document.getElementById('folderText4').style.borderRadius = "0px";
  document.getElementById('folderText4').style.padding = "0px";
  document.getElementById('folderText4').style.color = "black";

  document.getElementById('folderPic4').style.background = 'none'
  document.getElementById('folderPic4').style.borderRadius = "0px";
  document.getElementById('folderPic4').style.padding = "0px";

  document.getElementById('folderText1').style.background = 'none'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "0px";
  document.getElementById('folderText1').style.padding = "0px";
  document.getElementById('folderText1').style.color = "black";

  document.getElementById('folderPic1').style.background = 'none'
  document.getElementById('folderPic1').style.borderRadius = "0px";
  document.getElementById('folderPic1').style.padding = "0px";

  document.getElementById('folderText6').style.background = 'none'
  document.getElementById('folderText6').style.textShadow = "none";
  document.getElementById('folderText6').style.borderRadius = "0px";
  document.getElementById('folderText6').style.padding = "0px";
  document.getElementById('folderText6').style.color = "black";

  document.getElementById('folderPic6').style.background = 'none'
  document.getElementById('folderPic6').style.borderRadius = "0px";
  document.getElementById('folderPic6').style.padding = "0px";
}

function highlightFolder6() {
  
  document.getElementById('folderText6').style.background = '#116cd6'
  document.getElementById('folderText6').style.textShadow = "none";
  document.getElementById('folderText6').style.borderRadius = "6px";
  document.getElementById('folderText6').style.padding = "2px";
  document.getElementById('folderText6').style.color = "white";

  document.getElementById('folderPic6').style.background = '#c9c9c9'
  document.getElementById('folderPic6').style.borderRadius = "5px";
  document.getElementById('folderPic6').style.padding = "3px";
  document.getElementById('folderPic6').className = "selected2";

  document.getElementById('folderText2').style.background = 'none'
  document.getElementById('folderText2').style.textShadow = "none";
  document.getElementById('folderText2').style.borderRadius = "0px";
  document.getElementById('folderText2').style.padding = "0px";
  document.getElementById('folderText2').style.color = "black";

  document.getElementById('folderPic2').style.background = 'none'
  document.getElementById('folderPic2').style.borderRadius = "0px";
  document.getElementById('folderPic2').style.padding = "0px";

  document.getElementById('folderText3').style.background = 'none'
  document.getElementById('folderText3').style.textShadow = "none";
  document.getElementById('folderText3').style.borderRadius = "0px";
  document.getElementById('folderText3').style.padding = "0px";
  document.getElementById('folderText3').style.color = "black";

  document.getElementById('folderPic3').style.background = 'none'
  document.getElementById('folderPic3').style.borderRadius = "0px";
  document.getElementById('folderPic3').style.padding = "0px";

  document.getElementById('folderText4').style.background = 'none'
  document.getElementById('folderText4').style.textShadow = "none";
  document.getElementById('folderText4').style.borderRadius = "0px";
  document.getElementById('folderText4').style.padding = "0px";
  document.getElementById('folderText4').style.color = "black";

  document.getElementById('folderPic4').style.background = 'none'
  document.getElementById('folderPic4').style.borderRadius = "0px";
  document.getElementById('folderPic4').style.padding = "0px";

  document.getElementById('folderText5').style.background = 'none'
  document.getElementById('folderText5').style.textShadow = "none";
  document.getElementById('folderText5').style.borderRadius = "0px";
  document.getElementById('folderText5').style.padding = "0px";
  document.getElementById('folderText5').style.color = "black";

  document.getElementById('folderPic5').style.background = 'none'
  document.getElementById('folderPic5').style.borderRadius = "0px";
  document.getElementById('folderPic5').style.padding = "0px";

  document.getElementById('folderText1').style.background = 'none'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "0px";
  document.getElementById('folderText1').style.padding = "0px";
  document.getElementById('folderText1').style.color = "black";

  document.getElementById('folderPic1').style.background = 'none'
  document.getElementById('folderPic1').style.borderRadius = "0px";
  document.getElementById('folderPic1').style.padding = "0px";
}

function closeFolders() {

    document.getElementById('folderText6').style.background = 'none'
  document.getElementById('folderText6').style.textShadow = "none";
  document.getElementById('folderText6').style.borderRadius = "0px";
  document.getElementById('folderText6').style.padding = "0px";
  document.getElementById('folderText6').style.color = "black";

  document.getElementById('folderPic6').style.background = 'none'
  document.getElementById('folderPic6').style.borderRadius = "0px";
  document.getElementById('folderPic6').style.padding = "0px";

  document.getElementById('folderText2').style.background = 'none'
  document.getElementById('folderText2').style.textShadow = "none";
  document.getElementById('folderText2').style.borderRadius = "0px";
  document.getElementById('folderText2').style.padding = "0px";
  document.getElementById('folderText2').style.color = "black";

  document.getElementById('folderPic2').style.background = 'none'
  document.getElementById('folderPic2').style.borderRadius = "0px";
  document.getElementById('folderPic2').style.padding = "0px";

  document.getElementById('folderText3').style.background = 'none'
  document.getElementById('folderText3').style.textShadow = "none";
  document.getElementById('folderText3').style.borderRadius = "0px";
  document.getElementById('folderText3').style.padding = "0px";
  document.getElementById('folderText3').style.color = "black";

  document.getElementById('folderPic3').style.background = 'none'
  document.getElementById('folderPic3').style.borderRadius = "0px";
  document.getElementById('folderPic3').style.padding = "0px";

  document.getElementById('folderText4').style.background = 'none'
  document.getElementById('folderText4').style.textShadow = "none";
  document.getElementById('folderText4').style.borderRadius = "0px";
  document.getElementById('folderText4').style.padding = "0px";
  document.getElementById('folderText4').style.color = "black";

  document.getElementById('folderPic4').style.background = 'none'
  document.getElementById('folderPic4').style.borderRadius = "0px";
  document.getElementById('folderPic4').style.padding = "0px";

  document.getElementById('folderText5').style.background = 'none'
  document.getElementById('folderText5').style.textShadow = "none";
  document.getElementById('folderText5').style.borderRadius = "0px";
  document.getElementById('folderText5').style.padding = "0px";
  document.getElementById('folderText5').style.color = "black";

  document.getElementById('folderPic5').style.background = 'none'
  document.getElementById('folderPic5').style.borderRadius = "0px";
  document.getElementById('folderPic5').style.padding = "0px";

  document.getElementById('folderText1').style.background = 'none'
  document.getElementById('folderText1').style.textShadow = "none";
  document.getElementById('folderText1').style.borderRadius = "0px";
  document.getElementById('folderText1').style.padding = "0px";
  document.getElementById('folderText1').style.color = "black";

  document.getElementById('folderPic1').style.background = 'none'
  document.getElementById('folderPic1').style.borderRadius = "0px";
  document.getElementById('folderPic1').style.padding = "0px";

}