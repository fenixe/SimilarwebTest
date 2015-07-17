/**
 * initiation RequireJs params
 */

require = {
    baseUrl: 'js/',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        jqueryIframe: 'library/jquery.iframe',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.0/backbone-min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },

        'jqueryIframe': {
            deps: ['jquery']
        },

        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    deps: ['backbone', 'jqueryIframe']
};