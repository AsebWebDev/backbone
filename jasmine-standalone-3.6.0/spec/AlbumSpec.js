describe('Album', function() {
    let album;

    beforeEach(()=>{
        album = new Album();
    })

    it ('url should be /api/songs', ()=>{
        expect(album.url).toEqual('/api/songs')
    })

    describe('getPopularSong', () => {
        it ('should return undefined if the collection is empty', () => {
            expect(album.getPopularSong()).toBeUndefined()
        })

        it ('should return the highest number of plays if the collection is not empty', () =>{
            let song1 = new Song({title: "Blue in Green", numberOfPlays: 10})
            let song2 = new Song({title: "So what", numberOfPlays: 5})
        
            album.add(song1)
            album.add(song2)
        
            expect(album.getPopularSong()).toEqual(song1)
        })
    })
    
})