const route = require('express').Router()

const db = require('../db')

route.get('/',function(req,res){
    db.getAllUser()
    .then((Users) => res.send(Users))
    .catch((err) => res.send({error:err}))
})

route.post('/',(req,res)=>{
    db.addNewUser(req.body.name,req.body.age,req.body.city)
    .then(() => res.redirect('/add'))
    .catch((err)=>res.send({error:err}))
})

exports = module.exports={
    route
}

