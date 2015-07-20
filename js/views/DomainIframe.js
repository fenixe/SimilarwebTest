define([
    'models/DomainModel',
    'views/ErrorMessage'
], function (domainModel, showError) {

    //define domain iframe view
    var DomainIframe = Backbone.View.extend({
        el: $('#domain-iframe'),
        model: domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:Domain', this.setIframe, this);
        },

        setIframe: function (model, url) {
            var mainContent = $('#main-content'),
                domainIframe = this.$el,
                collClass = 'col-xs-12 col-sm-6 col-md-6 col-lg-6 ',
                toLoad = 'http://' + url;

            if (domainIframe.is(':hidden')) {
                mainContent.addClass(collClass);
                domainIframe.addClass(collClass);
                domainIframe.show();
            }

            // create iframe for page preview
            var frame = $('<iframe class="iframe" ' +
                'scrolling="auto" seamless frameborder="0"  >' +
                '</iframe>');

            var loader = $('<div class="loader"></div>');

            domainIframe.empty().append(frame, loader);

            //var iframe = document.getElementsByTagName('iframe')[0];

            var getData = function (data) {
                if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status == 200) loadHTML(data.query.results);
                else if (data && data.error && data.error.description) loadHTML(data.error.description);
                else loadHTML('Error: Cannot load ' + url);
            };
            var loadURL = function (src) {
                console.log(url);
                url = src;
                var script = document.createElement('script');
                //script.src = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22' + encodeURIComponent(url) + '%22&format=json';
                script.src = "";
                //domainIframe.empty().append(script);
                document.body.appendChild(script);
            };
            var loadHTML = function (html) {
                //iframe.src = 'about:blank';
                //iframe.contentWindow.document.open();
                frame.html(html);
                //iframe.contentWindow.document.close();
            }

            var el = '<!DOCTYPE html> ' +
                '<html lang="en">' +
                '<head>' +
                '<meta charset="UTF-8">' +
                '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
                '</head>';

            $.ajax({
                url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Febay.com%2F'",
                dataType: "xml",


                success: function (data) {
                    console.log($(data).find("body")[0].outerHTML);
                    frame.squirt("a <em>little</em> content");
                }
            });

            //loadURL(iframe.src);


/*
            frame.src("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Febay.com%2F'", function (duration) {
                console.log(arguments);
                $(loader).fadeOut();
            }, {
                timeout: function () {
                    $(loader).detach();
                    showError("Problems on page load", 3000)
                },
                timeoutDuration: 10000
            });*/
        }
    });

    //return object of domain iframe
    return new DomainIframe();
});

