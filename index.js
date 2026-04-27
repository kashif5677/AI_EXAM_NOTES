import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.json({
        message: "Exam notes"
    })
})
app.listen(port, () => {
    console.log(`server is running on ${port}`);
    connectDB()
})