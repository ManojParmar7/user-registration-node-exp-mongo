const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchemas = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    
    status: {
      type: String,
      required: true,
    },
   
    // IsActive : {
    //   type : Boolean,
    //   required : false,
    //   default : true
    // },
    CreatedBy: {
     type: Schema.Types.ObjectId,
    },
    UpdatedBy: {
     type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    collection: "User",
  }
);

module.exports = mongoose.model("User", UserSchemas);

