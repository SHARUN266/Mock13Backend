const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require("./Models/User.Schema")
const PORT=process.env.PORT||8080;
app.use(express.json())
app.use(cors())

app.get("/",async (req,res)=>{
    let user=await UserModel.find()
    res.status(200).send(user)
})
app.post("/",async(req,res)=>{
    const {name,level,score}=req.body

    try{
        let user=new UserModel({name,level,score})
        await user.save()
        res.status(200).send(user)
    }catch(e){
        res.status(404).send(e.message)
    }


})
mongoose.connect("mongodb+srv://sharun:123@atlascluster.qwa1fxi.mongodb.net/mock13?retryWrites=true&w=majority").then(()=>{
    app.listen(PORT,()=>{
        console.log(`Your app is running now on port no. ${PORT}`)
    })
})