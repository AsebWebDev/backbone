console.log("Main.js started.")

var Song = Backbone.Model.extend({
    initialize: function() {
        console.log("A new song has been created.")
    }
});

var song = new Song();
console.log("song", song)
 