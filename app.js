var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemRouter = require('./routers/item');
var itemRouter2 = require('./routers/item2');
var itemRouter3 = require('./routers/item3');
var itemRouter5 = require('./routers/item5');
var itemRouter6 = require('./routers/item6');
var itemRouter7 = require('./routers/item7');

var cors = require('cors');
const router = require('./routers/tracker');


var app = express();
app.use(
  cors({
    origin: "*",
  })
);
var PORT = 4000;


mongoose.connect("mongodb+srv://polymokashi12:taJoZqAwYbiihk4K@cluster0.ap6oe80.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true  
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/api', itemRouter);
app.use('/api', itemRouter2);
app.use('/api', itemRouter3);
app.use('/api', itemRouter6);
app.use('/api', itemRouter5);
app.use('/api', itemRouter7);
app.use('/api', router);



app.listen(PORT,()=>
  console.log(`Listening on port ${process.env.Base_URL}`)
);
