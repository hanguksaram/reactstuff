const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data')
        
        resolve('This is my first promise!')
    }, 5000)
    
})
console.log('before')
promise.then((data) => {console.log('1',data )
return new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data')
        
        resolve('This is my second promise!')
    }, 5000)
    
})}).then((str) => {
    console.log(str)
}).catch((error) => {
    console.log('error:' + error)
})




console.log('after')