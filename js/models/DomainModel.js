var app = window.app || {};
$(function () {

    var DomainModel = Backbone.Model.extend({
        url: '//api.similarweb.com/site/{domain}/rankoverview',
        initialize: function () {
            this.userkey = '8124610b6f24fb784f676b65b1f0ac19';
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
                success: function (model, data) {       // set value Domain in model for call model event
                    model.set({"Domain": domain});
                },
                error: function (model, data) {            // if "error" clean all content
                    var domCont = app.domainContent.el,
                        simCont = app.similarContent.el,
                        searchCont = app.searchPanel.el,
                        domIframe = app.domainIframe.el;

                    $("#main-content").removeClass();
                    model.set([], {silent: true});

                    $(domCont).empty();
                    $(simCont).empty();
                    $(domIframe).empty();

                    $('#first-info').show();
                    app.showError(searchCont, "An error occurred when data loading", 3500);
                }
            });
        }
    });

    app.domainModel = new DomainModel;

});
