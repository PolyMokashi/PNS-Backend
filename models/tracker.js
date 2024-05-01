var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tracker = new Schema(
    {
  trackerId:{
          type: String,
          required:true
      },
  
    },
  );
  
  // itemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
  module.exports = mongoose.model("tracker", tracker);