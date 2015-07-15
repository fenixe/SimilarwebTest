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
            var ENTER_KEY = 13;
            var searchText = this.$input.val().trim();

            if (evt.which !== ENTER_KEY || !searchText) {
                return;
            }
            this.model.send(searchText);
        }
    });

    //create instance of search panel view
    app.searchPanel = new SearchPanel();
});

