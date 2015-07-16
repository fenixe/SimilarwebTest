$(function () {
    var app = window.app || {};

    //define search panel view
    var SearchPanel = Backbone.View.extend({
        el: $('#search-panel'),
        model: app.domainModel,

        initialize: function () {
            this.$input = this.$('input');
        },

        events: {
            'keypress input': 'searchDomain'
        },

        searchDomain: function (evt) {
            var ENTER_KEY = 13,
                searchDomain = this.$input.val().trim(),
                pattern = /^[a-z0-9-\.]+\.[a-z]{2,4}/;

            if (evt.which !== ENTER_KEY || !searchDomain) {
                return;
            }

            if (pattern.test(searchDomain)) {
                $(this.el).removeClass('has-error');
                this.model.send(searchDomain); //check auctions.overstock.com
            } else {
                $(this.el).addClass('has-error');
                app.showError(this.el, "You entered incorrect domain", 2500);
            }
        }
    });

    //create instance of search panel view
    app.searchPanel = new SearchPanel();
});

