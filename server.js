const express = require("express");
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', routes);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on " + port);
});

