const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//require("dotenv").config();

const app = express();
//app.use(cors());
//app.use(express.json());
//mongoose
  //.connect(process.env.MONGO_URI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  //})
  //.then(() => console.log("MongoDB Connected"))
  //.catch((err) => console.error(err));


app.get("/getAll", (req, res) => res.send("Hello MERN"));
// const PORT = process.env.PORT || 5001;
const PORT = 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
