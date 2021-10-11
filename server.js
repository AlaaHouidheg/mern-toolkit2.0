var express = require("express");
var app = express();
var cors = require("cors");

require("dotenv").config();
const DBconnect = require("./config/DBconnect");
DBconnect();

//Parser JSON

app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/User"));
app.listen(process.env.PORT, (error) => {
  error
    ? console.log(`server not running${error}`)
    : console.log(`server is running on ${process.env.PORT}`);
});
