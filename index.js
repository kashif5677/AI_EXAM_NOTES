import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
dotenv.config()

console.log(process.env.MONGO_URL)
console.log(process.env.PORT)

const app = express()
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.json({
        message: "Exam notes"
    })
})
connectDB()
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})