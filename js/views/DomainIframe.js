$(function () {
    var app = window.app || {};

    //define domain content view
    var DomainIframe = Backbone.View.extend({
        el: $('#domain-iframe'),
        //contentTpl: _.template($('#domain-content-tpl').html()),
        model: app.domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:Domain', this.setIframe, this);
        },

        setIframe: function (model, url) {
            var mainContent = $('#main-content'),
                domainIframe = $('#domain-iframe'),
                collumCss = 'col-xs-12 col-sm-6 col-md-6 col-lg-6';

            mainContent.addClass(collumCss);
            domainIframe.addClass(collumCss);

            var selector_document = this;
            var e = $('<iframe class="iframe"  seamless frameborder="0" src="http://' + 'backbonejs.org/index.php' + '"></iframe>');

            $(this.el).append(e);

            console.log(e[0]);
            //console.log(e[0].contentWindow.document);
            $(e).load(function () {

                var x = $(selector, e[0].contentWindow.document);

                if (callback) {
                    callback(x);
                } else if (without_selector_document != true) {
                    $(selector_document).html($(x).html());
                }
            });

            //$(this.el).html(this.contentTpl(this.model.toJSON()));
        }
    });

    //create instance of domain content view
    app.domainIframe = new DomainIframe();
});

