(function ($) {
    var app = window.app || {};
    console.log(app);
    app = (function () {

        var api = {
            views: {},
            models: {},
            collections: {},
            content: null,
            router: null,
            todos: null,
            init: function () {
                this.content = $("#content");
            },
            changeContent: function (el) {
                this.content.empty().append(el);
                return this;
            },
            title: function (str) {
                $("h1").text(str);
                return this;
            }
        };
        var ViewsFactory = {};
        var Router = Backbone.Router.extend({});
        api.router = new Router();

        return api;

    })();




    //define product model
    var Contact = Backbone.Model.extend({
        defaults: {
            photo: "img/placeholder.png"
        }
    });

    //define directory collection
    var Directory = Backbone.Collection.extend({
        model: Contact
    });

    //define individual contact view
    var ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#contactTemplate").html(),

        render: function () {
            var tmpl = _.template(this.template);

            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
    var DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = new Contact(contacts);
            this.render();
        },

        render: function () {
            var that = this;
            console.log(this.collection);
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

    //create instance of master view
    var directory = new DirectoryView();

})(jQuery);
