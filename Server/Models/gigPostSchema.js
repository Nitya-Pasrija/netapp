const mongoose = require('mongoose');
//const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');

const gigPostSchema = new mongoose.Schema({
    gigName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    workDesc: { type: String, required: true },
    deadline: { type: Date },
    remuneration: {
        type: Number,
        required: true,
    },
    imageURL: {type:String, default:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?b=1&s=170667a&w=0&k=20&c=GnW36mPEYr3TRpPZNLtT75u8v2HOczvRxGckWUN3hVg=" },
    fresherSpecific: { type: String}
});


// Remove unique index on `gigName` field
gigPostSchema.index({ gigName: 1 }, { unique: false });

//create model
const Gigs = new mongoose.model("GIGS", gigPostSchema);

module.exports = Gigs;
