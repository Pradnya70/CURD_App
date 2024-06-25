const mongoose = require("mongoose");

const DB = "mongodb+srv://pradnyawaghmare9495:pradnya123@cluster0.8teiy9p.mongodb.net/MERN-CURD?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection to MongoDB Atlas successful");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB Atlas:", error.message);
    });
