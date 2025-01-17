import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

// 1 server = 1 app
let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage);

    router.get('/about', homeController.getAboutPage);

    // rest api

    return app.use("/", router);
}

module.exports = initWebRoutes;