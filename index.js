const express=require('express');
const ejs=require('ejs');
const path=require('path');
const dotenv=require('dotenv')

dotenv.config();
const app=express();

//set engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'publics')));


app.get('/',(req,res)=>{
    res.render('home',{title:"TheJugaadChallenge"});
})

app.get('/contact',(req,res)=>{
    res.render('contact',{title:"Contact"});
})

//error handling route at the lowest
app.use((rer,res)=>{
    res.render('error',{title:"Error"});
})




const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server started listening on port ${PORT}`);
})