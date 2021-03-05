// I conect api.js with tables.js and reservationsJS.js
const tablesJS = require("./tables")
const reservationsJS =require("./reservations")

module.exports = (e) => {

// e.get-Api get request 
// GET is basically used for just getting (retrieving) some data from the server. 
// The GET method may return cached data.
// GET requests can be cached
// GET requests remain in the browser history
// GET requests can be bookmarked
// GET requests should never be used when dealing with sensitive data
// GET requests have length restrictions
// GET requests are only used to request data (not modify)
e.get('/api/tables', (req, res) => res.json(tablesJS));
e.get('/api/reservations', (req, res) => res.json(reservationsJS));



// I used post to send data to a server to create/update a resource.
// POST requests are never cached
// POST requests do not remain in the browser history
// POST requests cannot be bookmarked
// POST requests have no restrictions on data length

e.post('/api/tables', (req, res) => {
    if (tablesJS.length < 3) {
        tablesJS.push(req.body);
        res.json(true);
      } else {
        reservationsJS.push(req.body);
        res.json(false);
      }
    });

    e.post('/api/reservations', (req, res) => {
        tablesJS.length = 0;
        reservations.length = 0;
        // I used res.json() to send a JSON response. This method sends a response (with the correct content-type) 
        res.json({ ok: true });
      });
    };