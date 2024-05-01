var express = require("express");
var Item = require("../models/item5");

var itemRouter5 = express.Router();

itemRouter5
  .route("/items5")
  .post(function (request, response) {
    console.log("POST /items5 ---" ,request.body);

    // var item = new Item({FormD1 : request.body.FormD});
    var item = new Item(request.body);
    console.log("item : ",item)

    item.save();

    // GET /items
    // POST /items2 :  { UserData: [ 'UIOO', '10' ] }
    // item :  {
    //   UserData: [ 'UIOO', '10' ],
    //   _id: new ObjectId("640b13c855260bae4fa8bb1b")
    // }

    response.status(201).send(item);
  })
  .get(function (request, response) {
    console.log("GET /items5 : ---");

    Item.find(function (error, items5) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      // console.log("Item55555...... ",items5[12].sam);
      // arr=[];
      // arr.push("sam")
// items5[12].sam[3].arr1=arr;


for(let i=0;i<items5.length;i++){
 let arr1=[];
  const objectIndex = items5[i].sam.findIndex(item => typeof item === "object");

  for (const key in items5[i].sam[objectIndex]) {
  
        arr1.push(key)
}

  items5[i].sam[objectIndex].seq = arr1;
}
      response.json(items5);
      // console.log("Item5...... ",items5[12].sam);
    });
  });

  module.exports = itemRouter5;