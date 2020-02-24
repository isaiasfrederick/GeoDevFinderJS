const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request.params);
    return response.json({ message: "Hello Omnistack!" });
});

app.listen(3333);