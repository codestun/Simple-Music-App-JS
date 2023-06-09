// Array of Albums taken from Spotify API
let albums = [
  {
    name: "1989",
    artist: "Taylor Swift",
    album_type: "Pop",
    release_date_precision: "2014-10-27",
    tracks: ["Welcome to New York", "Blank Space", "Style", "Out of the Woods"]
  },
  {
    name: "The Eminem Show",
    artist: "Eminem",
    album_type: "Hip-Hop",
    release_date_precision: "2002-05-28",
    tracks: ["White America", "Cleanin' Out My Closet", "Without Me", "Sing for the Moment"]
  },
  {
    name: "Hybrid Theory",
    artist: "Linkin Park",
    album_type: "Alternative",
    release_date_precision: "2000-10-24",
    tracks: ["Papercut", "One Step Closer", "With You", "Points of Authority", "Crawling"]
  },
  {
    name: "Bad",
    artist: "Michael Jackson",
    album_type: "Pop",
    release_date_precision: "1987-08-31",
    tracks: ["Bad", "The Way You Make Me Feel", "Man in the Mirror", "Smooth Criminal"]
  },
  {
    name: "Between Two Shores",
    artist: "Glen Hansard",
    album_type: "Folk",
    release_date_precision: "2018-01-19",
    tracks: ["Roll On Slow", "Why Woman", "Wheels on Fire", "Wreckless Heart", "Movin' On", "Setting Forth", "Lucky Man", "One of Us Must Lose", "Your Heart's Not In It", "Time Will Be the Healer"]
  },
  {
    name: "Thriller",
    artist: "Michael Jackson",
    album_type: "Pop",
    release_date_precision: "1982-11-30",
    tracks: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It", "Billie Jean"]
  },
  {
    name: "Rumours",
    artist: "Fleetwood Mac",
    album_type: "Rock",
    release_date_precision: "1977-02-04",
    tracks: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop"]
  },
  {
    name: "Back in Black",
    artist: "AC/DC",
    album_type: "Rock",
    release_date_precision: "1980-07-25",
    tracks: ["Hells Bells", "Shoot to Thrill", "Back in Black", "You Shook Me All Night Long"]
  },
  {
    name: "21",
    artist: "Adele",
    album_type: "Pop",
    release_date_precision: "2011-01-24",
    tracks: ["Rolling in the Deep", "Rumour Has It", "Turning Tables", "Someone Like You"]
  }
];

// Add some HTML via Javascript
document.write(`<ul class="text-center text-lg text-gray-700">`);
let maxTracks = 0;
let albumWithMaxTracks = '';

// Return a list with all artists and album names
for (let i = 0; i < albums.length; i++) {
  if (albums[i].name && albums[i].artist) {
    document.write(`<li class="bg-blue-200">${albums[i].artist} - ${albums[i].name}</li>`);

    // Check for the album with the highest number of tracks
    if (albums[i].tracks && albums[i].tracks.length > maxTracks) {
      maxTracks = albums[i].tracks.length;
      albumWithMaxTracks = albums[i].name;
    }
  }
}
// Print out the result of the highest number of tracks
if (albumWithMaxTracks) {
  document.write(`<br>Wow, ${albumWithMaxTracks} has <strong>${maxTracks}</strong> tracks!`);
}
document.write(`</ul>`);
