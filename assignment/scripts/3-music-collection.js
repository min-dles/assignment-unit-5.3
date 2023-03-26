console.log('***** Music Collection *****')

let collection = [];
console.log('Here is an empty array:', collection);
//this was the first feature; checking console that it's working

function addToCollection(title, artist, yearPublished) {
    console.log('Testing this function:');
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

console.log(addToCollection('Citrine', 'Hayley Kiyoko', 2016));
console.log(collection);
// third iteration; restructured from iteration one to be clearer for my purposes