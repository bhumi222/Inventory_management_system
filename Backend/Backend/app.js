const express = require("express");
const dotenv  = require("dotenv");
const productRoute = require("./routes/productRoute.js");
const userRoute = require("./routes/userRoute.js");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;
const key = JWT_SECRET;
app.use(cors({
  origin:'http://localhost:4200',
  credentials:true
}));

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/',productRoute);
app.use('/api/user',userRoute);


module.exports = {key};

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})