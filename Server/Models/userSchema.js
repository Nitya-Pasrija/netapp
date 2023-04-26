const mongoose = require('mongoose');
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    name: { type: String, required: true },
    type: { type: String, enum: ['freelancer', 'client'], required: true },
    age: { type: Number },
    gender: { type: String },
    govtId: { type: String },
    about: { type: String },
    qualification: { type: String },
    fieldsOfInterest: { type: [String] },
    expertise: { type: [String] },
    experience: { type: Number },
    preferredLanguage: { type: String },
    recentWorkSamples: { type: [String] },
    contactInformation: { type: String },
    typeOfCompany: { type: String },
    termsAndPolicy: { type: String },
    termsOfServices: { type: String },
    areaOfWork: { type: String },
    legalDocuments: { type: [String] },
    fresherGigListing: { type: Boolean, default: false },

    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
  });
  
  userSchema.pre('save', function(next) {
    // Hide freelancer fields if type is 'client'
    if (this.type === 'client') {
      this.age = undefined;
      this.gender = undefined;
      this.govtId = undefined;
      this.about = undefined;
      this.qualification = undefined;
      this.fieldsOfInterest = undefined;
      this.expertise = undefined;
      this.experience = undefined;
      this.preferredLanguage = undefined;
      this.recentWorkSamples = undefined;
    }
    // Hide client fields if type is 'freelancer'
    if (this.type === 'freelancer') {
      this.contactInformation = undefined;
      this.typeOfCompany = undefined;
      this.termsAndPolicy = undefined;
      this.termsOfServices = undefined;
      this.areaOfWork = undefined;
      this.legalDocuments = undefined;
      this.fresherGigListing = undefined;
    }
    next();
  });

//hashing password for security
  // userSchema.pre('save',async function(next){
  //   if(this.isModified('password')){
  //       this.password=bcryptjs.hashSync(this.password,10);
  //   }
  //   next();
  // })
  
//generate token for user adds it to tokens array and returns generated token
userSchema.methods.generateToken = async function(){
    try {
    let generatedToken= jwt.sign({_id :this._id}, process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:generatedToken});
    await this.save();
    return generatedToken;
    } catch (error) {
    console.log(error);
    }
}

//create model
const Users=new mongoose.model("USER",userSchema);

module.exports =Users;
