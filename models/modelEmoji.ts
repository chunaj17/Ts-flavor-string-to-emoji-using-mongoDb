import{model, Schema} from 'mongoose'
interface UserInterface  {
    id :string,
    character?:String,
    requests ?:{}
}
const dataSchema = new Schema<UserInterface>({
    id:{
        type:String,
        required:true,
        trim:true
    },
    character: String,
    requests :{}
})
export = model('datas',dataSchema)