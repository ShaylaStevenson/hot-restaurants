const path = require('path');

module.exports = (app) => {
    
    app.get('/tables', (req, res) => {
        res.sendFile(path.join(__dirname, 'tables.HTML'));
    });

    app.get('/reservations', (req, res) => {
        res.sendFile(path.join(__dirname, 'reservation.HTML'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.HTML'));
    });
};