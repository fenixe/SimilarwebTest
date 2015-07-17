define([
    'models/DomainModel'
], function (domainModel) {

    //define domain content view
    var DomainContent = Backbone.View.extend({
        el: $('#domain-content'),
        contentTpl: _.template($('#domain-content-tpl').html()),
        model: domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:Domain', this.setDomainInfo, this);
        },

        setDomainInfo: function () {
            $('#help-info').hide();   // hide first information block
            $(this.el).html(this.contentTpl(this.model.toJSON()));
        }
    });

    //return object of domain content view
    return new DomainContent();
});

