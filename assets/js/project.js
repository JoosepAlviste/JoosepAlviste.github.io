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
            var altText = $elem.getAttribute('alt');

            openModal(imgUrl, altText);
        });
    });
}

var openModal = function (imgUrl, alt) {
    modal.setContent('<img src="' + imgUrl + '"/><p>' + alt + '</p>');

    setTimeout(function () {
        modal.open();

        modal.checkOverflow();

        document.querySelector('.tingle-modal').scrollTop = 0;
    }, 100);
}

var registerModalClickListeners = function () {
    var $modal = document.querySelector('.tingle-modal');

    $modal.addEventListener('click', function (e) {
        modal.close();
    });
}

window.onload = function () {
    registerImgClickListeners();
    registerModalClickListeners();
}
