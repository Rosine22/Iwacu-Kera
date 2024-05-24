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
  getContact: async (req, res) => {
    let id;
    try {
      // Attempt to parse the id parameter as a MongoDB ObjectId
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (error) {
      // If parsing fails, log an error and respond accordingly
      console.error('Invalid ID format:', req.params.id);
      return res.status(400).json({ msg: 'Invalid ID format.' });
    }

    const getOne = await contactModel.findById(id);
    if (!getOne) {
      return res.status(404).json({ msg: `No contact with this id` });
    }
    res.status(200).json({ task: getOne });
  },

      getAllContact: async (req, res) => {
        try {
          const getAll = await contactModel.find();
          res.status(200).json({ // Added missing closing parenthesis
            task: getAll
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({ msg: 'Server Error' }); // Send a response in case of an error
        }
      },
     updateContact: async(req, res) => {
        const contactUpdate = await contactModel.findByIdAndUpdate(req.params.id, req.body,{set:true}) 
        try {
          if(!contactUpdate) {
            return res.status(400).json({msg:`No task with this id`})
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

