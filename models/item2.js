var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema2 = new Schema(
  {
    UserData: {
      type: mongoose.Schema.Types.Mixed,
    } ,
    Textlength: {
      type: mongoose.Schema.Types.Mixed,
    } ,
  },
  { collection: "User" }
);

module.exports = mongoose.model("Item2", itemSchema2);
