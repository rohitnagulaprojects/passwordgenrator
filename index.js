const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb")
const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
    let url = "mongodb+srv://rohitkumarnagula:MRsF2liYH2Vg93Vz@cluster0.9u1al14.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    let client = new MongoClient(url);
    console.log("data");
    let db = client.db("Student");
    let coll = db.collection("student");
    let data = {"Password":req.body.pw};
    console.log(data);
    coll.insertOne(data)
    .then(result => res.send(result))
    .catch(er => console.log(er));

});


app.listen(3007,()=>{console.log("server ready");});