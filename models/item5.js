var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// var AutoIncrement = require('mongoose-sequence')(mongoose);

var itemSchema5 = new Schema(
  {
  //   FormD1:{
  //     type: mongoose.Schema.Types.Mixed,
  // },
  sam:{
        type: mongoose.Schema.Types.Mixed,
    },

  //   samformdata:{
  //     type: mongoose.Schema.Types.Mixed,
  // },
    // Last_name: {
    //   type: mongoose.Schema.Types.Mixed,
    // },
    // Mobile_No: {
    //   type: Number,
    // },
    // UserName: {
    //   type: mongoose.Schema.Types.Mixed,
    // },
    // Password: {
    //   type: mongoose.Schema.Types.Mixed,
    // },
   
    // id: { type: Number},
  },
  { collection: "FormData" }
);

// itemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
module.exports = mongoose.model("Item5", itemSchema5);
// module.exports = mongoose.model("Item", itemSchema1)