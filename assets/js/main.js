var copyText = function (text) {
    var textArea = document.createElement('textarea');

    // Make the text area as invisible as possible, avoiding flash rendering
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    var message;
    try {
        var successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        return successful;
    } catch (err) {
        message = 'Unable to copy';

        return false;
    }
}

var onCopyButtonClick = function (e) {
    var $clickTargetNode = e.currentTarget;
    var target = $clickTargetNode.dataset.target;
    var $target = document.querySelector(target);
    var text = $target.innerText;

    if (copyText(text)) {
        var $notificationElement = document.createElement('span');
        $notificationElement.classList.add('popover-notification');
        $notificationElement.textContent = 'Copied!';

        $clickTargetNode.parentNode.insertBefore($notificationElement, $clickTargetNode.nextSibling);

        setTimeout(function () {
            $notificationElement.remove();
        }, 500);
    } else {

    }
}

var registerCopyButtonListeners = function () {
    var $copyButtons = document.querySelectorAll('.js-copy-button');
    $copyButtons.forEach(function ($button) {
        $button.addEventListener('click', onCopyButtonClick);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    registerCopyButtonListeners();
});
