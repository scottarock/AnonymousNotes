const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  response.send(path.resolve('dist', 'note-app', 'index.html'));
});

module.exports = router;
