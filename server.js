const express = require("express");

const app = express();
const PORT = process.env.PORT || 8888;

const db = require("./models");

app.use(express.static("assets"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./controllers/burger_controller")(app);

db.sequelize.sync({
    force: false
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on http://localhost:" + PORT);
    });
});