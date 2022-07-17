import app from './server'
import mongoose, { ConnectOptions } from 'mongoose'
import config from './config/config'
import dotenv from 'dotenv'


async function main(){  
    dotenv.config()
    const port = config.PORT;

    try{
        const mongooseOptions : ConnectOptions = {
            //connectTimeoutMS: 2000,
        }
      
        await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions)
        console.log(`connected to ${config.MONGO_DATABASE}`)

        app.listen(port, ()=>{
            console.log(`[Running] in http://localhost:${port}/`);
        })
    }catch(e){
        console.error(e);
        process.exit(1);        
    }
}

main()
    .catch(console.error)
    .finally(()=>{
        client.close();
    })