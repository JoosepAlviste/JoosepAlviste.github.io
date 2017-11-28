var modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'escape'],
})

var registerImgClickListeners = function () {
    var $imgs = document.querySelectorAll('img[src]');

    $imgs.forEach(function ($img) {
        $img.addEventListener('click', function (e) {
            var $elem = e.target;
            var imgUrl = $elem.getAttribute('src');

            openModal(imgUrl);
        });
    });
}

var openModal = function (imgUrl) {
    modal.setContent('<img src="' + imgUrl + '"/>');

    setTimeout(function () {
        modal.open();

        modal.checkOverflow();

        document.querySelector('.tingle-modal').scrollTop = 0;
    }, 100);
}

window.onload = function () {
    registerImgClickListeners();
}
