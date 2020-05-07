var db = require("../models");
module.exports = function (app) {
    app.get("/", (req, res) => {
        db.Burger.findAll({}).then(burger => {
            console.log( "burger home route",burger)

            res.render("home", {
                burger: burger,
            });
        });
    });

    app.post("/api/burgers", (req, res) => {
        db.Burger.create({
            burger_name: req.body.burger_name,
            
        }).then(function (burger) {
            console.log ("burger - cereate route", burger)
            res.json(burger);
        });
    });

    app.put("/api/burgers/:id", (req, res) => {
        db.Burger.update({
                devoured: req.body.devoured,
            }, {
                where: {
                    id: req.params.id,
                },
            })
            .then(function (data) {
                console.log("data", data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
};