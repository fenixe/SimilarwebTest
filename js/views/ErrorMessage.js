$(function () {
    var app = window.app || {};

    app.showError = function (el, message, timeout) {
        var errorMessage = $('#error');

        if (errorMessage.length) {
            errorMessage.remove();
        }

        errorMessage = $('<div id="error" class="alert alert-danger" role="alert"></div>');

        errorMessage.html(message);
        $(el).append(errorMessage);

        errorMessage.fadeOut(timeout, function () {
            $(this).remove();
        });
    };
});