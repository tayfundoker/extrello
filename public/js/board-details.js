var t = window.TrelloPowerUp.iframe();

console.log("Board Details Loaded.");
// you can access arguments passed to your iframe like so
var arg = t.arg("arg");
var description = "Hi!";
t.get("board", "shared", "description").then(function(data) {
    description = data;
  });

window.typeSelector.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set("board", "shared", { description: description })
  .then(function(){
    t.closePopup();
  });
});

t.render(function() {
  // make sure your rendering logic lives here, since we will
  // recall this method as the user adds and removes attachments
  // from your section
  console.log("Board Details Rendered.");
  console.log(arg);
  console.log(t);
  var root = document.getElementById("root");
  console.log("root");
  console.log(root);
  
  t.get("board", "shared", "description").then(function(data) {
    console.log(JSON.stringify(data, null, 2));
  });

  t.set("board", "shared", { description: "myValue" });

  t.board("id", "name", "customFields", "members", "labels")
    .then(function(board) {
      //console.log(JSON.stringify(board, null, 2));
      var i;
      for (i = 0; i < board.labels.length; i++) {
        console.log(board.labels[i].color);
      }
    });

  t.lists("all").then(function(list) {
    console.log(JSON.stringify(list, null, 2));
    var i;
    for (i = 0; i < list.length; i++) { 
    console.log(list[i].cards.length);
}
  });
});
