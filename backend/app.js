const  express = require('express');
const  app = express();
const userR= require('./Route/userRoute');
const authRoutes = require('./Route/authRoutes')
const productR= require('./Route/productRoute');
const cors = require('cors');
app.use(cors())

require("./config")

app.use(express.json())


app.use("/",userR)
app.use("/",authRoutes)
app.use("/",productR)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
    });
   
