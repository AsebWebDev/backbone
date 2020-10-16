console.log("Main.js started.")

var Song = Backbone.Model.extend({
    initialize: function() {
        console.log("A new song has been created.")
    },
    defaults: {
        genre: "Jazz"
    },
    validate: function(attrs) {
        if (!attrs.title) return "Title is required"
    }
});

var song = new Song({
    artist: "Biles Davids",
    publishedYear: 1959
});

console.log("song", song)
