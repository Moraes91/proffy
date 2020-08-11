import express from 'express';

const routes = express.Router();

routes.post('/classes', (request, response) => {
    const data = request.body;

    console.log(data);

    return response.send();
});

export default routes;