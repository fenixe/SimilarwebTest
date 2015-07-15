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
                success: function (model, data) {
                    model.set({"Domain": domain});
                }
            });
        }
    });

    app.domainModel = new DomainModel;

});
