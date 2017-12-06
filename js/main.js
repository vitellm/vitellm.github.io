$(function() {

    setTimeout(function() {
        $(".wrapper").hide('blind', {}, 14000)
    }, 140000);

    setTimeout(function() {
        $("#cath").hide('blind', {}, 490)
    }, 4900);
});

//document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);



function touchmove(e) {
    e.preventDefault()
}