var windowWidth = window.innerWidth;
//クリックで画面を切り替える関数-----------------------------------------------------------
function movedBtn() {
    $('.mainContent').css('opacity', '0.0');
    $('.moveBtn').css('animation-name', 'noneAnim');
    setTimeout(function () {
        $("." + clickedMoveBtn).removeClass(
            'activeBeforeHome activeAfterHome activeAfterAbout activeBeforeGallery');
        $("." + clickedMoveBtnNot).removeClass(
            'activeBeforeHome activeAfterHome activeAfterAbout activeBeforeGallery');
        $("." + clickedMoveBtnNot).addClass(movedAddClass);
        //レスポンシブで垂直移動、平行移動を切り替え
        if (windowWidth >= 500) {
            console.log('maxover');
            $('#contentWrapper').css('position', 'absolute').css('left', moveLeft);
        } else {
            console.log('max500');
            $('#contentWrapper').css('position', 'absolute').css('top', moveTop);
        }
        $('#' + moveToClass).css('overflow-y', 'scroll');
        setTimeout(function () {
            $('html,body').scrollTop(0);
            $('.mainContent').css('opacity', '1.0');
            $('#mainHeader').css('position', 'fixed').css('left', headerLeft);
            $("." + clickedMoveBtnNot).css('animation-name', 'moveBtnAnim');
        }, 1000);
    }, 1000);
};

//クリックで画面を切り替える関数　ホーム ---------------------------------------
function movedCenterBtn() {
    $("#mainAbout,#mainGallery").animate({
        scrollTop: 0
    }, "slow");
    $('.mainContent').css('opacity', '0.0');
    $('#mainAbout, #mainGallery').css('overflow-y', 'hidden');
    $('#mainHeader').css('position', 'absolute').css('top', '0').css('left', '0');
    $('.moveBtn').css('animation-name', 'noneAnim');
    setTimeout(function () {
        $('.moveBefore, .moveAfter').removeClass(
            'activeBeforeHome activeAfterHome activeAfterAbout activeBeforeGallery');
        $('.moveBefore').addClass('activeBeforeHome');
        $('.moveAfter').addClass('activeAfterHome');
        //レスポンシブで垂直移動、平行移動を切り替え
        if (windowWidth >= 500) {
            console.log('maxover');
            $('#contentWrapper').css('position', 'absolute').css('left',
                '-100vw');
        } else {
            console.log('max500');
            $('#contentWrapper').css('position', 'absolute').css('top',
                '-100vh');
        }
        // 1000ms
        setTimeout(function () {
            $('.mainContent').css('opacity', '1.0');
            $('.moveBefore').css('animation-name', 'moveBtnAnim');
            $('.moveAfter').css('animation-name', 'moveBtnAnim');
        }, 1000);
    }, 1000);
};

// active Home ------------------------------------------------------
$(document).on('click', '.activeBeforeHome', function () {
    moveToClass = 'mainAbout';
    clickedMoveBtn = 'moveBefore';
    clickedMoveBtnNot = 'moveAfter';
    movedAddClass = 'activeAfterAbout';
    moveLeft = '0';
    moveTop = '0vh';
    headerLeft = '0vw';
    movedBtn();
});

$(document).on('click', '.activeAfterHome', function () {
    moveToClass = 'mainGallery';
    clickedMoveBtn = 'moveAfter';
    clickedMoveBtnNot = 'moveBefore';
    movedAddClass = 'activeBeforeGallery';
    moveLeft = '-200vw';
    moveTop = '-200vh';
    headerLeft = '-200vw';
    movedBtn();
});
// active About----------------------------------------------------------
$(document).on('click', '.activeAfterAbout', function () {
    movedCenterBtn();
});
// active Gallery--------------------------------------------------------
$(document).on('click', '.activeBeforeGallery', function () {
    movedCenterBtn();
});