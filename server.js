const express = require('express');
const { ProgressEvent } = require('undici-types');
const app = express()
const port = 5000;

app.use('/api/goals', require("./routes/goalRoutes"))

app.listen(port, () => console.log(`Server berjalan di port ${port}`))