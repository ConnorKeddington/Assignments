let getBeers = require('./fileio')

async function main() {
getBeers()
    .then((result) => {
    return JSON.parse(result)
  })
    .then(objBeers => {
    console.log(objBeers[0])
    throw new Error("This is a very bad error")
 })
    .catch(error => {
    console.log(error)
 })
    .finally(() =>{
    console.log("Finally Run")
 })

    let newBeers = await getBeers()

    console.log("New Beers")

    console.log(JSON.parse(newBeers))

    console.log("End of Program")
}


main()

//A promise is an object that puts out a value, but not immediately.
//Promises are used when we have multiple operations going.
//Promises help you handle multiple operations and identify errors easier
