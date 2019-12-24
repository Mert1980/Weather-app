
// setTimeout is a Node.js API and it is asynchronious
setTimeout(() => {
  console.log("Two seconds are up!"), 2000;
});

const names = ["Mert", "Asena", "Almira", "Kaan"];
// Array methods are syncronous 
const shortNames = names.filter((name)=>{
    return name.length <= 4;
})

// console.log(shortNames);

const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data)
    }, 2000)
}
geocode('leuven', (data) => {
    console.log(data)
})

