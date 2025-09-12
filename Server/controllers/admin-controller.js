import Contact from "../models/contact-model.js"
import { User } from "../models/user-model.js"

export const getAllUsers = async(req,res) => {
    try {
        const users = await User.find({}, {password:0})
        if(!users || users.length === 0){
            return res.status(404).json({message:"No Users Found."})
        }
        res.status(200).json(users)
    } catch (error) {
         next(error)
    }
}
export const getUserById=async(req,res,next)=>{
    try {
        const id = req.params.id
        const data = await User.findOne({_id:id},{password:0})
        return res.status(200).json(data)
    } catch (error) {
        next()
    }
}
export const updateUserById=async(req,res,next)=>{
    try {
        const id = req.params.id
        const updatedUserdata = req.body
        const updatedData = await User.updateOne({_id:id},{$set:updatedUserdata})
        return res.status(200).json(updatedData)


    } catch (error) {
        next(error)
    }
}
export const deleteUserById=async(req,res,next)=>{
    try {
        const id = req.params.id
        await User.deleteOne({_id:id})
        return res.status(200).json({message:"User Deleted Successfuly"})
    } catch (error) {
        next()
    }
}
export const getAllContacts = async(req,res) => {
     try {
        const contacts = await Contact.find({}, {password:0})
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"No Contact Found."})
        }
        res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}
export const deleteContactById=async(req,res,next)=>{
    try {
        const id = req.params.id
        await Contact.deleteOne({_id:id})
        return res.status(200).json({message:"Contact Deleted Successfuly"})
    } catch (error) {
        next()
    }
}