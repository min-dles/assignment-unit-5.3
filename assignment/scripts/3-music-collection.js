console.log('***** Music Collection *****')

let collection = [];
console.log('Here is an empty array:', collection);
//this was the first feature; checking console that it's working

function addToCollection(title, artist, yearPublished) {
    console.log('Album below was added to your collection:');
    let album = {
        title: title, // left of colon is Property, right is Parameter
        artist: artist,
        yearPublished: yearPublished
    } // end object 
    collection.push(album); // add object to collection array
    return album; // return the object in console
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

console.log('Testing collection array:', collection);

function showCollection(collection) {
    console.log('There are this many albums in the collection:', collection.length);
    for(let i = 0; i < collection.length; i++){
        console.log(collection[i].title + ' by ' + collection[i].artist + ', published in '+ collection[i].yearPublished);
   } // end for loop to each property of object in array 
} // end function showCollection

showCollection(collection);
// second iteration of this feature; used concatenation to log each property in the object in the array

function findByArtist(artist) {
    let artistMatches = [];
    for(let album of collection){
        if(album.artist === artist){
            artistMatches.push(album);
        } // end conditional checking for matches
    } // end loop
    return artistMatches; // return the array for all matches (empty if none)
} // end findbyArtist function

console.log('Test 1 findByArtist:', findByArtist('Bad Bunny')); // testing for multiple matches
console.log('Test 2 findByArtist:', findByArtist('Coco & Clair Clair')); // testing for artists not in collection
// (also tried adding the album to the collection via console, and it worked!)
console.log('Test 3 findByArtist:', findByArtist('Silverstein')); // testing for one match.

//STRETCH GOAL(S):
console.log('***STRETCH GOAL(S) BELOW***');

function search(album) {
    let searchFunctionMatches = [];
    for (let album of collection){
        if (album === album.artist || album === album.yearPublished){
            searchFunctionMatches.push(); // after testing, there needs to be a value pushed
        }
    } // end part one of the function; loop to check for matches
    if (album == null){
        return collection;
    } else {
    return searchFunctionMatches;
    } // end part two of the function; check for empty array
} // end search function 
    /*
    if (album == collection.album){
        searchFunctionMatches.push(collection.album);
    } else if (album === []){
        return collection;
    }
    return searchFunctionMatches;
}*/

// writing a test below:
console.log('Test 1 search:', search({artist: 'Ray Charles', year: 1957})); // empty array
console.log('Test 2 search:', search({artist: 'Hayley Kiyoko', year: 2018})); // empty array; need loop
console.log('Test 3 search:', search()); // testing empty parameter - should be collection
// after testing this code, I realize that a loop is needed, and a conditional || statement