import mongoose from "mongoose";

const Donor = new mongoose.Schema(
    {
            email:{type: String },
            name: {type: String },
            password: {type: String},
            number:{type: String },
            address: {type: String  },
            dob: {type: Date},
            bloodGroup: {
                type:String,
                enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            },
            donated: Number,
            donatedAt:Array,
            date: Date,
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


    {timestamps: true},
)

Donor.index({location: "2dsphere"});

Donor.methods.toJSON = function(){
    let obj = this.toObject();
    delete obj.password
    return obj;
   }

export default mongoose.model("Donor", Donor);