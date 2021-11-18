// const geoCode = (address,callback) =>{
//     setTimeout(() =>{
//         const data = {
//             lat:0,
//             lon:0
//         }
//         callback(data)
//     },2000)
// }
// geoCode('Philadelphia', (data) =>{
//     console.log(data)
// })
const add = (x, y, callback) =>{
    setTimeout(() => {
        // s = x + y
        // callback(s)
        callback(x + y)
    }, 2000)
}
add(1,4,(s)=>{
    console.log(s)
})