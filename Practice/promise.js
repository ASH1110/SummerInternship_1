var userLogged = true
var promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(userLogged)
        {
            resolve();
        }
        else
        {
            reject();
        }
    },1000)
})
setTimeout(()=>{
    userLogged = false;
},500)
promise.then(()=>{
    console.log("User Logged In")
}).catch(()=>{
    console.log("User Not Logged In")
})