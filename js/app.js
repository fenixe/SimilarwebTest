define([
    'backbone'
], function (Backbone) {

    // define application
    var Application = (function () {

        var app = {
            views: {},
            models: {},

            init: function () {
                require([
                    'views/SearchPanel',
                    'views/DomainContent',
                    'views/SimilarSitesContent',
                    'views/DomainIframe',
                    'views/ErrorMessage'
                ], this.initView);
                require([
                    'models/DomainModel'
                ], this.initModel);
            },

            initModel: function (model) {
                app.models.domainModel = model;

            },

            initView: function (searchPanel, domainContent, similarContent, domainIframe, showError) {
                app.views.searchPanel = searchPanel;
                app.views.domainContent = domainContent;
                app.views.similarContent = similarContent;
                app.views.domainIframe = domainIframe;
                app.views.showError = showError;
            }
        };

        return app;
    });

    return Application();
});
