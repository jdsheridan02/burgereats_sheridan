const express = require("express"),
    PORT = process.env.PORT || 8080,
    app = express(),
    // Import routes and give the server access to them.
    routes = require("./controllers/burgers_controller.js"),
    // set handlebars
    exphbs = require("express-handlebars");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});