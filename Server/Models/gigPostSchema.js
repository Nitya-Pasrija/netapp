const mongoose = require('mongoose');
//const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');

const gigPostSchema = new mongoose.Schema({
    gigName: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    workDesc: { type: String, required: true },
    deadline: { type: Number },
    details: { type: String },
    remuneration: {
        type: Number,
        required: true,
    },
    fresherSpecific: { type: Boolean, default: false }
});


// Remove unique index on `gigName` field
gigPostSchema.index({ gigName: 1 }, { unique: false });

//create model
const Gigs = new mongoose.model("GIGS", gigPostSchema);

module.exports = Gigs;
