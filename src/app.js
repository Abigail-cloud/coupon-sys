const express = require('express')
const app = express();
const dotenv= require('dotenv')
dotenv.config()
const port= process.env.PORT
const cartRouter = require('./routes/cartRoutes')


app.get('/', (req, res)=>{
    res.send("Hello Coupon");
})





app.use(express.json())


//Route
app.use('/api/v1', cartRouter)

app.listen(port, () => {
    console.log( `Server running in ${process.env.DB_HOST} mode on, port ${port}`);
})

console.log(process.env.DB_HOST);



