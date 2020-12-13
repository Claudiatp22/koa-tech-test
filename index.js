const express = require("express");
const bodyParser = require("body-parser");
const db = require("./app/models");
const cors = require("cors");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/api-docs.json");


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// sync sequelize to init models and database
// db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json("Welcome to Claudia's backend tech assessment.");
});

require("./app/routes")(app);

// SwaggerUi
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
