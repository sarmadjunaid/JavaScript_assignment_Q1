
const make_album = (artist, title, num_tracks) => {
    const tracks = num_tracks || 0

    if (num_tracks) {
        return {
            "title": title,
            "artist": artist,
            "tracks": num_tracks
        }    
    }

    return {
        "title": title,
        "artist": artist
    }
}

album1 = make_album("Sarmad", "The new age")
album2 = make_album("Junaid", "The Meta Music")
album3 = make_album("Khan", "Dynasty")
album4 = make_album("Niazi", "Dictator", 4)

console.log(album1)
console.log(album2)
console.log(album3)
console.log(album4)

