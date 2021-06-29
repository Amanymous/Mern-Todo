const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const notes = require("./data/notes")
const userRoutes = require("./routes/userRoutes")
const noteRoutes = require("./routes/noteRoutes")
const {errorHandler,notFound} = require("./middleware/errorMiddleware")


dotenv.config()
// loads environment variables

connectDB()
// for mongodb connection

const app = express()

app.use(express.json())
// accept json data


app.use("/api/users", userRoutes);
// user authentication

app.use("/api/notes", noteRoutes);
// notes route

// app.use("/api/notes/create", noteRoutes);

app.get("/",(req,res)=>{
    res.send("get Api is runnig!")
})

// app.get("/api/notes",(req,res)=>{
//     res.send(notes)
// })

// for error handling middleware
app.use(notFound)
app.use(errorHandler)

// app.get("/api/notes/:id",(req,res)=>{
//     const note = notes.find((n)=>n._id === req.params.id)
//     res.send(note)
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server running on port:${PORT}`))