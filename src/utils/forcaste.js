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
           console.log(body.daily.data[0])
       callback(undefined,
           'The tempersture is'+body.currently.temperature+'The high today is'+body.daily.data[0].temperatureHigh+' with a low of'+body.daily.data[0].temperatureLow +' and there is  '+
           body.currently.precipProbability+'%'+
           body.daily.data[0].summary
       )
       }
    })
}

module.exports=forcaste