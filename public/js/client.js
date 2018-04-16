/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

var CreateCardButtons = function (t, options) {
        return [{
            icon: BLACK_ROCKET_ICON,
            text: 'Start',
            callback: function (t) {
                console.log(t);
                console.log(options);
                console.log(options.context.card);
                console.log(options.context.board);
                console.log(options.context.member);


                t.set("card", 'shared', 'TotalTimeSpent', 0);
                t.set("card", 'shared', 'StartTime', 0);

                t.get(options.context.card, 'shared', 'TotalTimeSpent').then(function (data) {
                    console.log(data);
                });
            }
        }];
    };

TrelloPowerUp.initialize({'card-buttons': CreateCardButtons});
/*
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
*/
var onDetailsClosed = function(t, opts) {
  console.log("onDetailsClosed");
}

var onOpenDetails = function(t, opts) {
  console.log("onOpenDetails");
  console.log(opts.locale);
  
  return t.modal({
  // the url to load for the iframe
  url: './board-details.html',
  // optional arguments to be passed to the iframe as query parameters
  // access later with t.arg('text')
  args: { text: 'Hello' },
  // optional color for header chrome
  /*accentColor: '#F2D600',*/
  // initial height for iframe
  height: 500,// not used if fullscreen is true
  // whether the modal should stretch to take up the whole screen
  //fullscreen: true,
  // optional function to be called if user closes modal (via `X` or escape, etc)
  callback: onDetailsClosed,
  // optional title for header chrome
  title: 'Board Details',
  // optional action buttons for header chrome
  // max 3, up to 1 on right side
  actions: [{
    icon: BLACK_ROCKET_ICON,
    callback: () => console.log(':tada:'),
    alt: 'Right side',
    position: 'right',
  }],
});
};


var CreateBoardButtons = function(t, opts) {
  var list = [];
  var detailsButton = {
    // we can either provide a button that has a callback function
    icon: BLACK_ROCKET_ICON,
    text: "Beni Oku",
    callback: onOpenDetails,
    condition: "edit"
  };
  list.push(detailsButton);
  onOpenDetails(t,{locale:"tr-TR"});
  return list;
};

console.log("extrello loaded.");


window.TrelloPowerUp.initialize({'board-buttons': CreateBoardButtons});
//window.TrelloPowerUp.initialize({'on-enable': onOpenDetails});

