// const mongoose = require("mongoose");

// mongoose.set("strictQuery",true);

// mongoose.connect('mongodb://127.0.0.1:27071/product-apis',{
//     useNewUrlParser :true
    
// });

// const db = mongoose.connection;
// db.on('error',(err)=>{
//     console.log("failed to connect");
// })
// db.once('open',()=>{
//     console.log("connected to db");
// })

const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


mongoose.connect("mongodb://127.0.0.1:27017/product-apis", {
    useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", (err) => {
    console.log("connection error", err);
});
db.once("open", () => {
    console.log("connected to database");
}); 