module.exports = app => {
    const urlController = require("../controllers/url.controller.js");

    var router = require("express").Router();

    // Create shorter version of url
    router.post("/tinyurl", urlController.create);

    app.use('/api', router);
};
