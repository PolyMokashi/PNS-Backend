var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema3 = new Schema(
  {
    UData: {
      type: mongoose.Schema.Types.Mixed,
    } 
  },
  { collection: "Selected PN" }
);

module.exports = mongoose.model("Item3", itemSchema3);
