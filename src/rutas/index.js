const express = require ('express');
const router = express.Router();


router.get ('/index', (req,res) => {
         res.render('index.html', {title: 'Buxito.com'});
    });

    router.get ('/home', (req,res) => {
     res.render('home.html', {title: 'Buxito.com'});
});
    router.get ('/productos', (req,res) => {
        res.render('productos.html', {title: 'Buxito.com'});
   });

   router.get ('/compras', (req,res) => {
     res.render('compras.html', {title: 'Buxito.com'});
});

    module.exports = router;