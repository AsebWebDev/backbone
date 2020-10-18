var Song = Backbone.Model.extend({
  urlRoot: '/api/songs',

  defaults : {
    numberOfPlays: 0
  },

  validate: (attrs) => {
    if (!attrs.title) return 'Title is required.'
  },

  play: function() {
    let numberOfPlays = this.get('numberOfPlays');
    this.set('numberOfPlays', numberOfPlays + 1)
  }
})
