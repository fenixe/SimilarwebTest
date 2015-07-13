var Domain = Backbone.Model.extend({
    defaults: {
        photo: "/img/placeholder.png"
    }

});

var RequestDomain = Backbone.View.extend({
    tagName: "article",
    className: "requestDomainContainer",
    template: $("#requestDomainTemplate").html(),

    render: function () {
        var tmpl = _.template(this.template);

        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});


var Directory = Backbone.Collection.extend({
        model: Domain
});


var DirectoryView = Backbone.View.extend({
    el: $("#request-domain-container"),

    initialize: function () {
        this.collection = new Directory(domain);
        this.render();
    },

    render: function () {
        var that = this;
        _.each(this.collection.models, function (item) {
            that.renderContact(item);
        }, this);
    },

    renderContact: function (item) {
        var contactView = new ContactView({
            model: item
        });
        this.$el.append(contactView.render().el);
    }
});

var directory = new DirectoryView();
