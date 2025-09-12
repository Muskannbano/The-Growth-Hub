import dotenv from "dotenv"
dotenv.config()
// console.log("Loaded Mongo URI:", process.env.MONGODB_URI);

import express from "express"
import authRouter  from "./router/auth-router.js"
import contactRouter from "./router/contact-router.js"
import serviceRouter from "./router/service-router.js"
import adminRouter from "./router/admin-router.js"
import { connectDb } from "./utils/db.js"
import { errorMiddleware } from "./middleware/error-middleware.js"
import cors from "cors"
const app = express()

const corsOption = {
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
}

app.use(cors(corsOption))
app.use(express.json())
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use("/api/admin",adminRouter)
app.use(errorMiddleware)

const PORT = 5000
connectDb().then(()=>{

    app.listen(PORT, ()=>{
        console.log(`Server is running on the port:${PORT}`)
    })
})