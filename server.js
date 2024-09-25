require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dbConn = require('./config/db')
const Projects = require('./routes/projectRoute')
const Users = require('./routes/userRoute')
app.use(express.json())
// const dotenv = require('dotenv')
// dotenv.config()
// const corsconfig = {
//     origin: process.env.CORSURL
// };
app.use(cors())
const port = process.env.PORT || 7778
app.use('/projects', Projects)
app.use('/users', Users)

app.get('/', (req, res) => {
    res.status(200).json("Welcome")
})

app.listen(port, () => {
    console.log(`Server running in : ${port}`)
})

// const path = require("path");
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
//   });
// }