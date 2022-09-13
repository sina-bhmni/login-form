$(document).ready(function() {
    $('.password').click(function() {
        if ($(this).attr('type') == 'text') {
            $('.password').attr('type', 'password')
        } else {
            $('.password').attr('type', 'text')
        }
    });

});