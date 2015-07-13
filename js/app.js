(function ($) {

    //demo data
    var contacts = {
        "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebay.com&t=2&s=0&h=10201409454775654588",
        "Title": "Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay",
        "GlobalRank": 31,
        "Country": 840,
        "CountryRank": 9,
        "Category": "Shopping",
        "CategoryRank": 3,
        "LastAvgTrafficReach": 0.00596716419220375,
        "TrafficReach": [0.008185732681502484, 0.0078059226110963244, 0.0076582943548204746, 0.0075399825281004, 0.0074619453887051369, 0.0075311489105763631, 0.0072751983251901657, 0.0070419548449590572, 0.0072076457674832657, 0.0071634111980561719, 0.00697405407391605, 0.0070281587334193761, 0.0070897036199225136, 0.00664124330196665, 0.0062883737442180811, 0.0061610929119244673, 0.0060267741521087981, 0.0059545210614818768, 0.0058519721724160506, 0.0057334638403315928, 0.0058278496201313746, 0.0057792683331048741, 0.0058673942104839382, 0.0059059567440656628, 0.006119192749120604],
        "SimilarSites": [{
            "Url": "amazon.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=amazon.com&t=2&s=0&h=542754912626254351"
        }, {
            "Url": "ubid.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ubid.com&t=2&s=0&h=5084296503341386153"
        }, {
            "Url": "etsy.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=etsy.com&t=2&s=0&h=9941116634278695336"
        }, {
            "Url": "overstock.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=overstock.com&t=2&s=0&h=14353067906339035803"
        }, {
            "Url": "paypal.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=paypal.com&t=2&s=0&h=17770822069615820766"
        }, {
            "Url": "ioffer.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ioffer.com&t=2&s=0&h=3222344346188134385"
        }, {
            "Url": "onlineauction.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=onlineauction.com&t=2&s=0&h=8145207419534836950"
        }, {
            "Url": "epier.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=epier.com&t=2&s=0&h=15767725501585539414"
        }, {
            "Url": "yahoo.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=yahoo.com&t=2&s=0&h=5279323672926511723"
        }, {
            "Url": "propertyroom.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=propertyroom.com&t=2&s=0&h=8516545571386441944"
        }, {
            "Url": "lastminute-auction.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=lastminute-auction.com&t=2&s=0&h=3861854233883380521"
        }, {
            "Url": "missing-auctions.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=missing-auctions.com&t=2&s=0&h=4567992919237589712"
        }, {
            "Url": "auctionfire.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=auctionfire.com&t=2&s=0&h=10183227886362023209"
        }, {
            "Url": "walmart.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=walmart.com&t=2&s=0&h=13008930232163895336"
        }, {
            "Url": "google.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=google.com&t=2&s=0&h=300811983108016870"
        }, {
            "Url": "buy.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=buy.com&t=2&s=0&h=10866060892339689591"
        }, {
            "Url": "uk.ebid.net",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=uk.ebid.net&t=2&s=0&h=5419342284431107524"
        }, {
            "Url": "fatfingers.co.uk",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=fatfingers.co.uk&t=2&s=0&h=10342823698345891801"
        }, {
            "Url": "cqout.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=cqout.com&t=2&s=0&h=15066735973350439955"
        }, {
            "Url": "ebayliveauctions.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebayliveauctions.com&t=2&s=0&h=8237559265349593140"
        }, {
            "Url": "auctionpalms.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=auctionpalms.com&t=2&s=0&h=14335256118994217316"
        }, {
            "Url": "auctions.yahoo.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=auctions.yahoo.com&t=2&s=0&h=14778859243259568932"
        }, {
            "Url": "msn.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=msn.com&t=2&s=0&h=8259129239484540165"
        }, {
            "Url": "ebay.ph",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebay.ph&t=2&s=0&h=4960732153340074189"
        }, {
            "Url": "ebay.com.sg",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebay.com.sg&t=2&s=0&h=2897358931565126925"
        }, {
            "Url": "ebay.ca",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebay.ca&t=2&s=0&h=11510592357268945494"
        }, {
            "Url": "auctions.overstock.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=auctions.overstock.com&t=2&s=0&h=11983476869640146035"
        }, {
            "Url": "stealitback.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=stealitback.com&t=2&s=0&h=17819885557676207697"
        }, {
            "Url": "befr.ebay.be",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=befr.ebay.be&t=2&s=0&h=7794365859851375363"
        }, {
            "Url": "ebay.com.hk",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebay.com.hk&t=2&s=0&h=5875078412276608497"
        }, {
            "Url": "ebay.de",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebay.de&t=2&s=0&h=16389828964303172205"
        }, {
            "Url": "aol.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=aol.com&t=2&s=0&h=8942390459689144869"
        }, {
            "Url": "sellingonebay.info",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=sellingonebay.info&t=2&s=0&h=18176485402227010197"
        }, {
            "Url": "inbox.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=inbox.com&t=2&s=0&h=14642186171064953516"
        }, {
            "Url": "online-auction-services.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=online-auction-services.com&t=2&s=0&h=17627013834014322015"
        }, {
            "Url": "ebay.nl",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=ebay.nl&t=2&s=0&h=15298166569764622269"
        }, {
            "Url": "auctionprofits.net",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=auctionprofits.net&t=2&s=0&h=1837344634307115087"
        }, {
            "Url": "auction-dog.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=auction-dog.com&t=2&s=0&h=7172000464287070131"
        }, {
            "Url": "antiquegoodsonlinesite.com",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=antiquegoodsonlinesite.com&t=2&s=0&h=13278802746943865078"
        }, {
            "Url": "bma.auct.co",
            "FavIcon": "https://d6rd5g4tnbhqj.cloudfront.net/image?url=bma.auct.co&t=2&s=0&h=6880800424146572830"
        }],
        "TrafficShares": {
            "Search": 0.21881783392037427,
            "Social": 0.035231805081488307,
            "Mail": 0.026589889435969582,
            "Paid Referrals": 0.0010636438620286713,
            "Direct": 0.45505901546526029,
            "Referrals": 0.26323781223487891,
            "Appstore Internals": 0.0
        }
    };

    //define product model
    var Contact = Backbone.Model.extend({
        defaults: {
            photo: "img/placeholder.png"
        }
    });

    //define directory collection
    var Directory = Backbone.Collection.extend({
        model: Contact
    });

    //define individual contact view
    var ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#contactTemplate").html(),

        render: function () {
            var tmpl = _.template(this.template);

            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
    var DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            this.collection = new Contact(contacts);
            this.render();
        },

        render: function () {
            var that = this;
            console.log(this.collection);
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });

    //create instance of master view
    var directory = new DirectoryView();

}(jQuery));
