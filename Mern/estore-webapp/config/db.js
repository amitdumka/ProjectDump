const mongoose=require('mongoose')

const connectDB= async()=>{
    try{
       
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true, useUnifiedTopology:true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log(`MongoDB connected${conn.connection.host}`)
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }
    mongoose.Promise = global.Promise;
}
module.exports=connectDB