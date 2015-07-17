define([
    'models/DomainModel'
], function (domainModel) {

    // define similar sites button view
    var SimilarSitesButton = Backbone.View.extend({
        tagName: "li",
        className: "col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-4",
        template: _.template($("#similar-btn-tpl").html()),

        events: {
            'click button': 'linkToDomain'
        },

        linkToDomain: function () {
            domainModel.send(this.model['Url']);
        },

        render: function () {
            this.$el.html(this.template(this.model));
            return this;
        }
    });

    //define domain content view
    var SimilarSitesContent = Backbone.View.extend({
        el: $('#similar-sites'),
        model: domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:SimilarSites', this.setSimilarSites, this);
        },

        setSimilarSites: function (model, data) {
            var me = this,
                buttons = [],
                similarSitesContent = me.$el,
                similarSitesData = model.get('SimilarSites');

            if (similarSitesContent.is(':hidden')) {
                similarSitesContent.show();
            }

            _.each(similarSitesData, function (item) {
                buttons.push(me.renderSiteButton(item));
            }, this);

            similarSitesContent.find('ul').empty().append(buttons);
        },

        renderSiteButton: function (item) {
            var sitesButton = new SimilarSitesButton({
                model: item
            });

            return sitesButton.render().el;
        }
    });

    //return object of domain content view
    return new SimilarSitesContent();
});

