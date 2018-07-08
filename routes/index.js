const infraccRoutes = require('./infracc_routes');

module.exports = function(app, db) {
    infraccRoutes(app, db);
};