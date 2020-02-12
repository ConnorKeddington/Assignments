let fs = require('fs');

function getBeers() {

    return new Promise((resolve, reject) => {

        fs.readFile("beers.txt", "utf8", (error, data) => {

            if (error != null) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    }) 
}




module.exports = getBeers