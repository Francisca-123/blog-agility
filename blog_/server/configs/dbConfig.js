const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Database is connected.....`);
    }catch (error){
        console.log(`Unable to connect to DB ${error.message}`);
    }
}

module.exports = connectDB;