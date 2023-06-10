const express = require("express");
const app = express();
const port = 3001;
app.get("/test", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  return res.send("hello chien 123dsadas1");
});

app.listen(port, () => console.log(`example app listtening at http://localhost:${port}`));
