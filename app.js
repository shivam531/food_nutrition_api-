const express = require('express');
const app = express();
const cors = require('cors');
const port = 3200;
const food_api=require('./src/Model/food');
const foodchat = require('./src/Model/food');
require('./src/db/conn');
app.use(express.json());
app.use(cors());
app.get('/',(req,res) => {
     res.send('<h1>Food_API</h1>')
})

app.get('/getfooddata', async (req,res) => {
      try{
           const getfood = await food_api.find({});
           res.status(201).send(getfood)
      }
      catch(e){
         console.log(e);
      }
})

app.post('/foodchat',async (req,res) => {
     
       try{
          
        const addingfood = new food_api(req.body);
        const insertData=await addingfood.save();
        console.log(insertData);
        res.status(201).send(insertData)

       }
       catch(e){
         console.log(e)
       }

})

app.get('/getfooddata/:food_name',async(req , res)=>{
     const food_name = req.params.food_name;
     try{
         const menData = await foodchat.findOne({food_name : food_name})
         if(!menData)
         {
          return res.status(400).json({error: 'food not found'})
         }
         res.status(200).json(menData)

     }
     catch(e){
          console.log(e);
     }
})

app.delete('/foodchat/:food_name',async(req, res)=> {
          const food_name = req.params.food_name;
     try{
          const deleteRecord = await foodchat.findOneAndDelete({food_name})
          if(!deleteRecord){
               return res.status(400).json({error:'food not find'});
          }
          res.status(200).json(deleteRecord)
     }
     catch(e){
          console.log(e);
     }
})

app.listen(port, () => {
    console.log(`server is lstening at post number${port}`)
})

