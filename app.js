const express = require('express');
const app = express();
const path = require('path');



// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.render("index");
})


app.listen(3000, () => {
    console.log('Server started on port 3000');
})