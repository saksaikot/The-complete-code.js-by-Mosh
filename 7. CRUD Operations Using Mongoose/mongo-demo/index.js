const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mongo-exercise",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected"))
.catch(err=>console.log("err",err));

//mongoose schemas
// string number array date buffer boolean objectID
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})

const Course=mongoose.model("Course",courseSchema);

async function createCourse(){
    const course=new Course({
        name:"React JS",
        author:"Mosh Hamadani",
        tags:["React","JS","FrontEnd"],
        isPublished:true
    });
    console.log("saving to mongo");
    const result = await course.save();
    console.log("result saved ",result);

}
// createCourse();
const getCourses=async()=>{

//comparision operators
// gt gte lt lte eq ne in nin
// find({price:{$gt:10,$lt:20}})

// find({price:{$in:[20,15,123]}})


//and or  logical operator
// find().or([{price:10},{isPublished:true}])

//pagination
//const pagenumber=2,pageSize=10
//.skip((pageNumber -1) * pageSize);
//.limit(pageSize)

    const courses=await Course
                .find({tags:"backend",isPublished:true})
                .limit(10)
                .sort({name:1})
                .select({name:1,author:1});
    console.log(courses);
}
// getCourses();
const updateCourse=async id=>{

    //query and update method
// const course=await Course.findById(id);
// course.set({
//     isPublished:false,
//     author:"saikot khan"
// });
// const result= await course.save();


//direct update method

// const result=await Course.update({_id:id},{
//     $set:{
//         author:"Sultan Ahmad Khan",
//         isPublished:true
//     }
// });

// direct update with document
const course=await Course.findByIdAndUpdate(id,{
    $set:{
        author:"Sultan Ahmad Khan",
        isPublished:true
    }
},{new:true});


console.log(course);

}
// updateCourse("5fe1902e9b659207680ebc0c");

const deleteCourse=async id=>{

// const result= await Course.deleteOne({_id:id});
const course = await Course.findByIdAndDelete(id);

console.log(course);

}

deleteCourse("5fe03b8a5e2a3e17c096da9f");