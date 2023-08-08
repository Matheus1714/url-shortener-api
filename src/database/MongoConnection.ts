import { config } from '../config/Constants';
import { connect } from "mongoose";


export class MongoConnection{
    public async connect(): Promise<void>{
        try{
            await connect(config.MONGO_CONNECTION, { useNewUrlParser:true, useUnifiedTopology: true })
            console.log('Database connected')
        }catch(err){
            console.error(err)
            process.exit(1)
        }
    }
}