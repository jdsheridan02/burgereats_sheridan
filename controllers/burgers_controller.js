const express = require("express"),
    router = express.Router(),
    // Import the model (burger.js) to use its database functions.
    burger = require("../models/burger.js");

// Create all the routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
          burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });

router.post("/", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burgerName, 0
    ], function () {
        res.redirect("/");
    });
});

router.post("/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devour
    }, condition, function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;