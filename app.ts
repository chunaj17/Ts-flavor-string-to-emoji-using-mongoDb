import * as express from 'express'
const app = express.default()
import router from './routes/router'
import connectDB from './db/connect'
const port:number = 3000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/v1",router)
const start = async()=>{
    try {
       await connectDB()
       app.listen(port,()=>{
           console.log(`Server is listening on port: ${port}....`);
       })
    } catch (error) {
        console.log(error);
    }    
} 
start()