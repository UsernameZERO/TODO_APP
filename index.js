const express = require('express');
const app = express();
const port = 8888;

const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));


app.listen(port,(err)=>{
    if (err) {
        console.log(`Error is running in the server ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});