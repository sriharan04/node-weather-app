console.log('Client side javascript is loaded')



const inputLocation=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
inputLocation.addEventListener('submit',(e)=>{
    e.preventDefault()
    const Location=search.value
    messageOne.textContent='Loading..'
    fetch('http://localhost:3000/weather?address='+Location).then((response)=>{
 response.json().then((data)=>{
     if (data.error)
     {
        messageOne.textContent=data.error
     }
     else
     {
     messageOne.textContent=data.location
     messageTwo.textContent=data.forecaste
     }
 })   
})
})