let express = require("express");
let app = express();
let path = require("path");


app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(3000, () => {
    console.log('Servidor funcionando')
})


let mainRouter = require('./routes/main');
app.use('/', mainRouter);