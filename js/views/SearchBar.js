$(function () {
    var app = window.app || {};


    //define individual contact view
    var SeachBar = Backbone.View.extend({
        el: $("#searchPanel"),

        initialize: function () {
            this.$input = this.$('input');
        },

        events: {
            "keypress input": "search"
        },

        search: function(e){

            if ( e.keyCode == 13 ) {
                console.log("sdfgasdg");
                return;
            }

            //app.Todos.create( this.newAttributes() );
            //this.$input.val('');

        }

        /*tagName: "article",
        className: "contact-container",
        template: $("#contactTemplate").html(),*/

    });


    //create instance of master view
    var seachBar = new SeachBar();

});

