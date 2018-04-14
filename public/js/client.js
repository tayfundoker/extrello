/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

TrelloPowerUp.initialize({
    //Start adding handlers for your capabilities here!
    'card-buttons': function (t, options) {
        return [{
            icon: BLACK_ROCKET_ICON,
            text: 'Start',
            callback: function (t) {
                console.log(t);
                console.log(options);
                console.log(options.context.card);
                console.log(options.context.board);
                console.log(options.context.member);


                t.has()
                t.set("card", 'shared', 'TotalTimeSpent', 0);
                t.set("card", 'shared', 'StartTime', 0);

                t.get(options.context.card, 'shared', 'TotalTimeSpent').then(function (data) {
                    console.log(data);
                });

                // TrelloPowerUp.initialize({
                //     //Start adding handlers for your capabilities here!
                //     'card-buttons': function (t, options) {
                //         return [{
                //             icon: BLACK_ROCKET_ICON,
                //             text: 'Stop',
                //             callback: function (t) {
                //                 console.log(t);
                //                 console.log(options);
                //                 console.log(options.context.card);
                //                 console.log(options.context.board);
                //                 console.log(options.context.member);
                //
                //
                //                 t.set(options.context.card, 'shared', 'TotalTimeSpent', 521);
                //
                //                 t.get(options.context.card, 'shared', 'TotalTimeSpent').then(function (data) {
                //                     console.log(data);
                //                 });
                //
                //
                //             }
                //         }];
                //     },
                // });


            }
        }];
    },
});

var WHITE_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg';

window.TrelloPowerUp.initialize({
    'format-url': function (t, options) {
        // options.url has the url that we are being asked to format
        // in our response we can include an icon as well as the replacement text

        return {
            icon: BLACK_ROCKET_ICON, // don't use a colored icon here
            text: '👉 ' + options.url + ' 👈'
        };

        // if we don't actually have any valuable information about the url
        // we can let Trello know like so:
        // throw t.NotHandled();
    }
});

var onReadMe = function (t, opts) {
    return t.popup({
        title: "Beni Oku",
        url: 'readme.html',
    });
};

window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
        return [{
            // we can either provide a button that has a callback function
            icon: WHITE_ICON,
            text: 'Beni Oku',
            callback: onReadMe,
            condition: 'edit'
        }];
    }
});

