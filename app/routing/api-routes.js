// This will help what data the user sees, as well as what
// data to send to our server to store

var friendsListData = require ('../data/friends.js');

module.exports = function (app) {

  app.get('/api/friends', function(req, res) {
    res.json(friendsListData);
  });

  app.post("/api/friends", function(req, res) {
    friendsListData.push(req.body);
  });

  
};
