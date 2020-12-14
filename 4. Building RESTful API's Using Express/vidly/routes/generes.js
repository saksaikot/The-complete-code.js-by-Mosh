const express=require("express");
const Joi = require("joi");
const router=express.Router();

const ERROR404="404!! Requested resourse not found";
const ERROR400="400!! Bad requeste";
const genres = [
    { id: 1, name: "Comedy" },
    { id: 2, name: "Fantasy" },
    { id: 3, name: "Crime" },
    { id: 4, name: "Drama" },
    { id: 5, name: "Music" },
    { id: 6, name: "Adventure" },
    { id: 7, name: "History" },
    { id: 8, name: "Thriller" },
    { id: 9, name: "Animation" },
    { id: 10, name: "Family" },
    { id: 11, name: "Mystery" },
    { id: 12, name: "Biography" },
    { id: 13, name: "Action" },
    { id: 14, name: "Film-Noir" },
    { id: 15, name: "Romance" },
    { id: 16, name: "Sci-Fi" },
    { id: 17, name: "War" },
    { id: 18, name: "Western" },
    { id: 19, name: "Horror" },
    { id: 20, name: "Musical" },
    { id: 21, name: "Sport" }
];

router.get("/",(req,res)=>{
    res.send(genres);
});

router.get("/:id",(req,res)=>{
    const genre=genres.find(g=>g.id===Number(req.params.id));
    if(!genre) return res.status(404).send(ERROR404);
    res.send(genre);
});
router.put("/:id",(req,res)=>{
    const genre=genres.find(g=>g.id===Number(req.params.id));
    if(!genre) return res.status(404).send(ERROR404);

    const {error}=validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    genre.name=req.body.name;
    res.send(genre);
});

router.delete("/:id",(req,res)=>{
    const genre=genres.find(g=>g.id===Number(req.params.id));
    if(!genre) return res.status(404).send(ERROR404);

    const index=genres.indexOf(genre);
    genres.splice(index,1);
    res.send(genre);
});

router.post("/",(req,res)=>{
    const {error}=validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre={id:genres.length +1,name:req.body.name};
    genres.push(genre)
    res.send(genre);
});
function validateGenre(genre) {
    const scheme= Joi.object({
        name:Joi.string().min(3).required()
    })
    return scheme.validate(genre);
    
}
module.exports=router;