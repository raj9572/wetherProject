const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 8000;
const hbs = require('hbs')

// public static path
const staticPath = path.join(__dirname,'../public')
app.use(express.static(staticPath))


// set views as hbs
app.set('view engine','hbs')
const views_path = path.join(__dirname,'../templetes/views')
app.set('views',views_path)
// console.log(path.join(__dirname,'../templetes/views'));

const partialsPath = path.join(__dirname,'../templetes/partials')
hbs.registerPartials(partialsPath)




// routing
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404error',{
        errormsg:'Opps page not found'
    })
})

app.listen(port,()=>{
    console.log(`express is running at ${port}`);
})