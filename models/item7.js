var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// var AutoIncrement = require('mongoose-sequence')(mongoose);

var itemSchema7 = new Schema(
  {
PartString:{
        type: mongoose.Schema.Types.Mixed,
    },

  },
  { collection: "Final" }
);

// itemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
module.exports = mongoose.model("Item7", itemSchema7);
// module.exports = mongoose.model("Item", itemSchema1)