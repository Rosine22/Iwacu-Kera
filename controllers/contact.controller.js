// Contact controllers here
const contactModel = require( "../models/contact.models.js");

const contactController = {
     createContact : async (req, res) => {
        try {
          const newCont = await contactModel.create(req.body)
          res.status(201).json({
            task: newCont
          })
        }
        catch (err) {
          console.log(err.message)
        }
      },
      getAllContact: async (req, res) => {
        try {
          const getAll = await contactModel.find()
          res.status(200
          ).json({
            task: getAll
          })
        }
        catch (err) {
          console.log(err)
        }
      },
      getContact: async(req, res) => {
    
        const getone = await contactModel.findById({_id:req.params.id})
        try {
         if(!getone) {
           return res.status(404).json({msg:`No task with this id`})
         }
         res.status(200).json({
           task:getone
         })
   
         }
        catch(err) {
         console.log(err)
        }
     },

     updateContact: async(req, res) => {
        const contactUpdate = await contactModel.findByIdAndUpdate(req.params.id, req.body,{set:true}) 
        try {
          if(!contactUpdate) {
            return res.status(404).json({msg:`No task with this id`})
          }
          res.status(200).json({
            task: contactUpdate
          })
        }
        catch(err) {
          console.log(err)
        }
      },
      deleteContact: async(req, res) => {
        const id = req.params.id
        const contactdel = await contactModel.findByIdAndDelete(id)
        try{
          if(!contactdel) {
            return res.status(404).json({msg:`No task with this id`})
          }
          res.status(200).json({
            task: contactdel
          })
        }
        catch(err) {
          console.log(err)
        }
      }
    }
// export default contactController
module.exports = {contactController}

