import {Schema, model} from "mongoose"
export const contactSchema = new Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    message:{type:String, required:true},
    
},{ timestamps: true })
const Contact = new model("Contact", contactSchema)
export default Contact
