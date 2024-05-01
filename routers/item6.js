var express = require("express");
var Item = require("../models/item6");

var itemRouter6 = express.Router();

itemRouter6
  .route("/items6")
  .post(function (request, response) {
    // console.log("POST /items6lklljnhjlhlhkjlkh---------" ,request.body);

    // var item = new Item({FormD1 : request.body.FormD});
    var item = new Item( {realtime:request.body});
    // console.log("item6kljlkjpjljkllk------ : ",item)

    item.save();
    response.status(201).send(item);
  })
  .get(function (request, response) {
    console.log("GET /items2");

    Item.find(function (error, items6) {
      if (error) {
        response.status(500).send(error);
        return;
      }
      response.json(items6);
    });
  });

itemRouter6
  .route("/items6/:itemId")
  .get(function (request, response) {
    console.log("GET /items6/:itemId");
 
    var itemId = request.params.itemId;

    Item.findOne({ id: itemId }, function (error, item) {
      if (error) {
        response.status(500).send(error);
        return;
      }

      // console.log(item);

      response.json(item);
    });
  })

  module.exports = itemRouter6;