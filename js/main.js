
$(function() {

/*
    setTimeout(function() {
        $(".wrapper").hide('blind', {}, 16000)
    }, 160000);
*/
	var video = document.getElementById('vid1');

	video.addEventListener('loadeddata', function() {
  		console.log("loaded vid");
  		setTimeout(function() {
        	$("#vid1").hide('blind', {}, 21300)
    	}, 213000);
	}, false);

    setTimeout(function() {
        $("#cath").hide('blind', {}, 475)
    }, 4750);


});

//document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);



function touchmove(e) {
    e.preventDefault()
}


//hide video after it runs
//