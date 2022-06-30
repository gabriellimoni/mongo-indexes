const mongoose = require("mongoose");
const { mongoConnectionString } = require("../env");

mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  dbName: "indices_db",
});
mongoose.set("debug", false);
