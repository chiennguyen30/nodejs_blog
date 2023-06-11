import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(morgan("combined"));

app.use(express.static(__dirname + "/public"));

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(3000);
