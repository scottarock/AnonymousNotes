const Note = require('mongoose').model('Note');

module.exports = {

  index: function(request, response) {
    Note.find({}).sort('-createdAt')
      .then( notes => response.json(notes))
      .catch(console.log);
  },

  create: function(request, response) {
    Note.create(request.body)
      .then( note => response.json(note))
      .catch(console.log);
  },

}
