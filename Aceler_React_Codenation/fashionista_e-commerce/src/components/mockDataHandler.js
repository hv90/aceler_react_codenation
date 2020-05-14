const mockData = require ('./mockData.json');

const collection = new Set();

for(let i = 0; i < mockData.length; i++){
    collection.add(mockData[i].name.match(/[\p{L}]+ /iu)[0])
}
console.log(collection)