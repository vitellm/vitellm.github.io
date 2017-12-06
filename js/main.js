$(function() {

    setTimeout(function() {
        $(".wrapper").hide('blind', {}, 11000)
    }, 110000);

    setTimeout(function() {
        $("#cath").hide('blind', {}, 290)
    }, 2900);
});

//document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);



function touchmove(e) {
    e.preventDefault()
}