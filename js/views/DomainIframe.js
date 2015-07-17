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
                collClass = 'col-xs-12 col-sm-6 col-md-6 col-lg-6 ',
                toLoad = 'resource/site_content.php?url=' + url;

            if (domainIframe.is(':hidden')) {
                mainContent.addClass(collClass);
                domainIframe.addClass(collClass);
                domainIframe.show();
            }

            // create iframe for page preview
            var frame = $('<iframe class="iframe" ' +
                'scrolling="auto" seamless frameborder="0"  >' +
                '</iframe>');

            var loader = $('<div class="loader"></div>');

            domainIframe.empty().append(frame, loader);

            frame.src(toLoad, function (duration) {
                $(loader).detach();
            }, {
                timeout: function () {
                    $(loader).detach();
                    showError("Problems on page load", 3000)
                },
                timeoutDuration: 10000
            });
        }
    });

    //return object of domain iframe
    return new DomainIframe();
});

