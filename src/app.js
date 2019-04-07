const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forcaste=require('./utils/forcaste')
const app=express()
const public=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
const port= process.env.PORT || 3000
app.use(express.static(public))

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.get('',(req,res)=>{
    res.render('index',{title:'Weater App',
                name:'Robot'})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About me',
                   name:'Robot'})
})
app.get('/help',(req,res)=>{
    res.render('help',{title:'Help',
                message:'This page helps for your quries',
                name:'Robot'                  
})
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            error:'you must enter a search string'
         } )
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
    if(error){
       return res.send(error)
    }
    forcaste(latitude,longitude,(error,forcastedata)=>{
        if(error){
           return res.send(error) 
        }
        res.send({
            forecaste:forcastedata,
            location:location,
            address:req.query.address
        })
    })

})
})
app.get('/help/*',(req,res)=>{
    
    res.render('error',{title:'Error:404 page',message:'The help article you are looking for is not found not found',name:'Robot'})
})

app.get('*',(req,res)=>{
    res.render('error',{title:'Error:404 page',message:'404 page not found',name:'Robot'})
})


app.listen(port,()=>{

    console.log('Server has been started')
})