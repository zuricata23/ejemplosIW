// uso de express para aplicaciones Web
// soporte de vistas
// soporta middleware
// crear aplicaciones con react, angular
const fs = require('fs');
const path = require('path');
const express  = require('express');
const bParser = require('body-parser');
const app = express();
const port = 3000;

// se establece la ruta para recursos estáticos de la aplicación
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));

/* definición de rutas */
// ruta raiz del proyecto, en este caso /localhost:3000
app.get('/', (req, res)=>{
    res.redirect('/html/index.html');

    /*
    fs.readFile(urlFile,(err, data)=>{
       if (err){
          console.log(err.code);
       }
       res.write(data);
       res.end();
    })*/    
});

// ruta que muestra los usuarios registrados
app.get('/users',(req, res)=>{
    const urlFile = path.join(__dirname,'../data/usuario.json');
    fs.readFile(urlFile,(err, data)=>{
       if (err){
          console.log(err.code);
       }
       res.write(data);
       res.end();
    })    
    res.send('Mostrando todos los usuarios');
});

app.post('/iniciarSesion',(req, res)=>{
   let user = req.body.user;
   let passwd = req.body.passwd;

   if(user==='Carlos' && passwd==='1234')
      res.write(user);     
   else
     res.write('usuario no registrado ...');
   
   res.end();
   
});



// Se ejecuta el servidor en el puerto establecido desde localhost
// Para ver la ejecución abra en el navegador la URL 
// localhost:3000
app.listen(port, ()=>{
   console.log ('Aplicación ejecutándose en el puerto 3000 en localhots'); 
})