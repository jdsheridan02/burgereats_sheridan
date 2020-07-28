const express = require("express"),
    router = express.Router(),
    // Import the model (cat.js) to use its database functions.
    burger = require("../models/burger.js");

// Create all the routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        let handlebarObject = {
            burger: data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject);
    });
});

router.post("/", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burgerName, 0
    ], function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devour
    }, condition, function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;