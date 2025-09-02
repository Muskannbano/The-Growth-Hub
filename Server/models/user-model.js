import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
        phone:{
        type:String,
        required:true
    },
        password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//secure your password
userSchema.pre('save',async function(next){
    // console.log("save method",this)
    const user = this
    if(!user.isModified("password")){
        next()
    }
    try {
    const saltRound=await bcrypt.genSalt(10);
     user.password = await bcrypt.hash(user.password, saltRound)
    
    } catch (error) {
        next(error)
    }
})
//compare the password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

//json web token
userSchema.methods.generateToken= async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,                          //payload
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY,                 //signature
            {
                expiresIn:"30d"
            }
    )
    } catch (error) {
        console.error(error)
    }
}

//define model or collection name
export const User = new mongoose.model("User",userSchema)
