const express = require('express')
const router = express.Router()

router.get('/nuevaRuta', (req, res)=>{
    res.send('Nueva ruta con módulo Router()')
})

router.get('/views', (req, res)=>{

    const userName = "MaríaDB"

    res.render('index', {userName})
})


module.exports = router;