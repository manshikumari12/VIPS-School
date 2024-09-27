const mongoose = require("mongoose")
const ContactSchema = new mongoose.Schema ({
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        message: { type: String, required: true },
      }, { timestamps: true });
      
      const ContactModel = mongoose.model('Contact', ContactSchema);
      module.exports = {ContactModel};