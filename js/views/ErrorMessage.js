define(['app'], function (app) {

    /**
     * function for show error notification
     * @param message
     * @param timeout
     */
    var showError = function (message, timeout) {
        var errorMessage = $('#error'),
            searchPanel = app.views.searchPanel.$el;

        if (errorMessage.length) {
            errorMessage.remove();
        }

        errorMessage = $('<div id="error" class="alert alert-danger" role="alert"></div>');

        errorMessage.html(message);
        searchPanel.append(errorMessage);

        errorMessage.fadeOut(timeout, function () {
            $(this).remove();
        });
    };

    return showError;
});