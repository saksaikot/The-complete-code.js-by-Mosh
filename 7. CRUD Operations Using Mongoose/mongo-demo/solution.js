const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercise",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to mongodb"))
.catch(err=>console.log("could not connect",err));

const schema= new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    isPublished:Boolean,
    date:{type:Date,default:Date.now()}
});

const Course=mongoose.model("Course",schema);

const getCourses=async()=>{
const course=await Course
                    .find({tags:"backend",isPublished:true})
                    .sort({name:1})
                    .select({name:1,author:1});
console.log("course finded", course);
}
getCourses();