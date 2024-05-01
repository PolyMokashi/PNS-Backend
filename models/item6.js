var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// var AutoIncrement = require('mongoose-sequence')(mongoose);

var itemSchema6 = new Schema(
  {
realtime:{
        type: mongoose.Schema.Types.Mixed,
    },

  },
  { collection: "info" }
);

// itemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
module.exports = mongoose.model("Item6", itemSchema6);
// module.exports = mongoose.model("Item", itemSchema1)