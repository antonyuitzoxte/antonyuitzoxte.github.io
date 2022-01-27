const express = require ('express');
const app = express ();
const path = require('path');

//configuraciones
app.set('port',3000);
app.set('views', path.join(__dirname, 'vistas'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//programas intermedios

//rutas

app.use(require ('./rutas/index'));

//archivos estaticos

app.use(express.static(path.join(__dirname, 'Public')))

// listening the server
app.listen(app.get('port'), () => {
console.log ('server on port', app.get('port'));

});
