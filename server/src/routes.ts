import express from 'express';

const routes = express.Router();

routes.get("/users", ()=> {
    console.log("Lista de usuario")
});

export default routes;