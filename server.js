const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./scripts/api')(app);
require('./scripts/htmlRoutes')(app);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));