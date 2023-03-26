console.log('***** Music Collection *****')

let collection = [];
console.log('Here is an empty array:', collection);
//this was the first feature; checking console that it's working

function addToCollection(title, artist, yearPublished) {
    console.log('Testing this function:');
        this.title = title;
        this.artist = artist;
        this.yearPublished = yearPublished;
   // }; // end object function 
    collection.push(Album);
    return Album;
}

console.log(addToCollection('Citrine', 'Hayley Kiyoko', 2016));
console.log(collection);
// this is my second iteration of the function; referring MDN lessons about constructor functions
// this isn't working; going back to previous iteration and trying again