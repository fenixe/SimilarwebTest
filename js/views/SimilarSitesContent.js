$(function () {
    var app = window.app || {};

    var SimilarSitesButton = Backbone.View.extend({
        tagName: "li",
        className: "col-xs-12 col-sm-6 col-md-4 col-lg-4 col-lg-4",
        template: _.template($("#similar-btn-tpl").html()),

        events: {
            'click button': 'linkToDomain'
        },

        linkToDomain: function () {
            app.domainModel.send(this.model['Url']);
        },

        render: function () {
            this.$el.html(this.template(this.model));
            return this;
        }
    });

    //define domain content view
    var SimilarSitesContent = Backbone.View.extend({
        el: $('#similar-sites-btn'),
        model: app.domainModel,

        initialize: function () {
            this.$el.hide();
            this.listenTo(this.model, 'change:SimilarSites', this.setSimilarSites, this);
        },

        setSimilarSites: function (model, data) {
            var me = this;
            var similarSites = model.get('SimilarSites');

            if (me.$el.is(':hidden')) {
                this.$el.show();
            } else {
                this.$el.find('ul').empty();
            }

            _.each(similarSites, function (item) {
                me.renderSiteButton(item);
            }, this);
        },

        renderSiteButton: function (item) {
            var sitesButton = new SimilarSitesButton({
                model: item
            });
            $(this.$el).find('ul').append(sitesButton.render().el);
        }
    });

    //create instance of domain content view
    app.similarContent = new SimilarSitesContent();
});

