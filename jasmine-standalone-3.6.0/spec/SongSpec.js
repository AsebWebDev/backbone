describe('Song', () => {
    let song

    beforeEach(() => {
        song = new Song();
    })

    it ('urlRoot should be /api/songs', () => {
        expect(song.urlRoot).toEqual('/api/songs')
    })

    it ('numberOfPlays should be 0 by default', () =>{ 
        expect(song.get('numberOfPlays')).toEqual(0)
    })

    it ('title is required', () => {
        expect(song.isValid()).toBeFalsy();

        song.set("title", "Blue in Green")

        expect(song.isValid()).toBeTruthy();
    })

    it ('play should increment the numberOfPlays', () => {
        song.play()

        expect(song.get('numberOfPlays')).toEqual(1);
    })
})
