var sessionController = require('../controllers/sessionController.js');
var helpers = require('../config/helpers.js');

// This file handles the session routing
// pass control over to sessionController
module.exports = function (app) {

  // user must be logged in to access these methods.
  // if not will get a 401 response (check the helper method)
  app.route('/id')
    .get(sessionController.sessionById);
  app.route('/username')
    .get(helpers.ensureAuthenticated, sessionController.allSessions)
    .post(helpers.ensureAuthenticated,sessionController.newSession);
  
  

};
