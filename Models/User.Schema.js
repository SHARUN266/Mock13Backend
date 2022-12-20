const {Schema,model}=require("mongoose")

const UserModel=new Schema ({
    name:String,
    level:String,
    score:Number

},
{
    versionKey:false
})

const User=model("user",UserModel)
module.exports=User