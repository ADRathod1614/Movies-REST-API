const express=require('express');
const app=express()

const port=4000
//parse json using express
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const movies=[{
    id:"1",
    title:"Bruce lee the fighter",
    actor:"ram charan"
},
{
    id:"2",
    title:"hera pheri",
    actor:"akshay kumar"
},
{
    id:"3",
    title:"Alavaikunthapuramuloo",
    actor:"allu arjun"
}]

//get movie list
app.get('/movie',(req,res)=>{
    res.send(movies)
})

//post movie list
app.post('/movie',(req,res)=>{
    const movie=req.body
    console.log(movie)
    movies.push(movie)
    res.send('movie is added')
    console.log(movies)
})

//search for movie
app.get('/movie/:id',(req,res)=>{
    const id=req.params.id
    for(let movie of movies){
        if(movie.id===id){
            res.json(movie)
            console.log(movies)
            return
     
        } 
    }
    res.status(400).send('movie not found');
})

//delete movie
app.delete('/movie/:id',(req,res)=>{
    let id=req.params.id
    movies.filter((movie)=>{
        if(movie.id !== id)
        return true;
    }
     )
     res.send('movie is deleted')
   
})

app.listen(port,()=>{
    console.log(`sever listening at${port}`)
})