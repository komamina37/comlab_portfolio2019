function gItemChanged() {
    $('.gItemTitle').html(gItemTitle);
    $('.gItemMainImg').attr('src', 'img/img_web/img_web_main/img_web_main' + gItemNum + '@2x.png')
    $('.gImgSub').attr('src', 'img/img_web/img_web_sub/img_web_sub' + gItemNum + '@2x.png')
    $('.gPopDate').html(gPopDate);
    $('.gPopSkill').html(gPopSkill);
    $('.gPopReason').html(gPopReason);
    $('.gPopConcept').html(gPopConcept);
};

//gallery changedContent
$(function () {
    $(document).on('click', '.gItem', function () {
        console.log($(this).attr("class"));
        if ($(this).hasClass('gItem0')) {
            gItemNum = 0;
            gItemTitle = '';
            gPopDate = '';
            gPopSkill = '';
            gPopReason = '';
            gPopConcept = '';
            gItemChanged();
        } else if ($(this).hasClass('gItem1')) {
            gItemNum = 1;
            gItemTitle = 'アトリエモクロー';
            gPopDate = '2018 / 04 -';
            gPopSkill = 'HTML5 / CSS3 / Adobe Illustrator';
            gPopReason = "大学1年の演習内で作成したWEBページです。<br>ポケットモンスターというコンテンツに登場するうちの「モクロー」というポケモンに焦点を当てて制作したキャラクターサイトです。";
            gPopConcept = '大学1年の演習内で作成したWEBページです。<br>ポケットモンスターというコンテンツに登場するうちの「モクロー」というポケモンに焦点を当てて制作したキャラクターサイトです。';
            gItemChanged();
        } else if ($(this).hasClass('gItem2')) {
            gItemNum = 2;
            gItemTitle = '季織亭';
            gPopDate = '';
            gPopSkill = '';
            gPopReason = '';
            gPopConcept = '';
            gItemChanged();
        } else if ($(this).hasClass('gItem3')) {
            gItemNum = 2;
            gItemTitle = '季織亭';
            gPopDate = '';
            gPopSkill = '';
            gPopReason = '';
            gPopConcept = '';
            gItemChanged();
        } else if ($(this).hasClass('gItem2')) {
            gItemNum = 2;
            gItemTitle = '季織亭';
            gPopDate = '';
            gPopSkill = '';
            gPopReason = '';
            gPopConcept = '';
            gItemChanged();
        }
    });
});