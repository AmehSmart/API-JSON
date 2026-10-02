// console.log("API/JSON/index.js loaded");

// fetch("https://dog.ceo/api/breeds/image/random")
// .then(res => res.json())
// .then(data => console.log(data));
// console.log("bored API call");
// fetch("https://bored-api.appbrewery.com/random")
// .then(res => res.json())
// .then(data => console.log(data))

// here we are going to do the modern fetching of data using async/await

// const response = await fetch("https://dog.ceo/api/breeds/image/random");
// const data = await response.json();
// console.log(data);

// Using await in the function 
// async function getData(){

//     const response = await fetch("https://ored-api.appbrewery.com/random")// here is a promise that we are waiting to resolve
//     const data = await response.json()// here is a promise that we are waiting to resolve
//     // here i will handle the rejected promise using try catch block

//     .catch(err => {
//         console.log(`Error: ${err}`);
//     } )
    
//     console.log(data)


// }
// getData()

async function getData() {
    try{
const response = await fetch("https://bored-api.appbrewery.com/random", {method: "GET"})// here is a promise that we are waiting to resolve
// should in case the promise is successful but the response is not ok then we should throw an error
if(!response.ok){
    throw new Error('There was a problem with the API call');
}
const data = await response.json()
console.log(data)
    } catch(err){
        // the error is being catch here 
        console.log(`Error: ${err}`);
    }
    finally{
        console.log("API call completed");
    }
}

getData()

async function addData(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method:"POST",
            body : JSON.stringify({
                title: "The big hail",
                body: "The testing of young life",
                userId: 102
            }),
             headers: {
                        'Content-type': 'application/json'
                    },
        })
        if(!res.ok){
            throw new Error("There was a problem")
        }
        const data = res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }finally{
        console.log ("Data is being uploaded")
    }
}

addData()

const promise = new Promise((resolve, reject)=> {
    const success = Math.random() > 0.5
    if (success) { 
        resolve('Operation successful')
    } else {
        reject('Operation failed')
    }
})

// promise.then(response => console.log(response))

try {
    const response = await promise
    console.log(response)
} catch(err) {
    console.log(err)
}

// function loadImage(url){
//     return new Promise((resolve, reject)=>{
//         if(url){
//              img.src = url
//             const img = new Image()
//             img.onload = ()=> resolve(img)
//             img.onerror = ()=> reject(new Error('Load failed'))
           
//         }
//     })
// }

// try{
//     const res = await loadImage("https://dog.ceo/api/breeds/image/random")
//     console.log(res)
//     document.getElementById('img-container').appendChild(res)
// } catch(err){
//     console.log(err)
// }


// callback hell
// function uploadfile(callback){
//     console.log("step 1: Uploading file...")
//     setTimeout(()=>{
//         callback()
//     },1000)
// }
// function processfile(callback){
//     console.log("step 2: Processing file...")
//     setTimeout(()=>{
//         callback()
//     },1000)
// }
// function notifyuser(callback){
//     console.log("step 3: Notifying user...")
//     setTimeout(()=>{
//         callback()
//     },1000)
// }

// uploadfile(()=>{processfile(()=>{notifyuser(()=>{
//     console.log('All steps completed!')
// })})})
function uploadfile(){
    console.log("step 1: Uploading file...")
    return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                        resolve()
                    },1000)
    })
    
}
function processfile(){
    console.log("step 2: Processing file...")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
               resolve()
            },1000)
    })
}
function notifyuser(callback){
    console.log("step 3: Notifying user...")
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()
    },1000)
  })
}

try{
    await uploadfile()
    await processfile()
    await notifyuser()
    console.log('All steps completed!')
}catch(err){
    console.log(err)
}