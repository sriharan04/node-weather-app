const request=require('request')
const geocode=(address,callback)=>{
    url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?types=country&access_token=pk.eyJ1Ijoic3JpaGFyYW5qZXlhY2hhbmRyYW4iLCJhIjoiY2p0YmYxMzQxMGZkYTQ0cGZmMWYwMWwxMiJ9.MHbLtLeypPFRRv253ibFJA&limit=1'
request({url,json:true},(error,{body})=>{
    const lengthh=body.features.length
    console.log(lengthh)
    if(error){
        callback({error:'unable to connect'},undefined)
    }
    else if(body.features.length===0)
    {
       callback({error:'unable to find the location please search for other'},undefined)
    }
    else{
        callback(undefined,{
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name

        })
    }
})
}
module.exports=geocode