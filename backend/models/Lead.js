// import mongoose from "mongoose";

// const leadSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//       trim: true
//     },

//     phone: {
//       type: String,
//       required: true,
//       length: 10
//     },

//     loanType: {
//       type: String,
//       required: true
//     },

//     city: {
//       type: String,
//       required: true
//     },

//     status: {
//       type: String,
//       enum: ["Active", "Inactive"],
//       default: "Active"
//     }
//   },
//   {
//     timestamps: true 
//   }
// );

// export default mongoose.model("Lead", leadSchema);











import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    phone: {
      type: String,
      required: true,
      length: 10
    },

    loanType: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["New", "Converted", "Not Converted"],
      default: "New"
    },

    adminNote: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Lead", leadSchema);
