//1 .import db.js

const db = require('../services/db')

// 2. logic for getting contact details from database

const getAllContacts=()=>{

    return db.contact.find().then((result)=>{

        if(result){

            return{
                statusCode:200,
                contacts: result
            }
        } else{

            return{
                statusCode:404,
                message:" couldn't find contact" 
            }
        }

    })
}




const addContact=(id,name,address,phone,email)=>{
    return db.contact.findOne({id}).then((result)=>{

        if(result){

            return{
                statusCode:404,
                message:"Contact already exist"
            }
        } else{

            const contactDetails={
                address:address,
                 id:id,
                 email: email,
                 name: name,
                 phone: phone
    
            }
        // TO SAVE "new - keyword"
         const newContact = new db.contact(contactDetails)

         //saving contact
         newContact.save()
         

         return{
            statusCode:200,
            message:"Contact added successfully"
         }
        }
    })
}

// view contact

const viewContact=(id)=>{
    return db.contact.findOne({id}).then((result)=>{

        return{
            statusCode:200,
            contacts:result
        }
    })

    .catch((error)=>{
        return{
            statusCode:404,
            message:"Can't find contact"
        }
    })
}


// delete contact

const deleteContact=(id)=>{

    return db.contact.deleteOne({id}).then((result)=>{

        return{

            statusCode: 200,
            message:"Contact deleted successfully"
        }
    })

    .catch((error)=>{

        return{

            statusCode:404,
            message:"Can't find contact"
        }
    })
}


//update contact

const updateContact=(id,name,address,phone,email)=>{

   return db.contact.findOne({id}).then((result)=>{

    if(result){

        //assign updated value to the mongodb object
        result.id=id;
        result.name=name;
        result.address=address;
        result.phone=phone;
        result.email=email;
        // save to mongodb

        result.save()

        return{
            statusCode:200,
            message:"Contact updated successfully"
        }

    }else{

        return{

            statusCode: 404,
            message:"An error occured"

        }

    }

   })
}



module.exports={
    getAllContacts,
    addContact,
    viewContact,
    deleteContact,
    updateContact
}