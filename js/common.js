$(window).load(function () {
    $("content").each(function (index, item) {
        $(this).hide();
    });
    clickMenu(0);
});

function clickMenu(idx) {
    $("content").each(function (index, item) {
        if (index == idx) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}