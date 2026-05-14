const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

// import dns from "dns"
// dns.setDefaultResultOrder("ipv4first")

const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(cors())
app.use(express.json())


async function run() {
  try {
    await client.connect();

    const db = client.db("demo_server_db");
    const productsCollection = db.collection("products")

    app.get("/products", async(req,res)=> {
      // const cursor = productsCollection.find();
      const result = await productsCollection.find().toArray();
      res.send(result);
    })

    app.get("/products/:productId", async(req, res)=> {
      const productId = req.params.productId;
      const result = await productsCollection.findOne({_id: new ObjectId(productId)})
      res.send(result)
    })

    app.post("/products", async(req, res)=> {
      const newProduct = req.body;
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
      
      res.send(result);
    })

    app.patch("/products/:productId", async(req, res)=>{
      const {productId}  = req.params;
      const updatedData = req.body;
      const result = await productsCollection.updateOne({_id: new ObjectId(productId)}, {$set: updatedData});
      res.send(result);
      console.log(productId, updatedData);
      

    })

    app.delete("/products/:productId", async(req, res)=> {
      const productId = req.params.productId;
      const result = await productsCollection.deleteOne({_id: new ObjectId(productId)})
      res.send(result);
      
    })

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// app.get('/', (req, res) => {
//   res.send('Hello World!') 
// })

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
