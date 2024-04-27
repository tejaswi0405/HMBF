const express= require('express');
const cors= require('cors');
const {MongoClient} = require('mongodb');
const bcrypt= require('bcrypt');


//create object for express
const app= new express();
app.use(express.json()); // get the input send the output  , it will get in string format and then we need to convert to json format

//third party application can be served
app.use(cors());    //since server is running on seperate server to that of client(hms).

const client= new MongoClient('mongodb+srv://akm:2200032823@cluster0.crdqzyr.mongodb.net/?retryWrites=true&w=majority');
client.connect();

//outer circle is cluster
//inside cluster is database
//inside database is collection
//inside collection is document which is similar to MySql table row

const db= client.db("sdp");
const col= db.collection("user");
const col2= db.collection("room");
const col3= db.collection("bookings");


//from browser, the default url triggering is get method
// localhost:8081/home
//1st param is address and 2nd is service function
app.get('/home',(req,res)=>{
    res.send("It is a Home page");
})

//1st param is address adn 2nd is service
// client sent the request which we need to type
app.post('/insert', async (req,res)=>{
    //every request will have header and body section
    //actual data is in dictionary format
    req.body.password = await bcrypt.hash(req.body.password,5);
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data recieved");
});


app.post('/check',async(req,res)=>{
    console.log(req.body);
    //you can give every key value pairs and key and value is a condition and every key is a column name
    var result= await col.findOne({"name":req.body.un})
    if(result!=null){
        if(await bcrypt.compare(req.body.pw,result.password)){
            res.send(result);
        }
        else{
            res.send("fail");
        }
    }
    else{
        res.send("fail");
    }
})

app.post('/book',async(req,res)=>{
    console.log(req.body);
    col3.insertOne(req.body);
    res.send("Data recieved");
})

app.get('/show', async(req,res)=>{
    var result= await col.find().toArray();
    console.log(result);
    res.send(result);
})

//by me
app.get('/room',async(req,res)=>{
    var result= await col2.find().toArray();
    console.log(result);
    res.send(result);
})

app.post('/entry',(req,res)=>{
    console.log(req.body);
    col2.insertOne(req.body);
    res.send("Successfully added");
})

// app.put('/entry',async(req,res)=>{
//     console.log(req.body);
//     var doc={
//         $set: {
//             roomType:req.body.roomType,
//             size:req.body.size,
//             price:req.body.price,
//             vacancy:req.body.vacancy,
//             image:req.body.image
//         }
//     }
//     await col2.updateOne({sid: req.body.roomId},doc)
//     res.send("Update successfully");
// })

app.delete('/delete',async (req,res)=>{
    await col2.deleteOne({roomId:req.query.id})
    res.send("deleted");
})

app.listen(8081);
console.log("Server running");

