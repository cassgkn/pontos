const Express = require('express');
const app = Express();
//const db = require ('./registrarPonto/index')

app.get ('/', async (req, res)=>{
    res.send('Essa rota chamará seu front');
});

app.listen (3000, ()=>{
    console.log('Servidor iniciado')
});



