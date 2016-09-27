function selectPic(target) {
		document.getElementsByClassName('m-active')[0].className = "";
	    document.getElementsByClassName('p-active')[0].className = "p-inactive";
	    var x = target.concat("-close");

	    document.getElementById(target).className = 'm-active';
	    document.getElementById(x).className = 'p-active';
	    document.getElementById("currentPic").src="./images/" + target + ".jpg";



}
