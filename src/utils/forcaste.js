const request=require('request')
const forcaste=(latitute,longitude,callback)=>{
    url='https://api.darksky.net/forecast/d98ee5096d518901d267a993f5d6356b/'+latitute+','+longitude
    request({url,json:true},(error,{body})=>{
       if(error){
           callback('unable to connect',undefined)
       }
       else if(body.error){
           callback('unbale to find the location',undefined)
       }
       else
       {
       callback(undefined,
           body.currently.temperature+
           body.currently.precipProbability+
           body.daily.data[0].summary
       )
       }
    })
}

module.exports=forcaste