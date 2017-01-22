// * Your `html-routes.js` file should include two routes:
// * A GET Route to `/survey` which should display the survey page.
// * A default USE route that leads to `home.html` which displays the home page.
// ===========================================================
// Routes

// helps direct users. When the user clicks on a link,
// this will help to decide which page to deliver to the user.

var path = require('path');

module.exports = function (app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // if we are using this url but have not defined the page, send user to this page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};
