console.log('***** Music Collection *****')

let collection = [];
console.log('Here is an empty array:', collection);
//this was the first feature; checking console that it's working

function addToCollection(title, artist, yearPublished) {
    console.log('Testing addToCollection, return value below:');
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

console.log(addToCollection('Expectations', 'Hayley Kiyoko', 2018));
console.log(addToCollection('Un Verano Sin Ti', 'Bad Bunny', 2022));
console.log(addToCollection('Discovering the Waterfront', 'Silverstein', 2006));
console.log(addToCollection('blue water road', 'Kehlani', 2022));
console.log(addToCollection('Isolation', 'Kali Uchis', 2018));
console.log(addToCollection('YHLQMDLG', 'Bad Bunny', 2020));
// completed tests; also tested collection variable in the console