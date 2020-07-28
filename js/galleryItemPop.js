//gallery pop-up
$(document).on('click', '.gItem', function () {
    $('#wrapBlack').fadeToggle("slow", "linear");
    setTimeout(function () {
        $('.moveBtn').fadeToggle("500", "linear");
        $('#gItemPop').fadeToggle("500", "linear");
    }, 500);
});

$(document).on('click', '.gPopCloseBtn,#wrapBlack', function () {
    $('#gItemPop').fadeToggle("500", "linear");
    setTimeout(function () {
        $('.moveBtn').fadeToggle("500", "linear");
        $('#wrapBlack').fadeToggle("500", "linear");
    }, 500);
});