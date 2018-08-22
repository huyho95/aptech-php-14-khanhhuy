$(document).ready(function () {
    $('#js-on').hide();
    $('button').click(function (){
        if($('#js-off').toggle()){
            $('#js-on').toggle();
        } else {
            $('#js-off').toggle();
        }
    });
});