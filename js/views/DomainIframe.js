define([
    'jquery',
    'backbone',
    'models/DomainModel',
    'jqueryXDomain', 'jqueryYQL'
], function ($, Backbone, domainModel) {

    //define domain iframe view
    var DomainIframe = Backbone.View.extend({
        el: $('#domain-iframe'),
        model: domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:Domain', this.setIframe, this);
        },

        setIframe: function (model, url) {
            var mainContent = $('#main-content'),
                domainIframe = $('#domain-iframe'),
                collClass = 'col-xs-12 col-sm-6 col-md-6 col-lg-6';

            mainContent.addClass(collClass);
            domainIframe.addClass(collClass);

            var e = $('<iframe class="iframe"  seamless frameborder="0" src="http://' + url +'/"></iframe>');

            //console.log(e);

            //var url = url.replace("watch?v=", "v/");

            //window.location.replace('http://' + url +'/');

            //$(this.el).append(e);

               /* $.ajax('http://snipplr.com/all/language/jquery', function(res) { // получение html-кода этого сайта $(res.responseText).find('.snippets li h3').each(function() { // циклически вырезаются все H3 заголовки var anchor = $(this).children('a:last'); // получение последней ссылки внутри текста

                    $('<li/>', { // создаем LI
                        html: $('<a/>', { // с A внутри
                            href: 'http://snipplr.com' + anchor.attr('href'), // указываем href для ссылки
                            text: anchor.text() // и текст
                        })
                    }).appendTo($('#jquery_snippets')); // добавляем к списку
                });*/


            $.queryYQL("select * from feed where url='http://mysite.ru/?format=xml'", function (data) {
                console.log(data);
                var ul = $("<ul/>");

                $.each(data.query.results.item, function () {
                    $("<li/>").append(this.title).appendTo(ul);
                });

                ul.appendTo($("#domain-iframe"));
            });


            /*$.ajax({
                url: 'http://mysite.ru/',
                xhrFields: {
                    withCredentials: true
                },
                beforeSend: function (xhr) {
                    console.log(xhr);
                    console.log(xhr.overrideMimeType);
                    xhr.overrideMimeType("text/plain; charset=x-user-defined");
                },
                success: function (html) {
                    console.log(html);
                    //$("#results").append(html);
                }
            });*/

            /*console.log(e[0]);
             //console.log(e[0].contentWindow.document);
             $(e).load(function () {

             var x = $(selector, e[0].contentWindow.document);

             if (callback) {
             callback(x);
             } else if (without_selector_document != true) {
             $(selector_document).html($(x).html());
             }
             });*/

            //$(this.el).html(this.contentTpl(this.model.toJSON()));
        }
    });

//return class of domain iframe
    return new DomainIframe();
})
;

