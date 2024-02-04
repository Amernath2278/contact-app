// 1.import express

const express= require('express')

// 2. import cors

const cors = require('cors')

// 3. create an application by usong express

const contactApp = express()

// import logic.js

const logic = require('./services/logic')

// 4. Use cors to connect 2 ports

contactApp.use( cors({
    origin:'http://localhost:3000'
}))

// 5. create a middleware for parsing json 

contactApp.use(express.json())

// 6. define a port for backend

contactApp.listen(8000,()=>{
    console.log('contact-app listening on port 8000');
})

//^^^^^^BACKEND APPLICATION CREATED FROM STEP 1 TO 6 ^^^^^^^//


// Getting all contacts

contactApp.get('/all-contacts',(req,res)=>{

    logic.getAllContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
    
})
 
//api call for add employee

contactApp.post('/new-contact',(req,res)=>{

    logic.addContact(req.body.id,req.body.name,req.body.address,req.body.phone,req.body.email).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//api call for view employee

contactApp.get('/view/:id',(req,res)=>{
    logic.viewContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//api call for delete employee

contactApp.delete('/delete/:id',(req,res)=>{

    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//api call for update

contactApp.post('/edit/:id',(req,res)=>{

    logic.updateContact(req.params.id,req.body.name,req.body.address,req.body.phone,req.body.email).then((response)=>{

        res.status(response.statusCode).json(response)
    })

})