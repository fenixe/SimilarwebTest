require = {
    baseUrl: 'js/',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        jqueryXDomain: 'library/jquery.xdomainajax',
        jqueryYQL: 'library/jquery.query-yql.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.0/backbone-min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },

        'jqueryXDomain': {
            deps: ['jquery']
        },

        'jqueryYQL': {
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
    deps: ['backbone']
};