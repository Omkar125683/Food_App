const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('db connected Sucessfully')
        const fetch_data = await mongoose.connection.db.collection('Food_item');
        const data = await fetch_data.find({}).toArray();
      // console.log(data)
        const category_data = await mongoose.connection.db.collection('Food_category');
        const category_data1= await category_data.find({}).toArray();
      // console.log(category_data1);
        //console.log(data)
        global.foodDataitems = data;
        //console.log(global.foodDataitems);
        global.foodCategory=category_data1; 
        //console.log(global.foodCategory);
    }
    catch(err){
        console.log('Database not connected Sucessfully')
    }

}

module.exports = dbconnect;