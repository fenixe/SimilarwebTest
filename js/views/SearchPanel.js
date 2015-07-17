define([
    'models/DomainModel',
    'views/ErrorMessage'
], function (domainModel, showError) {

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
                searchPanel = this.$el,
                searchDomain = this.$input.val().trim(),
                domainPattern = /^[a-z0-9-\.]+\.[a-z]{2,4}/;

            if (evt.which !== ENTER_KEY || !searchDomain) {
                return;
            }

            if (domainPattern.test(searchDomain)) {
                searchPanel.removeClass('has-error');
                this.model.send( searchDomain);
            } else {
                searchPanel.addClass('has-error');
                showError("You entered incorrect domain", 2500);
            }
        }
    });

    //return object of search panel view
    return new SearchPanel();
});

