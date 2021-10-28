import { connect } from "mongoose"
const connectDb = async () =>{
    return await connect('mongodb://127.0.0.1:27017/mydb') 
}
export = connectDb