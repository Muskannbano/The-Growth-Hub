import mongoose from "mongoose";
// const URI = "mongodb://127.0.0.1:27017/mern_auth"
// mongoose.connect(URI)

export const connectDb = async() => {
    try {
        const URI = process.env.MONGODB_URI;
        await mongoose.connect(URI)
        console.log("DB Connection Successfully")
    } catch (error) {
        console.error("Database connection failed", error)
        process.exit(0)
    }
}
