const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mongo-exercise",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected"))
.catch(err=>console.log("err",err));

//mongoose schemas
// string number array date buffer boolean objectID
const courseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        // match:/pattern/
    },
    catagory:{
        type:String,
        enum:["web","story","news","magazine"]
    },
    author:String,
    tags:{
        type:Array,
        validate:{
            validator: function(v){
                return v && v.length > 0;
            },
            message:"Each course should have at least one tag"
        }
    },
    date:{type:Date,default:Date.now},
    isPublished:Boolean,
    price:{
        type:Number,
        required:function(){
            return this.isPublished;
        },
        min:0,
        max:200
    }
})

const Course=mongoose.model("Course",courseSchema);

async function createCourse(){
    const course=new Course({
        name:"React JS 2",
        author:"Mosh Hamadani",
        tags:null,
        catagory:"web",
        isPublished:true,
        price:200
    });
    console.log("saving to mongo");
    // const isValid= course.validate(err=>if(err)return false);
    try{
        const result = await course.save();
        console.log("result saved ",result);
    }
    catch(err){
        console.log(err.message);
    }


}


createCourse();
