const noteRoutes = require('./note_routes');

module.exports = function (router, db) {
    noteRoutes(router, db);
    // Тут, позже, будут и другие обработчики маршрутов
};
