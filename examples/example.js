const { image_search } = require('../src/api')

function print(results) {

    results.forEach(element => {
        console.log(element)
    });
}


//image search completes all iterations and returns the complete results at once
image_search({ query: "naruto", moderate: true }).then(results=>print(results))
