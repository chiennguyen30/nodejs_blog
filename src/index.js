const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = 3000;
const route = require("./routes");
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

route(app);

app.listen(port, () => console.log(`Example app listen at http://localhost:${port}`));
