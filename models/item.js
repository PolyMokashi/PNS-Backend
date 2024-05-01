var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema(
  {
    Sdata: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { collection: "admin1" }
);

module.exports = mongoose.model("Item", itemSchema);
