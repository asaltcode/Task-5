//1. For the given JSON iterate over all for loops (for, forin , for of, forEach)
let parsons = [{
    "name":"jone",
    "age":25,
    "gender":"male",
    "state": "tamilnadu",
    "country":"indian"
},
{
    "name":"main",
    "age":30,
    "gender":"male",
    "state": "tamilnadu",
    "country":"china"
},
{
    "name":"ram",
    "age":35,
    "gender":"male",
    "state": "tamilnadu",
    "country":"australia"
},
{
    "name":"vasu",
    "age":25,
    "gender":"male",
    "state": "tamilnadu",
    "country":"canaea"
}]
console.log("This is original object", parsons)
//  for of 
console.log("1. This is for of loop:-")
for(i of parsons){
    console.log(`Name: ${i.name},  Age: ${i.age}`)
}

//  for in 
console.log("")
console.log("2. this is for in loop:-")
for(e in parsons){
    console.log(`Name: ${parsons[e].name},  Age: ${parsons[e].age}`)
}


