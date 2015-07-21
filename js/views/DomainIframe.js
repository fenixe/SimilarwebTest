define([
    'models/DomainModel',
    'views/ErrorMessage'
], function (domainModel, showError) {

    //define domain iframe view
    var DomainIframe = Backbone.View.extend({
        el: $('#domain-iframe'),
        model: domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:Domain', this.setIframe, this);
        },

        setIframe: function (model, url) {
            var mainContent = $('#main-content'),
                domainIframe = this.$el,
                collClass = 'col-xs-12 col-sm-6 col-md-6 col-lg-6',
                toLoad = 'http://' + url + '/';

            if (domainIframe.is(':hidden')) {
                mainContent.addClass(collClass);
                domainIframe.addClass(collClass);
                domainIframe.show();
            }

            // create iframe for page preview
            var frame = $('<iframe class="iframe" ' +
                'scrolling="auto" frameborder="0" >' +
                '</iframe>');

            // create loader
            var loader = $('<div class="loader"></div>');

            //create a message, for show if the preview is not possible
            var corruptedMessage = $('<div id="corrupted-info">Sorry, preview forbidden by the rightholder</div>');

            domainIframe.empty().append(message, loader, frame);

            frame.src(toLoad, function (duration) {
                var content = 0;

                loader.fadeOut();

                try {
                    content = frame.contents().length;
                } catch (ex) {
                }

                if (!content) {
                    corruptedMessage.show();
                }
            }, {
                timeout: function () {
                    loader.fadeOut();
                    showError("Problems on page load", 3000)
                },
                timeoutDuration: 5000
            });

        }
    });

    //return object of domain iframe
    return new DomainIframe();
});

