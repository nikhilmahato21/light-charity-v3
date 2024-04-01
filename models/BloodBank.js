import mongoose from "mongoose";

const { Schema } = mongoose;

const BloodBank = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: String,
    donors: Array,
    inventory: [
      {
        bloodGroup: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          default: 0,
        },
      },
    ],
    location: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
      }
    }
  },
  { timestamps: true }
);


BloodBank.pre("save", function (next) {
  const defaultBloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  this.inventory = defaultBloodGroups.map((bloodGroup) => ({
    bloodGroup,
    quantity: 0,
  }));

  next();
});

BloodBank.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

BloodBank.index({location: "2dsphere"});

export default mongoose.model("BloodBank", BloodBank);
