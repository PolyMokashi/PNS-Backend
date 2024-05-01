var express = require("express");
var Item = require("../models/item7");

var itemRouter7 = express.Router();

itemRouter7.route("/items7").post(function (request, response) {
  console.log("request.body : ", request.body.PartString);
  console.log("request.body sequense : ", request.body.sequence);

  // Find matching string
  const searchString = request.body.PartString;
  const regex = new RegExp("^" + searchString + "[a-z]*$", "i");
  Item.findOne({ PartString: { $regex: regex } },  (err, result) => {
    if (err) throw err;

    if (result) {
      let len = request.body.sequence.length;
      // console.log("len : ", len);
      let len1 = searchString.length;
      // console.log("len1 : ", len1);
      let finallen = len1 - len;
      // console.log("finallen : ", finallen);

      const searchString1 = result.PartString.slice(0, finallen);
      // let AllData = null;
      console.log("searchstring1 : ", searchString1);

       Item.find(  (err, Data) => {
        if (err) {
          response.status(500).send(err);
          return "sam";
        }
        // console.log("finallen inside : ", finallen);
        // console.log("item7 data : ", Data);


        // const filterdata = Data.filter(obj => obj.includes(searchString1));
        // console.log("filterdata : ",filterdata)

let arr=[];

for(let i=0;i<Data.length;i++){
  arr.push(Data[i].PartString)
}
// console.log("arr : ",arr)

// console.log("arr size : ",arr.length)
let filterdata = arr.filter((str) =>
  str.includes(searchString1)
);

console.log("filterdata : ",filterdata)

// let filterdataLen =filterdata.length;

let SortedData=filterdata.sort();
let seqarr=[];

let len2 = -len;

// console.log("len2 : ",len2)


for(let i=0;i<SortedData.length;i++){

  let a=SortedData[i].slice(len2)
  // console.log("a : ",a)
  seqarr.push(a);




}
console.log("seqarr : ",seqarr)

const numbers = seqarr.map(num => parseInt(num));

// Find the missing sequence of indices
let newString=""
let flag=true
if(seqarr.length===1){
  let nextno = parseInt(request.body.sequence)
  let nn=nextno+1;
  let kd=nn.toString();
  newString = searchString.slice(0, len2) + kd;
  console.log("newstring poly chakka : ",newString)
}
else{
  for (let i = 0; i < numbers.length; i++) {
    let a=i+1;
    if (numbers[i] !== numbers[a] - 1) {
  
      num=numbers[i]+1;
  
     let nextseq = num.toString();
     
       newString = searchString.slice(0, len2) + nextseq;
  
      console.log("newstring..... : ",newString)
   flag=false
      break;
      
  
      // missingIndices.push(i + 1);
    }
  }
}


if(flag){
 let nnn= numbers[numbers.length-1]+1;
 let eje = nnn.toString();
 newString = searchString.slice(0, len2) + eje;
}


var item = new Item({ PartString: newString });
item.save();
response.status(201).send(item);



      });
      // console.log("data................................................");
      // console.log("All data : ", AllData);
      
      //   let filterdata = AllData.PartString.filter((str) =>
      //   str.includes(searchString1)
      // );

      // console.log("filterdata : ",filterdata)
      // Extract the last letter from the string and increment it
      // const lastLetter = result.PartString.slice(-1);

      // let flag=true;
      // i=1;
      // while(flag){
      //   const lastLet = result.PartString.slice(-i);
      // console.log("lastlet : ",lastLet)
      // if(i===4){
      //   flag=false
      // }
      // i++;
      //   // const nextLet = String.fromCharCode(lastLetter.charCodeAt(0) + i);

      // }

      // console.log("lastletter : ", lastLetter);
      // const nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);
      // console.log("nextletter : ", nextLetter);
      // // Create the new string with the incremented letter
      // const newString = searchString.slice(0, -1) + nextLetter;
      // console.log("newString : ", newString);
      // Insert the new string into the collection
      // var item = new Item({ PartString: newString });
      // item.save();
      // response.status(201).send(item);
    } else {
      // Insert the first string in the series
      const firstString = searchString;
      var item = new Item({ PartString: firstString });
      item.save();
      response.status(201).send(item);
    }
  });

  // var item = new Item({ PartString: request.body });
  // item.save();
  // response.status(201).send(item);
});

module.exports = itemRouter7;
