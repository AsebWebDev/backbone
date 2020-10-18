let Album = Backbone.Collection.extend({
    model: Song,

    url: "/api/songs",

    getPopularSong: function() {
        if (this.length === 0) return undefined;

        let sortedSongs = this.sortBy(function(song){
            return song.get("numberOfPlays")
        })

        return sortedSongs[sortedSongs.length - 1]
    }
})