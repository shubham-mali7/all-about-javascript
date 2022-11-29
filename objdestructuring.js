const song = {
    songName : 'Man Mandira',
    singer : 'Shankar Mahadevan',
    movie : 'KKG',
    year : 2000,
    anotherSong : 'Breathless'
}

// let {songName , singer , movie} = song;
// console.log(movie);
// console.log(singer);
// console.log(songName);


// let {songName : newName, singer : newSinger} = song
// console.log(newName, newSinger);

let {songName , singer , movie,...newprops} = song;
console.log(song);
console.log(newprops);