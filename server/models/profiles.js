const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    gender:String,
    city:String,
    age:String,
    height:String,
    weight:String,
    company:String,
    course:String,
    coursetype:String,
    proffession:String,
    intrest:String,
    details:String ,
    hobbies:String,
    src:Image
});

const Profile =mongoose.model("Profile",profileSchema)

module.exports(Profile)

