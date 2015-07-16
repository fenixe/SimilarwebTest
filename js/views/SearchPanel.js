define([
    'jquery',
    'backbone',
    'models/DomainModel',
    'views/ErrorMessage'
], function ($, Backbone, domainModel, showError) {

    //define search panel view
    var SearchPanel = Backbone.View.extend({
        el: $('#search-panel'),
        model: domainModel,

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

            this.model.send( 'ebay.com'/*searchDomain*/); //check auctions.overstock.com

            if (evt.which !== ENTER_KEY || !searchDomain) {
                return;
            }



            if (pattern.test(searchDomain)) {
                $(this.el).removeClass('has-error');
            } else {
                $(this.el).addClass('has-error');
                showError(this.el, "You entered incorrect domain", 2500);
            }
        }
    });

    //return class of search panel view
    return new SearchPanel();
});

