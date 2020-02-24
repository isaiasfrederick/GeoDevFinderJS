const express = require('express');
const app = express();

app.post('/', (request, response) => {
    return response.json({ message: "Hello teste!" });
});
app.listen(3333);