$(function() {

    setTimeout(function() {
        $(".wrapper").hide('blind', {}, 16000)
    }, 160000);

    setTimeout(function() {
        $("#cath").hide('blind', {}, 479)
    }, 4790);
});

//document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);



function touchmove(e) {
    e.preventDefault()
}