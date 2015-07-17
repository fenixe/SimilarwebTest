define([
    'app',
    'views/ErrorMessage'
], function (app, showError) {

    //define class of domain content model
    var DomainModel = Backbone.Model.extend({
        url: '//api.similarweb.com/site/{domain}/rankoverview',

        initialize: function () {
            this.userkey = '8124610b6f24fb784f676b65b1f0ac19';
        },

        reset: function (attrs, options) {
            for (var key in this.attributes) {
                if (key in attrs) continue;
                attrs[key] = undefined;
            }
            return this.set(attrs, options);
        },

        send: function (domain) {  // method for get domain info
            var regExp = "{domain}";

            return this.fetch({
                dataType: 'json',
                type: 'GET',
                url: this.url.replace(regExp, domain),
                data: {
                    userkey: this.userkey,
                    format: 'json'
                },
                success: function (model, data) {           // set value Domain in model for call model event
                    model.set({"Domain": domain});
                },
                error: function (model, data) {             // if "error" clean all content
                    var view = app.views,
                        domCont = view.domainContent.el,
                        simCont = view.similarContent.el,
                        domIframe = view.domainIframe.el;

                    $("#main-content").removeClass();

                    model.reset({}, {silent: true});        // reset models data by defaults

                    $(domCont).empty();
                    $(simCont).find('ul').empty();
                    $(simCont).hide();
                    $(domIframe).empty();

                    $('#first-info').show();
                    showError("An error occurred when data loading", 3500);
                }
            });
        }
    });

    //return class of domain content model
    return new DomainModel();
});
