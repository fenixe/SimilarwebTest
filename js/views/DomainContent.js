define([
    'jquery',
    'backbone',
    'models/DomainModel'
], function ($, Backbone, domainModel) {

    //define domain content view
    var DomainContent = Backbone.View.extend({
        el: $('#domain-content'),
        contentTpl: _.template($('#domain-content-tpl').html()),
        model: domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:Domain', this.setDomainInfo, this);
        },

        setDomainInfo: function () {
            $('#first-info').hide();   // hide first information block
            $(this.el).html(this.contentTpl(this.model.toJSON()));
        }
    });

    //return class of domain content view
    return new DomainContent();
});

