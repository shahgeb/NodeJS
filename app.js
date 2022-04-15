const express = require('express');
const mongoose  = require('mongoose');

const app = express();
const  connect_url = "mongodb+srv://shahgeb:Dkny123*()@cluster0.iu0bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connect_url, {useNewUrlParser: true});
const con = mongoose.connection;

const PORT = process.env.PORT || 551;
con.on('open', () => {
    console.log('Console log db connected'); 
}) 
app.use(express.json());
const postsRouter = require('./routers/books');
app.use('/books', postsRouter);
app.listen(PORT, () => { 
    console.log(`server is running at port ${PORT}`); 
}) 