const CONFIG = {
    ADMIN_CREDENTIALS: {
        username: 'admin',
        password: 'admin123'
    },
    FONT_SIZES: {
        small: 'font-small',
        medium: 'font-medium',
        large: 'font-large'
    },
    STORAGE_KEYS: {
        FAVORITES: 'plusflix_favorites',
        FONT_SIZE: 'plusflix_font_size',
        ADMIN_SESSION: 'plusflix_admin_session',
        USER_ALIAS: 'plusflix_user_alias',
        CHAT_MESSAGES: 'plusflix_chat_messages',
        MOVIE_RATINGS: 'plusflix_movie_ratings',
        COMMENTS: 'plusflix_comments',
        LANGUAGE: 'plusflix_language',
        FILTERS_VISIBLE: 'plusflix_filters_visible'
    },
    CHAT_ROOMS: [
        {
            id: 'action',
            name: '🎬 Action Fans',
            description: 'Discussions about action movies, explosions and car chases',
            icon: 'fas fa-explosion'
        },
        {
            id: 'comedy',
            name: '😂 Comedy Lovers',
            description: 'Let\'s laugh together!',
            icon: 'fas fa-laugh'
        },
        {
            id: 'sci-fi',
            name: '🚀 Sci-Fi Fans',
            description: 'Space, technology, future',
            icon: 'fas fa-robot'
        },
        {
            id: 'drama',
            name: '🎭 Drama Connoisseurs',
            description: 'Deep discussions about dramatic films',
            icon: 'fas fa-masks-theater'
        },
        {
            id: 'horror',
            name: '👻 Horror Fans',
            description: 'For those who like to be scared',
            icon: 'fas fa-ghost'
        }
    ],
    PLATFORMS: {
        netflix: { 
            name: 'Netflix', 
            icon: 'fab fa-netflix', 
            color: '#E50914',
            class: 'netflix'
        },
        hbo: { 
            name: 'HBO Max', 
            icon: 'fas fa-tv', 
            color: '#00A8E1',
            class: 'hbo'
        },
        disney: { 
            name: 'Disney+', 
            icon: 'fab fa-disney', 
            color: '#0063E5',
            class: 'disney'
        },
        amazon: { 
            name: 'Prime Video', 
            icon: 'fab fa-amazon', 
            color: '#00A8E1',
            class: 'amazon'
        },
        apple: { 
            name: 'Apple TV+', 
            icon: 'fab fa-apple', 
            color: '#000000',
            class: 'apple'
        }
    }
};

// Movie data - Multilingual database
const MOVIE_DATA = {
    en: [
        {
            id: 1,
            title: "Inception",
            year: 2010,
            genre: ["Action", "Sci-Fi", "Thriller"],
            duration: "2h 28min",
            director: "Christopher Nolan",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            rating: 4.8,
            ratings: { 5: 120, 4: 45, 3: 15, 2: 5, 1: 2 },
            platforms: ["netflix", "hbo"],
            poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
        },
        {
            id: 2,
            title: "The Matrix",
            year: 1999,
            genre: ["Action", "Sci-Fi"],
            duration: "2h 16min",
            director: "The Wachowskis",
            description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
            rating: 4.7,
            ratings: { 5: 98, 4: 32, 3: 10, 2: 3, 1: 1 },
            platforms: ["netflix", "hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/7u3pxc0KjwxXST9CPtcGggdT9M3.jpg",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
        },
        {
            id: 3,
            title: "Forrest Gump",
            year: 1994,
            genre: ["Drama", "Comedy", "Romance"],
            duration: "2h 22min",
            director: "Robert Zemeckis",
            description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
            rating: 4.9,
            ratings: { 5: 150, 4: 28, 3: 5, 2: 1, 1: 0 },
            platforms: ["netflix", "disney"],
            poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/9s6hWwSoD3tPnhR9p8L9zM8jE6L.jpg",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
        },
        {
            id: 4,
            title: "The Shawshank Redemption",
            year: 1994,
            genre: ["Drama"],
            duration: "2h 22min",
            director: "Frank Darabont",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            rating: 4.9,
            ratings: { 5: 145, 4: 30, 3: 8, 2: 2, 1: 0 },
            platforms: ["hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
            cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
        },
        {
            id: 5,
            title: "Avengers: Endgame",
            year: 2019,
            genre: ["Action", "Sci-Fi", "Adventure"],
            duration: "3h 2min",
            director: "Anthony and Joe Russo",
            description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
            rating: 4.5,
            ratings: { 5: 200, 4: 75, 3: 20, 2: 8, 1: 5 },
            platforms: ["disney", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
        },
        {
            id: 6,
            title: "The Departed",
            year: 2006,
            genre: ["Drama", "Crime", "Thriller"],
            duration: "2h 31min",
            director: "Martin Scorsese",
            description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
            rating: 4.6,
            ratings: { 5: 85, 4: 40, 3: 12, 2: 5, 1: 2 },
            platforms: ["netflix"],
            poster: "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8w4R662Yo1YsjX8J.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/a4H4E5qMfLc6UqWpVZ3W4QzQg8L.jpg",
            cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
        },
        {
            id: 7,
            title: "Star Wars: The Force Awakens",
            year: 2015,
            genre: ["Sci-Fi", "Adventure", "Action"],
            duration: "2h 18min",
            director: "J.J. Abrams",
            description: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
            rating: 4.3,
            ratings: { 5: 120, 4: 50, 3: 25, 2: 10, 1: 5 },
            platforms: ["disney"],
            poster: "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVwwUoIiK3LL2O.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/cIjY2WyOcU52L3kPJt3qjG9w6rB.jpg",
            cast: ["Daisy Ridley", "John Boyega", "Oscar Isaac"]
        },
        {
            id: 8,
            title: "Knives Out",
            year: 2019,
            genre: ["Comedy", "Crime", "Mystery"],
            duration: "2h 10min",
            director: "Rian Johnson",
            description: "A detective investigates the death of the patriarch of an eccentric, combative family.",
            rating: 4.4,
            ratings: { 5: 95, 4: 35, 3: 15, 2: 5, 1: 3 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/fK8DD1N8ZIcKWDhwC4qD7xJ5L8F.jpg",
            cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"]
        },
        {
            id: 9,
            title: "Interstellar",
            year: 2014,
            genre: ["Sci-Fi", "Drama", "Adventure"],
            duration: "2h 49min",
            director: "Christopher Nolan",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            rating: 4.8,
            ratings: { 5: 180, 4: 45, 3: 20, 2: 8, 1: 3 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
            cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
        },
        {
            id: 10,
            title: "Joker",
            year: 2019,
            genre: ["Drama", "Crime", "Thriller"],
            duration: "2h 2min",
            director: "Todd Phillips",
            description: "A mentally troubled comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
            rating: 4.6,
            ratings: { 5: 220, 4: 65, 3: 25, 2: 10, 1: 8 },
            platforms: ["hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
            cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
        },
        {
            id: 11,
            title: "The Godfather",
            year: 1972,
            genre: ["Drama", "Crime"],
            duration: "2h 55min",
            director: "Francis Ford Coppola",
            description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
            rating: 4.9,
            ratings: { 5: 250, 4: 40, 3: 5, 2: 2, 1: 1 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
            cast: ["Marlon Brando", "Al Pacino", "James Caan"]
        },
        {
            id: 12,
            title: "Pulp Fiction",
            year: 1994,
            genre: ["Crime", "Drama"],
            duration: "2h 34min",
            director: "Quentin Tarantino",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
            rating: 4.8,
            ratings: { 5: 200, 4: 50, 3: 15, 2: 5, 1: 2 },
            platforms: ["netflix", "hbo"],
            poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
            cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
        },
        {
            id: 13,
            title: "The Dark Knight",
            year: 2008,
            genre: ["Action", "Crime", "Drama"],
            duration: "2h 32min",
            director: "Christopher Nolan",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            rating: 4.9,
            ratings: { 5: 280, 4: 35, 3: 8, 2: 2, 1: 1 },
            platforms: ["hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0JW.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
            cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
        },
        {
            id: 14,
            title: "Goodfellas",
            year: 1990,
            genre: ["Biography", "Crime", "Drama"],
            duration: "2h 25min",
            director: "Martin Scorsese",
            description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
            rating: 4.8,
            ratings: { 5: 190, 4: 45, 3: 12, 2: 4, 1: 1 },
            platforms: ["netflix", "hbo"],
            poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/7c9UVPPiTPltoux99wHcFYugS2h.jpg",
            cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"]
        },
        {
            id: 15,
            title: "Spirited Away",
            year: 2001,
            genre: ["Animation", "Adventure", "Family"],
            duration: "2h 5min",
            director: "Hayao Miyazaki",
            description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            rating: 4.8,
            ratings: { 5: 210, 4: 40, 3: 10, 2: 3, 1: 1 },
            platforms: ["netflix"],
            poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
            cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"]
        },
        {
            id: 16,
            title: "Venom",
            year: 2018,
            genre: ["Action", "Sci-Fi", "Thriller"],
            duration: "1h 52min",
            director: "Ruben Fleischer",
            description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
            rating: 3.7,
            ratings: { 5: 80, 4: 100, 3: 120, 2: 40, 1: 15 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
            cast: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"]
        },
        {
            id: 17,
            title: "The Twilight Saga: Eclipse",
            year: 2010,
            genre: ["Drama", "Fantasy", "Romance"],
            duration: "2h 4min",
            director: "David Slade",
            description: "As a string of mysterious killings grips Seattle, Bella, whose high school graduation is fast approaching, is forced to choose between her love for vampire Edward and her friendship with werewolf Jacob.",
            rating: 3.5,
            ratings: { 5: 60, 4: 80, 3: 150, 2: 50, 1: 20 },
            platforms: ["netflix"],
            poster: "https://image.tmdb.org/t/p/w500/3mwkHlVhrCQf7X8RfzQe9hY5qJN.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/6aB5vXFp89GZ2JwK2RqNcGv9VqN.jpg",
            cast: ["Kristen Stewart", "Robert Pattinson", "Taylor Lautner"]
        },
        {
            id: 18,
            title: "The Lost City",
            year: 2022,
            genre: ["Action", "Adventure", "Comedy"],
            duration: "1h 52min",
            director: "Adam Nee, Aaron Nee",
            description: "A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.",
            rating: 3.8,
            ratings: { 5: 70, 4: 110, 3: 130, 2: 30, 1: 10 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/aoJxJ7mz3kF6lYqQYQvZQvZQvZQ.jpg",
            cast: ["Sandra Bullock", "Channing Tatum", "Daniel Radcliffe"]
        },
        {
            id: 19,
            title: "Fantastic Beasts: The Crimes of Grindelwald",
            year: 2018,
            genre: ["Adventure", "Family", "Fantasy"],
            duration: "2h 14min",
            director: "David Yates",
            description: "The second installment of the Fantastic Beasts series featuring the adventures of magizoologist Newt Scamander.",
            rating: 3.6,
            ratings: { 5: 90, 4: 100, 3: 140, 2: 40, 1: 15 },
            platforms: ["hbo"],
            poster: "https://image.tmdb.org/t/p/w500/f4oZTlGrGZ8i2ZnR8cFzQnN9k6F.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
            cast: ["Eddie Redmayne", "Katherine Waterston", "Johnny Depp"]
        },
        {
            id: 20,
            title: "The Hangover Part III",
            year: 2013,
            genre: ["Comedy", "Crime"],
            duration: "1h 40min",
            director: "Todd Phillips",
            description: "When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the run.",
            rating: 3.4,
            ratings: { 5: 50, 4: 80, 3: 160, 2: 60, 1: 25 },
            platforms: ["amazon"],
            poster: "https://image.tmdb.org/t/p/w500/3tLYWgT0YqG7QqQkQkQkQkQkQkQ.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/9QoXpQoXpQoXpQoXpQoXpQoXpQo.jpg",
            cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
        },
        {
            id: 21,
            title: "Batman & Robin",
            year: 1997,
            genre: ["Action", "Sci-Fi"],
            duration: "2h 5min",
            director: "Joel Schumacher",
            description: "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
            rating: 2.4,
            ratings: { 5: 20, 4: 30, 3: 60, 2: 150, 1: 120 },
            platforms: ["hbo"],
            poster: "https://image.tmdb.org/t/p/w500/79AYCcxw3k4bhYmWgY7tNpRjQ3C.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/qrZqZrZqZrZqZrZqZrZqZrZqZrZ.jpg",
            cast: ["George Clooney", "Arnold Schwarzenegger", "Chris O'Donnell"]
        },
        {
            id: 22,
            title: "Cats",
            year: 2019,
            genre: ["Comedy", "Drama", "Fantasy"],
            duration: "1h 50min",
            director: "Tom Hooper",
            description: "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new life.",
            rating: 2.1,
            ratings: { 5: 10, 4: 15, 3: 40, 4: 100, 1: 200 },
            platforms: ["netflix"],
            poster: "https://image.tmdb.org/t/p/w500/vFbGpFbGpFbGpFbGpFbGpFbGpFb.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/wXqNwXqNwXqNwXqNwXqNwXqNwXq.jpg",
            cast: ["James Corden", "Judi Dench", "Jason Derulo"]
        },
        {
            id: 23,
            title: "The Last Airbender",
            year: 2010,
            genre: ["Action", "Adventure", "Family"],
            duration: "1h 43min",
            director: "M. Night Shyamalan",
            description: "Follows the adventures of Aang, a young successor to a long line of Avatars, who must master all four elements and stop the Fire Nation from enslaving the Water Tribes and the Earth Kingdom.",
            rating: 2.6,
            ratings: { 5: 30, 4: 40, 3: 80, 2: 120, 1: 100 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/1TjJY1TjJY1TjJY1TjJY1TjJY1T.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/2UkZ2UkZ2UkZ2UkZ2UkZ2UkZ2Uk.jpg",
            cast: ["Noah Ringer", "Nicola Peltz", "Jackson Rathbone"]
        },
        {
            id: 24,
            title: "Jack and Jill",
            year: 2011,
            genre: ["Comedy"],
            duration: "1h 31min",
            director: "Dennis Dugan",
            description: "Family guy Jack Sadelstein prepares for the annual event he dreads: the Thanksgiving visit of his fraternal twin sister, the needy and passive-aggressive Jill.",
            rating: 2.3,
            ratings: { 5: 15, 4: 25, 3: 50, 2: 100, 1: 150 },
            platforms: ["amazon"],
            poster: "https://image.tmdb.org/t/p/w500/3vZ3vZ3vZ3vZ3vZ3vZ3vZ3vZ3v.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/4wXr4wXr4wXr4wXr4wXr4wXr4wX.jpg",
            cast: ["Adam Sandler", "Katie Holmes", "Al Pacino"]
        },
        {
            id: 25,
            title: "Movie 43",
            year: 2013,
            genre: ["Comedy"],
            duration: "1h 34min",
            director: "Multiple directors",
            description: "A series of interconnected short films follows a washed-up producer as he pitches insane story lines featuring some of the biggest stars in Hollywood.",
            rating: 2.5,
            ratings: { 5: 25, 4: 35, 3: 70, 2: 110, 1: 90 },
            platforms: ["hbo"],
            poster: "https://image.tmdb.org/t/p/w500/5yG5yG5yG5yG5yG5yG5yG5yG5y.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/6zH6zH6zH6zH6zH6zH6zH6zH6z.jpg",
            cast: ["Hugh Jackman", "Kate Winslet", "Halle Berry"]
        },
        {
            id: 26,
            title: "Parasite",
            year: 2019,
            genre: ["Drama", "Thriller"],
            duration: "2h 12min",
            director: "Bong Joon Ho",
            description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
            rating: 4.9,
            ratings: { 5: 260, 4: 30, 3: 5, 2: 1, 1: 0 },
            platforms: ["netflix", "hbo"],
            poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/6ZvZ6ZvZ6ZvZ6ZvZ6ZvZ6ZvZ6Zv.jpg",
            cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
        },
        {
            id: 27,
            title: "The Room",
            year: 2003,
            genre: ["Drama"],
            duration: "1h 39min",
            director: "Tommy Wiseau",
            description: "In San Francisco, an amiable banker's seemingly perfect life is turned upside down when his deceitful fiancée unknowingly creates a rift in their relationship.",
            rating: 2.0,
            ratings: { 5: 5, 4: 10, 3: 20, 2: 50, 1: 300 },
            platforms: ["amazon"],
            poster: "https://image.tmdb.org/t/p/w500/8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z8Z.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/9aX9aX9aX9aX9aX9aX9aX9aX9aX.jpg",
            cast: ["Tommy Wiseau", "Juliette Danielle", "Greg Sestero"]
        },
        {
            id: 28,
            title: "Dune",
            year: 2021,
            genre: ["Sci-Fi", "Adventure"],
            duration: "2h 35min",
            director: "Denis Villeneuve",
            description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
            rating: 4.5,
            ratings: { 5: 180, 4: 70, 3: 25, 2: 8, 1: 3 },
            platforms: ["hbo"],
            poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIekC.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/wvPwvPwvPwvPwvPwvPwvPwvPwvP.jpg",
            cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"]
        },
        {
            id: 29,
            title: "Free Guy",
            year: 2021,
            genre: ["Action", "Adventure", "Comedy"],
            duration: "1h 55min",
            director: "Shawn Levy",
            description: "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
            rating: 4.2,
            ratings: { 5: 140, 4: 90, 3: 35, 2: 10, 1: 4 },
            platforms: ["disney"],
            poster: "https://image.tmdb.org/t/p/w500/xmbU4JTUn9q4VzZQnZQnZQnZQnZ.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/yDfYyDfYyDfYyDfYyDfYyDfYyDf.jpg",
            cast: ["Ryan Reynolds", "Jodie Comer", "Taika Waititi"]
        },
        {
            id: 30,
            title: "The Incredibles",
            year: 2004,
            genre: ["Animation", "Action", "Adventure"],
            duration: "1h 55min",
            director: "Brad Bird",
            description: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
            rating: 4.8,
            ratings: { 5: 210, 4: 40, 3: 12, 2: 3, 1: 1 },
            platforms: ["disney"],
            poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJONuM33oGrA.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/9rZ9rZ9rZ9rZ9rZ9rZ9rZ9rZ9rZ.jpg",
            cast: ["Craig T. Nelson", "Holly Hunter", "Samuel L. Jackson"]
        }
    ],
    pl: [
        {
            id: 1,
            title: "Incepcja",
            year: 2010,
            genre: ["Akcja", "Sci-Fi", "Thriller"],
            duration: "2h 28min",
            director: "Christopher Nolan",
            description: "Złodziej, który kradnie tajemnice korporacji poprzez używanie technologii współdzielenia snów, otrzymuje zadanie wszczepienia idei do umysłu prezesa firmy.",
            rating: 4.8,
            ratings: { 5: 120, 4: 45, 3: 15, 2: 5, 1: 2 },
            platforms: ["netflix", "hbo"],
            poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
        },
        {
            id: 2,
            title: "Matrix",
            year: 1999,
            genre: ["Akcja", "Sci-Fi"],
            duration: "2h 16min",
            director: "Bracia Wachowscy",
            description: "Programista komputerowy odkrywa, że rzeczywistość, którą zna, jest symulacją stworzoną przez maszyny i dołącza do rebelii, by się wyzwolić.",
            rating: 4.7,
            ratings: { 5: 98, 4: 32, 3: 10, 2: 3, 1: 1 },
            platforms: ["netflix", "hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/7u3pxc0KjwxXST9CPtcGggdT9M3.jpg",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
        },
        {
            id: 3,
            title: "Forrest Gump",
            year: 1994,
            genre: ["Dramat", "Komedia", "Romans"],
            duration: "2h 22min",
            director: "Robert Zemeckis",
            description: "Historia Stanów Zjednoczonych od lat 50. do 70. XX wieku widziana oczami Forresta Gumpa, mężczyzny z Alabamy o niskim IQ, który tęskni za swoją ukochaną z dzieciństwa.",
            rating: 4.9,
            ratings: { 5: 150, 4: 28, 3: 5, 2: 1, 1: 0 },
            platforms: ["netflix", "disney"],
            poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/9s6hWwSoD3tPnhR9p8L9zM8jE6L.jpg",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
        },
        {
            id: 4,
            title: "Skazani na Shawshank",
            year: 1994,
            genre: ["Dramat"],
            duration: "2h 22min",
            director: "Frank Darabont",
            description: "Dwóch więźniów nawiązuje więź na przestrzeni lat, znajdując pocieszenie i ostateczne odkupienie poprzez akty zwykłej przyzwoitości.",
            rating: 4.9,
            ratings: { 5: 145, 4: 30, 3: 8, 2: 2, 1: 0 },
            platforms: ["hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
            cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
        },
        {
            id: 5,
            title: "Avengers: Koniec gry",
            year: 2019,
            genre: ["Akcja", "Sci-Fi", "Przygodowy"],
            duration: "3h 2min",
            director: "Anthony i Joe Russo",
            description: "Po druzgocących wydarzeniach z Avengers: Wojna bez granic, wszechświat jest w ruinie. Z pomocą pozostałych sojuszników, Avengers zbierają się ponownie, aby odwrócić działania Thanosa i przywrócić równowagę we wszechświecie.",
            rating: 4.5,
            ratings: { 5: 200, 4: 75, 3: 20, 2: 8, 1: 5 },
            platforms: ["disney", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
        },
        {
            id: 6,
            title: "Infiltracja",
            year: 2006,
            genre: ["Dramat", "Kryminał", "Thriller"],
            duration: "2h 31min",
            director: "Martin Scorsese",
            description: "Tajniak i agent w policji próbują się nawzajem zidentyfikować, infiltrując irlandzki gang w South Boston.",
            rating: 4.6,
            ratings: { 5: 85, 4: 40, 3: 12, 2: 5, 1: 2 },
            platforms: ["netflix"],
            poster: "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8w4R662Yo1YsjX8J.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/a4H4E5qMfLc6UqWpVZ3W4QzQg8L.jpg",
            cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
        },
        {
            id: 7,
            title: "Gwiezdne wojny: Przebudzenie Mocy",
            year: 2015,
            genre: ["Sci-Fi", "Przygodowy", "Akcja"],
            duration: "2h 18min",
            director: "J.J. Abrams",
            description: "Gdy nowe zagrożenie pojawia się w galaktyce, Rey, zbieraczka z pustyni, i Finn, były szturmowiec, muszą dołączyć do Hana Solo i Chewbacci, by poszukiwać jedynej nadziei na przywrócenie pokoju.",
            rating: 4.3,
            ratings: { 5: 120, 4: 50, 3: 25, 2: 10, 1: 5 },
            platforms: ["disney"],
            poster: "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVwwUoIiK3LL2O.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/cIjY2WyOcU52L3kPJt3qjG9w6rB.jpg",
            cast: ["Daisy Ridley", "John Boyega", "Oscar Isaac"]
        },
        {
            id: 8,
            title: "Na noże",
            year: 2019,
            genre: ["Komedia", "Kryminał", "Tajemnica"],
            duration: "2h 10min",
            director: "Rian Johnson",
            description: "Detektyw bada śmierć patriarchy ekscentrycznej, kłótliwej rodziny.",
            rating: 4.4,
            ratings: { 5: 95, 4: 35, 3: 15, 2: 5, 1: 3 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/fK8DD1N8ZIcKWDhwC4qD7xJ5L8F.jpg",
            cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"]
        },
        {
            id: 9,
            title: "Interstellar",
            year: 2014,
            genre: ["Sci-Fi", "Dramat", "Przygodowy"],
            duration: "2h 49min",
            director: "Christopher Nolan",
            description: "Zespół odkrywców podróżuje przez tunel czasoprzestrzenny w kosmosie, próbując zapewnić przetrwanie ludzkości.",
            rating: 4.8,
            ratings: { 5: 180, 4: 45, 3: 20, 2: 8, 1: 3 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
            cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
        },
        {
            id: 10,
            title: "Joker",
            year: 2019,
            genre: ["Dramat", "Kryminał", "Thriller"],
            duration: "2h 2min",
            director: "Todd Phillips",
            description: "Mający problemy psychiczne komik wkracza na ścieżkę samozniszczenia, która prowadzi do stworzenia ikonicznego złoczyńcy.",
            rating: 4.6,
            ratings: { 5: 220, 4: 65, 3: 25, 2: 10, 1: 8 },
            platforms: ["hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
            cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
        }
    ],
    es: [
        {
            id: 1,
            title: "Origen",
            year: 2010,
            genre: ["Acción", "Ciencia Ficción", "Thriller"],
            duration: "2h 28min",
            director: "Christopher Nolan",
            description: "Un ladrón que roba secretos corporativos mediante el uso de tecnología de compartir sueños recibe la tarea inversa de plantar una idea en la mente de un director ejecutivo.",
            rating: 4.8,
            ratings: { 5: 120, 4: 45, 3: 15, 2: 5, 1: 2 },
            platforms: ["netflix", "hbo"],
            poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
        },
        {
            id: 2,
            title: "Matrix",
            year: 1999,
            genre: ["Acción", "Ciencia Ficción"],
            duration: "2h 16min",
            director: "Las Wachowski",
            description: "Un programador informático descubre que la realidad que conoce es una simulación creada por máquinas y se une a una rebelión para liberarse.",
            rating: 4.7,
            ratings: { 5: 98, 4: 32, 3: 10, 2: 3, 1: 1 },
            platforms: ["netflix", "hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/7u3pxc0KjwxXST9CPtcGggdT9M3.jpg",
            cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
        },
        {
            id: 3,
            title: "Forrest Gump",
            year: 1994,
            genre: ["Drama", "Comedia", "Romance"],
            duration: "2h 22min",
            director: "Robert Zemeckis",
            description: "La historia de Estados Unidos desde los años 50 hasta los 70 se desarrolla desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75, que anhela reunirse con su amor de la infancia.",
            rating: 4.9,
            ratings: { 5: 150, 4: 28, 3: 5, 2: 1, 1: 0 },
            platforms: ["netflix", "disney"],
            poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/9s6hWwSoD3tPnhR9p8L9zM8jE6L.jpg",
            cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
        },
        {
            id: 4,
            title: "Sueño de fuga",
            year: 1994,
            genre: ["Drama"],
            duration: "2h 22min",
            director: "Frank Darabont",
            description: "Dos hombres encarcelados establecen un vínculo a lo largo de los años, encontrando consuelo y eventual redención a través de actos de decencia común.",
            rating: 4.9,
            ratings: { 5: 145, 4: 30, 3: 8, 2: 2, 1: 0 },
            platforms: ["hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
            cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
        },
        {
            id: 5,
            title: "Vengadores: Endgame",
            year: 2019,
            genre: ["Acción", "Ciencia Ficción", "Aventura"],
            duration: "3h 2min",
            director: "Anthony y Joe Russo",
            description: "Después de los devastadores eventos de Vengadores: Infinity War, el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para revertir las acciones de Thanos y restaurar el equilibrio en el universo.",
            rating: 4.5,
            ratings: { 5: 200, 4: 75, 3: 20, 2: 8, 1: 5 },
            platforms: ["disney", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
        },
        {
            id: 6,
            title: "Infiltrados",
            year: 2006,
            genre: ["Drama", "Crimen", "Thriller"],
            duration: "2h 31min",
            director: "Martin Scorsese",
            description: "Un policía encubierto y un topo en la policía intentan identificarse mutuamente mientras infiltran una banda irlandesa en el sur de Boston.",
            rating: 4.6,
            ratings: { 5: 85, 4: 40, 3: 12, 2: 5, 1: 2 },
            platforms: ["netflix"],
            poster: "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8w4R662Yo1YsjX8J.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/a4H4E5qMfLc6UqWpVZ3W4QzQg8L.jpg",
            cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
        },
        {
            id: 7,
            title: "Star Wars: El despertar de la fuerza",
            year: 2015,
            genre: ["Ciencia Ficción", "Aventura", "Acción"],
            duration: "2h 18min",
            director: "J.J. Abrams",
            description: "Cuando surge una nueva amenaza para la galaxia, Rey, una recolectora del desierto, y Finn, un ex stormtrooper, deben unirse a Han Solo y Chewbacca para buscar la única esperanza de restaurar la paz.",
            rating: 4.3,
            ratings: { 5: 120, 4: 50, 3: 25, 2: 10, 1: 5 },
            platforms: ["disney"],
            poster: "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVwwUoIiK3LL2O.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/cIjY2WyOcU52L3kPJt3qjG9w6rB.jpg",
            cast: ["Daisy Ridley", "John Boyega", "Oscar Isaac"]
        },
        {
            id: 8,
            title: "Puñales por la espalda",
            year: 2019,
            genre: ["Comedia", "Crimen", "Misterio"],
            duration: "2h 10min",
            director: "Rian Johnson",
            description: "Un detective investiga la muerte del patriarca de una excéntrica y combativa familia.",
            rating: 4.4,
            ratings: { 5: 95, 4: 35, 3: 15, 2: 5, 1: 3 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/fK8DD1N8ZIcKWDhwC4qD7xJ5L8F.jpg",
            cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"]
        },
        {
            id: 9,
            title: "Interestelar",
            year: 2014,
            genre: ["Ciencia Ficción", "Drama", "Aventura"],
            duration: "2h 49min",
            director: "Christopher Nolan",
            description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
            rating: 4.8,
            ratings: { 5: 180, 4: 45, 3: 20, 2: 8, 1: 3 },
            platforms: ["netflix", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
            cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
        },
        {
            id: 10,
            title: "Guasón",
            year: 2019,
            genre: ["Drama", "Crimen", "Thriller"],
            duration: "2h 2min",
            director: "Todd Phillips",
            description: "Un comediante con problemas mentales se embarca en una espiral descendente que lleva a la creación de un villano icónico.",
            rating: 4.6,
            ratings: { 5: 220, 4: 65, 3: 25, 2: 10, 1: 8 },
            platforms: ["hbo", "amazon"],
            poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
            cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
        }
    ]
};

// Helper function to get movies in current language
function getMovies() {
    return MOVIE_DATA[currentLanguage] || MOVIE_DATA.en;
}

// Helper function to get a specific movie in current language
function getMovie(id) {
    const movies = getMovies();
    return movies.find(m => m.id === id);
}

// Translations for UI elements
const TRANSLATIONS = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-favorites': 'Favorites',
        'nav-chat': 'Chat',
        
        // Search
        'search-placeholder': 'Search movies or TV shows...',
        'favorites-search-placeholder': 'Search favorites...',
        
        // Hero section
        'hero-title': 'Find your next favorite movie',
        'hero-subtitle': 'Browse thousands of movies and TV shows, check availability on streaming platforms and share opinions with other movie fans',
        
        // Filters
        'filters-title': 'Filter results',
        'platforms-label': 'Streaming platforms',
        'genres-label': 'Genres',
        'rating-label': 'Rating range',
        'any-rating': 'Any rating',
        'rating-0-1': '0 - 1 star',
        'rating-1-2': '1.1 - 2 stars',
        'rating-2-3': '2.1 - 3 stars',
        'rating-3-4': '3.1 - 4 stars',
        'rating-4-5': '4.1 - 5 stars',
        'clear-filters': 'Clear filters',
        'apply-filters': 'Apply filters',
        
        // Results
        'latest-productions': 'Latest productions',
        'found-movies': 'Found',
        'movies': 'movies',
        'share': 'Share',
        'no-results': 'No movies found',
        'no-results-subtext': 'Try changing your search criteria or filters',
        'clear-all': 'Clear all filters',
        
        // Favorites
        'your-favorites': 'Your favorite movies',
        'clear-favorites': 'Clear list',
        'export': 'Export',
        'no-favorites': 'No favorite movies',
        'no-favorites-subtext': 'Add movies to favorites by clicking the heart icon on the movie card',
        'browse-movies': 'Browse movies',
        
        // Chat
        'chat-rooms': 'Topic chats',
        'chat-info': 'Choose a chat to join the discussion',
        'chat-info-small': 'All messages are public and anonymous',
        'select-chat': 'Select chat',
        'clear-chat': 'Clear',
        'chat-notice': 'Group chat - write anonymously, respect other users. Administrator moderates content.',
        'welcome-chat': 'Welcome to the chat! Choose a topic room from the panel on the left.',
        'chat-placeholder': 'Select a chat to write a message...',
        'chat-placeholder-active': 'Write a message...',
        'send': 'Send',
        'auto-scroll': 'Auto-scroll',
        'go-to-bottom': 'Go to bottom',
        
        // Chat rooms
        'room-action': '🎬 Action Fans',
        'room-comedy': '😂 Comedy Lovers',
        'room-sci-fi': '🚀 Sci-Fi Fans',
        'room-drama': '🎭 Drama Connoisseurs',
        'room-horror': '👻 Horror Fans',
        
        // Modal
        'description': 'Description',
        'cast': 'Cast',
        'director': 'Director',
        'available-on': 'Available on',
        'no-platforms': 'No information about availability on streaming platforms',
        'ratings': 'Ratings',
        'average-rating': 'Average rating',
        'ratings-count': 'ratings',
        'your-rating': 'Your rating',
        'save-rating': 'Save rating',
        'rate': 'Rate',
        'comments': 'Comments',
        'write-comment': 'Write a comment...',
        'contains-spoilers': 'Contains spoilers',
        'add-comment': 'Add comment',
        'no-comments': 'No comments yet. Be the first to comment!',
        
        // Admin
        'admin-panel': 'Admin Panel',
        'logged-in': 'Logged in',
        'logout': 'Logout',
        'movies-tab': 'Movies',
        'comments-tab': 'Comments',
        'chat-mod-tab': 'Chat Moderation',
        'settings-tab': 'Settings',
        'add-movie': 'Add new movie',
        'all-movies': 'All movies',
        'search-movies': 'Search movies...',
        'recent-comments': 'Recent comments',
        'all-comments': 'All comments',
        'reported': 'Reported',
        'spoilers': 'With spoilers',
        'pending': 'Pending',
        'refresh': 'Refresh',
        'chat-moderation': 'Chat Moderation',
        'active-chats': 'Active chats',
        'reported-messages': 'Reported messages',
        'system-settings': 'System Settings',
        'general-settings': 'General settings',
        'auto-moderation': 'Auto-moderation of comments',
        'chat-enabled': 'Chat active',
        'ratings-enabled': 'Rating system active',
        'items-per-page': 'Items per page',
        'default-sort': 'Default sorting',
        'newest': 'Newest',
        'highest-rated': 'Highest rated',
        'title-az': 'Title A-Z',
        'reset-defaults': 'Reset to defaults',
        'save-settings': 'Save settings',
        'title': 'Title',
        'year': 'Year',
        'genres': 'Genres',
        'rating': 'Rating',
        'actions': 'Actions',
        'duration': 'Duration',
        'poster-url': 'Poster URL',
        'backdrop-url': 'Backdrop URL',
        'clear': 'Clear',
        'movies-in-database': 'movies in database',
        'admin-login': 'Admin Login',
        'username': 'Username',
        'password': 'Password',
        'remember-me': 'Remember me',
        'login': 'Login',
        'admin-note': 'Access only for authorized administrators',
        'cancel': 'Cancel',
        'confirm': 'Confirm',
        'loading': 'Loading...',
        
        // Notifications
        'rating-saved': 'Rating saved!',
        'comment-added': 'Comment added!',
        'spoiler-warning': 'Comment marked as containing spoilers',
        'comment-deleted': 'Comment deleted',
        'added-to-favorites': 'added to favorites',
        'removed-from-favorites': 'removed from favorites',
        'favorites-cleared': 'All favorites have been cleared',
        'exported': 'Exported',
        'chat-cleared': 'Chat has been cleared',
        'logged-in-as-admin': 'Logged in as administrator',
        'logged-out': 'Logged out successfully',
        'movie-added': 'Movie has been added',
        'movie-deleted': 'Movie has been deleted',
        'settings-reset': 'Settings have been reset',
        'select-chat-first': 'Please select a chat room first',
        'message-empty': 'Message cannot be empty',
        'no-movies-export': 'No movies to export',
        'comment-empty': 'Comment cannot be empty',
        'invalid-credentials': 'Invalid username or password',
        'required-fields': 'Please fill in all required fields',
        'error': 'Error',
        'warning': 'Warning',
        'success': 'Success',
        'info': 'Info',
        
        // Confirmation
        'confirm-delete-comment': 'Delete comment?',
        'confirm-delete-comment-message': 'This action cannot be undone.',
        'confirm-clear-favorites': 'Clear all favorites?',
        'confirm-clear-favorites-message': 'You will remove {count} movies from your favorites. This action cannot be undone.',
        'confirm-clear-chat': 'Clear entire chat?',
        'confirm-clear-chat-message': 'All messages in this room will be deleted. This action cannot be undone.',
        'confirm-logout': 'Log out?',
        'confirm-logout-message': 'You will be redirected to the home page.',
        'confirm-delete-movie': 'Delete movie?',
        'confirm-delete-movie-message': 'Movie "{title}" will be permanently deleted. This action cannot be undone.',
        'confirm-reset-settings': 'Reset settings?',
        'confirm-reset-settings-message': 'All settings will be restored to default values.',
        'enter': 'Enter',
        'messages': 'messages',
        'no-messages': 'No messages',
        'view': 'View',
        'share-text': 'Check out my movie search results on PLUSFLIX!',
        'offensive-content': 'Message contains inappropriate content'
    },
    pl: {
        // Navigation
        'nav-home': 'Strona główna',
        'nav-favorites': 'Ulubione',
        'nav-chat': 'Czaty',
        
        // Search
        'search-placeholder': 'Wyszukaj film lub serial...',
        'favorites-search-placeholder': 'Wyszukaj w ulubionych...',
        
        // Hero section
        'hero-title': 'Znajdź swój następny ulubiony film',
        'hero-subtitle': 'Przeglądaj tysiące filmów i seriali, sprawdzaj dostępność na platformach streamingowych i dziel się opinią z innymi kinomaniakami',
        
        // Filters
        'filters-title': 'Filtruj wyniki',
        'platforms-label': 'Platformy streamingowe',
        'genres-label': 'Gatunki',
        'rating-label': 'Zakres ocen',
        'any-rating': 'Dowolna ocena',
        'rating-0-1': '0 - 1 gwiazdka',
        'rating-1-2': '1.1 - 2 gwiazdki',
        'rating-2-3': '2.1 - 3 gwiazdki',
        'rating-3-4': '3.1 - 4 gwiazdki',
        'rating-4-5': '4.1 - 5 gwiazdek',
        'clear-filters': 'Wyczyść filtry',
        'apply-filters': 'Zastosuj filtry',
        
        // Results
        'latest-productions': 'Najnowsze produkcje',
        'found-movies': 'Znaleziono',
        'movies': 'filmów',
        'share': 'Udostępnij',
        'no-results': 'Nie znaleziono filmów',
        'no-results-subtext': 'Spróbuj zmienić kryteria wyszukiwania lub filtry',
        'clear-all': 'Wyczyść wszystkie filtry',
        
        // Favorites
        'your-favorites': 'Twoje ulubione filmy',
        'clear-favorites': 'Wyczyść listę',
        'export': 'Eksportuj',
        'no-favorites': 'Brak ulubionych filmów',
        'no-favorites-subtext': 'Dodaj filmy do ulubionych, klikając ikonę serca na karcie filmu',
        'browse-movies': 'Przeglądaj filmy',
        
        // Chat
        'chat-rooms': 'Czaty tematyczne',
        'chat-info': 'Wybierz czat aby dołączyć do dyskusji',
        'chat-info-small': 'Wszystkie wiadomości są publiczne i anonimowe',
        'select-chat': 'Wybierz czat',
        'clear-chat': 'Wyczyść',
        'chat-notice': 'Czat grupowy – pisz anonimowo, szanuj innych użytkowników. Administrator moderuje treści.',
        'welcome-chat': 'Witaj na czacie! Wybierz tematyczny pokój rozmów z panelu po lewej stronie.',
        'chat-placeholder': 'Wybierz czat aby napisać wiadomość...',
        'chat-placeholder-active': 'Napisz wiadomość...',
        'send': 'Wyślij',
        'auto-scroll': 'Auto-przewijanie',
        'go-to-bottom': 'Na dół',
        
        // Chat rooms
        'room-action': '🎬 Fanatycy Akcji',
        'room-comedy': '😂 Miłośnicy Komedii',
        'room-sci-fi': '🚀 Fani Sci-Fi',
        'room-drama': '🎭 Koneserzy Dramatu',
        'room-horror': '👻 Miłośnicy Horrorów',
        
        // Modal
        'description': 'Opis',
        'cast': 'Obsada',
        'director': 'Reżyser',
        'available-on': 'Dostępne na platformach',
        'no-platforms': 'Brak informacji o dostępności na platformach streamingowych',
        'ratings': 'Oceny',
        'average-rating': 'Średnia ocena',
        'ratings-count': 'ocen',
        'your-rating': 'Twoja ocena',
        'save-rating': 'Zapisz ocenę',
        'rate': 'Oceń',
        'comments': 'Komentarze',
        'write-comment': 'Napisz komentarz...',
        'contains-spoilers': 'Zawiera spoilery',
        'add-comment': 'Dodaj komentarz',
        'no-comments': 'Brak komentarzy. Bądź pierwszy który skomentuje!',
        
        // Admin
        'admin-panel': 'Panel administratora',
        'logged-in': 'Zalogowany',
        'logout': 'Wyloguj',
        'movies-tab': 'Filmy',
        'comments-tab': 'Komentarze',
        'chat-mod-tab': 'Moderacja czatu',
        'settings-tab': 'Ustawienia',
        'add-movie': 'Dodaj nowy film',
        'all-movies': 'Wszystkie filmy',
        'search-movies': 'Szukaj filmów...',
        'recent-comments': 'Ostatnie komentarze',
        'all-comments': 'Wszystkie komentarze',
        'reported': 'Zgłoszone',
        'spoilers': 'Z spoilermi',
        'pending': 'Oczekujące',
        'refresh': 'Odśwież',
        'chat-moderation': 'Moderacja czatu',
        'active-chats': 'Aktywne czaty',
        'reported-messages': 'Zgłoszone wiadomości',
        'system-settings': 'Ustawienia systemu',
        'general-settings': 'Ustawienia ogólne',
        'auto-moderation': 'Auto-moderacja komentarzy',
        'chat-enabled': 'Czat aktywny',
        'ratings-enabled': 'System ocen aktywny',
        'items-per-page': 'Elementów na stronę',
        'default-sort': 'Domyślne sortowanie',
        'newest': 'Najnowsze',
        'highest-rated': 'Najwyżej oceniane',
        'title-az': 'Tytuł A-Z',
        'reset-defaults': 'Przywróć domyślne',
        'save-settings': 'Zapisz ustawienia',
        'title': 'Tytuł',
        'year': 'Rok',
        'genres': 'Gatunki',
        'rating': 'Ocena',
        'actions': 'Akcje',
        'duration': 'Czas trwania',
        'poster-url': 'URL plakatu',
        'backdrop-url': 'URL tła',
        'clear': 'Wyczyść',
        'movies-in-database': 'filmów w bazie',
        'admin-login': 'Logowanie administratora',
        'username': 'Nazwa użytkownika',
        'password': 'Hasło',
        'remember-me': 'Zapamiętaj mnie',
        'login': 'Zaloguj',
        'admin-note': 'Dostęp tylko dla uprawnionych administratorów',
        'cancel': 'Anuluj',
        'confirm': 'Potwierdź',
        'loading': 'Ładowanie...',
        
        // Notifications
        'rating-saved': 'Ocena została zapisana!',
        'comment-added': 'Komentarz został dodany!',
        'spoiler-warning': 'Komentarz oznaczony jako zawierający spoilery',
        'comment-deleted': 'Komentarz został usunięty',
        'added-to-favorites': 'dodano do ulubionych',
        'removed-from-favorites': 'usunięto z ulubionych',
        'favorites-cleared': 'Wszystkie ulubione zostały wyczyszczone',
        'exported': 'Wyeksportowano',
        'chat-cleared': 'Czat został wyczyszczony',
        'logged-in-as-admin': 'Zalogowano jako administrator',
        'logged-out': 'Wylogowano pomyślnie',
        'movie-added': 'Film został dodany',
        'movie-deleted': 'Film został usunięty',
        'settings-reset': 'Ustawienia zostały zresetowane',
        'select-chat-first': 'Wybierz najpierw pokój czatu',
        'message-empty': 'Wiadomość nie może być pusta',
        'no-movies-export': 'Brak filmów do eksportu',
        'comment-empty': 'Komentarz nie może być pusty',
        'invalid-credentials': 'Błędna nazwa użytkownika lub hasło',
        'required-fields': 'Wypełnij wszystkie wymagane pola',
        'error': 'Błąd',
        'warning': 'Ostrzeżenie',
        'success': 'Sukces',
        'info': 'Informacja',
        
        // Confirmation
        'confirm-delete-comment': 'Usunąć komentarz?',
        'confirm-delete-comment-message': 'Ta operacja jest nieodwracalna.',
        'confirm-clear-favorites': 'Wyczyścić wszystkie ulubione?',
        'confirm-clear-favorites-message': 'Usuniesz {count} filmów z listy ulubionych. Ta operacja jest nieodwracalna.',
        'confirm-clear-chat': 'Wyczyścić cały czat?',
        'confirm-clear-chat-message': 'Wszystkie wiadomości w tym pokoju zostaną usunięte. Ta operacja jest nieodwracalna.',
        'confirm-logout': 'Wylogować się?',
        'confirm-logout-message': 'Zostaniesz przekierowany do strony głównej.',
        'confirm-delete-movie': 'Usunąć film?',
        'confirm-delete-movie-message': 'Film "{title}" zostanie trwale usunięty. Ta operacja jest nieodwracalna.',
        'confirm-reset-settings': 'Zresetować ustawienia?',
        'confirm-reset-settings-message': 'Wszystkie ustawienia zostaną przywrócone do wartości domyślnych.',
        'enter': 'Wejdź',
        'messages': 'wiadomości',
        'no-messages': 'Brak wiadomości',
        'view': 'Zobacz',
        'share-text': 'Zobacz moje wyniki wyszukiwania filmów na PLUSFLIX!',
        'offensive-content': 'Wiadomość zawiera niedozwoloną treść'
    },
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-favorites': 'Favoritos',
        'nav-chat': 'Chat',
        
        // Search
        'search-placeholder': 'Buscar películas o series...',
        'favorites-search-placeholder': 'Buscar en favoritos...',
        
        // Hero section
        'hero-title': 'Encuentra tu próxima película favorita',
        'hero-subtitle': 'Explora miles de películas y series, verifica disponibilidad en plataformas de streaming y comparte opiniones con otros cinéfilos',
        
        // Filters
        'filters-title': 'Filtrar resultados',
        'platforms-label': 'Plataformas de streaming',
        'genres-label': 'Géneros',
        'rating-label': 'Rango de calificación',
        'any-rating': 'Cualquier calificación',
        'rating-0-1': '0 - 1 estrella',
        'rating-1-2': '1.1 - 2 estrellas',
        'rating-2-3': '2.1 - 3 estrellas',
        'rating-3-4': '3.1 - 4 estrellas',
        'rating-4-5': '4.1 - 5 estrellas',
        'clear-filters': 'Limpiar filtros',
        'apply-filters': 'Aplicar filtros',
        
        // Results
        'latest-productions': 'Últimos estrenos',
        'found-movies': 'Encontrados',
        'movies': 'películas',
        'share': 'Compartir',
        'no-results': 'No se encontraron películas',
        'no-results-subtext': 'Intenta cambiar los criterios de búsqueda o filtros',
        'clear-all': 'Limpiar todos los filtros',
        
        // Favorites
        'your-favorites': 'Tus películas favoritas',
        'clear-favorites': 'Limpiar lista',
        'export': 'Exportar',
        'no-favorites': 'No hay películas favoritas',
        'no-favorites-subtext': 'Añade películas a favoritos haciendo clic en el icono de corazón en la tarjeta de la película',
        'browse-movies': 'Explorar películas',
        
        // Chat
        'chat-rooms': 'Chats temáticos',
        'chat-info': 'Elige un chat para unirte a la discusión',
        'chat-info-small': 'Todos los mensajes son públicos y anónimos',
        'select-chat': 'Seleccionar chat',
        'clear-chat': 'Limpiar',
        'chat-notice': 'Chat grupal - escribe anónimamente, respeta a otros usuarios. El administrador modera el contenido.',
        'welcome-chat': '¡Bienvenido al chat! Elige una sala temática del panel de la izquierda.',
        'chat-placeholder': 'Selecciona un chat para escribir un mensaje...',
        'chat-placeholder-active': 'Escribe un mensaje...',
        'send': 'Enviar',
        'auto-scroll': 'Auto-desplazamiento',
        'go-to-bottom': 'Ir al final',
        
        // Chat rooms
        'room-action': '🎬 Fans de Acción',
        'room-comedy': '😂 Amantes de la Comedia',
        'room-sci-fi': '🚀 Fans de Ciencia Ficción',
        'room-drama': '🎭 Conocedores del Drama',
        'room-horror': '👻 Fans del Terror',
        
        // Modal
        'description': 'Descripción',
        'cast': 'Reparto',
        'director': 'Director',
        'available-on': 'Disponible en',
        'no-platforms': 'Sin información sobre disponibilidad en plataformas de streaming',
        'ratings': 'Calificaciones',
        'average-rating': 'Calificación promedio',
        'ratings-count': 'calificaciones',
        'your-rating': 'Tu calificación',
        'save-rating': 'Guardar calificación',
        'rate': 'Calificar',
        'comments': 'Comentarios',
        'write-comment': 'Escribe un comentario...',
        'contains-spoilers': 'Contiene spoilers',
        'add-comment': 'Añadir comentario',
        'no-comments': 'No hay comentarios. ¡Sé el primero en comentar!',
        
        // Admin
        'admin-panel': 'Panel de Administración',
        'logged-in': 'Conectado',
        'logout': 'Cerrar sesión',
        'movies-tab': 'Películas',
        'comments-tab': 'Comentarios',
        'chat-mod-tab': 'Moderación de Chat',
        'settings-tab': 'Configuración',
        'add-movie': 'Añadir nueva película',
        'all-movies': 'Todas las películas',
        'search-movies': 'Buscar películas...',
        'recent-comments': 'Comentarios recientes',
        'all-comments': 'Todos los comentarios',
        'reported': 'Reportados',
        'spoilers': 'Con spoilers',
        'pending': 'Pendientes',
        'refresh': 'Actualizar',
        'chat-moderation': 'Moderación de Chat',
        'active-chats': 'Chats activos',
        'reported-messages': 'Mensajes reportados',
        'system-settings': 'Configuración del sistema',
        'general-settings': 'Configuración general',
        'auto-moderation': 'Auto-moderación de comentarios',
        'chat-enabled': 'Chat activo',
        'ratings-enabled': 'Sistema de calificaciones activo',
        'items-per-page': 'Elementos por página',
        'default-sort': 'Ordenamiento por defecto',
        'newest': 'Más recientes',
        'highest-rated': 'Mejor calificados',
        'title-az': 'Título A-Z',
        'reset-defaults': 'Restablecer valores',
        'save-settings': 'Guardar configuración',
        'title': 'Título',
        'year': 'Año',
        'genres': 'Géneros',
        'rating': 'Calificación',
        'actions': 'Acciones',
        'duration': 'Duración',
        'poster-url': 'URL del póster',
        'backdrop-url': 'URL del fondo',
        'clear': 'Limpiar',
        'movies-in-database': 'películas en la base de datos',
        'admin-login': 'Inicio de sesión de administrador',
        'username': 'Nombre de usuario',
        'password': 'Contraseña',
        'remember-me': 'Recordarme',
        'login': 'Iniciar sesión',
        'admin-note': 'Acceso solo para administradores autorizados',
        'cancel': 'Cancelar',
        'confirm': 'Confirmar',
        'loading': 'Cargando...',
        
        // Notifications
        'rating-saved': '¡Calificación guardada!',
        'comment-added': '¡Comentario añadido!',
        'spoiler-warning': 'Comentario marcado como spoiler',
        'comment-deleted': 'Comentario eliminado',
        'added-to-favorites': 'añadido a favoritos',
        'removed-from-favorites': 'eliminado de favoritos',
        'favorites-cleared': 'Todos los favoritos han sido eliminados',
        'exported': 'Exportado',
        'chat-cleared': 'El chat ha sido limpiado',
        'logged-in-as-admin': 'Conectado como administrador',
        'logged-out': 'Sesión cerrada correctamente',
        'movie-added': 'Película añadida',
        'movie-deleted': 'Película eliminada',
        'settings-reset': 'Configuración restablecida',
        'select-chat-first': 'Por favor, selecciona una sala de chat primero',
        'message-empty': 'El mensaje no puede estar vacío',
        'no-movies-export': 'No hay películas para exportar',
        'comment-empty': 'El comentario no puede estar vacío',
        'invalid-credentials': 'Nombre de usuario o contraseña incorrectos',
        'required-fields': 'Por favor, completa todos los campos obligatorios',
        'error': 'Error',
        'warning': 'Advertencia',
        'success': 'Éxito',
        'info': 'Información',
        
        // Confirmation
        'confirm-delete-comment': '¿Eliminar comentario?',
        'confirm-delete-comment-message': 'Esta acción no se puede deshacer.',
        'confirm-clear-favorites': '¿Limpiar todos los favoritos?',
        'confirm-clear-favorites-message': 'Eliminarás {count} películas de tus favoritos. Esta acción no se puede deshacer.',
        'confirm-clear-chat': '¿Limpiar todo el chat?',
        'confirm-clear-chat-message': 'Todos los mensajes en esta sala serán eliminados. Esta acción no se puede deshacer.',
        'confirm-logout': '¿Cerrar sesión?',
        'confirm-logout-message': 'Serás redirigido a la página de inicio.',
        'confirm-delete-movie': '¿Eliminar película?',
        'confirm-delete-movie-message': 'La película "{title}" será eliminada permanentemente. Esta acción no se puede deshacer.',
        'confirm-reset-settings': '¿Restablecer configuración?',
        'confirm-reset-settings-message': 'Toda la configuración será restaurada a los valores predeterminados.',
        'enter': 'Entrar',
        'messages': 'mensajes',
        'no-messages': 'No hay mensajes',
        'view': 'Ver',
        'share-text': '¡Mira mis resultados de búsqueda de películas en PLUSFLIX!',
        'offensive-content': 'El mensaje contiene contenido inapropiado'
    }
};

// Application state
let state = {
    currentPage: 'home',
    currentMovieModal: null,
    currentChatRoom: null,
    currentFilters: {
        search: '',
        platforms: [],
        genres: [],
        minRating: 0,
        maxRating: 5
    },
    userAlias: '',
    isAdmin: false,
    favorites: new Set(),
    chatMessages: {},
    movieRatings: {},
    comments: {}
};

// Current language
let currentLanguage = 'en';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadInitialData();
    loadFiltersFromUrl();
    updateUrlFromState();
    loadFiltersVisibility();
});

// Language switcher functions
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Save language preference
    localStorage.setItem(CONFIG.STORAGE_KEYS.LANGUAGE, lang);
    
    // Translate all UI elements
    translatePage();
    
    // Update dynamic content
    updateTranslatedContent();
    
    // Re-render movies with new language
    renderMovies(getMovies());
    updateResultsCount();
    
    // Update chat rooms if on chat page
    if (state.currentPage === 'chat') {
        renderChatRooms();
    }
    
    // Update admin panel if visible
    if (state.currentPage === 'admin') {
        renderAdminPanel();
    }
    
    // Update current movie modal if open
    if (state.currentMovieModal) {
        showMovieModal(state.currentMovieModal);
    }
}

function translatePage() {
    // Translate text elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) {
            // Preserve HTML content (like icons)
            const icon = element.querySelector('i') ? element.querySelector('i').outerHTML : '';
            const text = TRANSLATIONS[currentLanguage][key];
            if (icon && !element.classList.contains('admin-tab') && !element.classList.contains('filter-btn')) {
                element.innerHTML = icon + ' ' + text;
            } else if (element.tagName === 'OPTION') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) {
            element.placeholder = TRANSLATIONS[currentLanguage][key];
        }
    });
    
    // Translate titles
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) {
            element.title = TRANSLATIONS[currentLanguage][key];
        }
    });
}

function updateTranslatedContent() {
    // Update filter labels
    const filterLabels = document.querySelectorAll('.filter-label');
    if (filterLabels.length >= 3) {
        filterLabels[0].innerHTML = `<i class="fas fa-tv"></i> ${TRANSLATIONS[currentLanguage]['platforms-label']}`;
        filterLabels[1].innerHTML = `<i class="fas fa-film"></i> ${TRANSLATIONS[currentLanguage]['genres-label']}`;
        filterLabels[2].innerHTML = `<i class="fas fa-star"></i> ${TRANSLATIONS[currentLanguage]['rating-label']}`;
    }
    
    // Update rating filter options
    const ratingOptions = document.querySelectorAll('.rating-option span[data-i18n]');
    const ratingKeys = ['any-rating', 'rating-0-1', 'rating-1-2', 'rating-2-3', 'rating-3-4', 'rating-4-5'];
    ratingOptions.forEach((option, index) => {
        if (index < ratingKeys.length && TRANSLATIONS[currentLanguage][ratingKeys[index]]) {
            option.textContent = TRANSLATIONS[currentLanguage][ratingKeys[index]];
        }
    });
    
    // Update admin table headers
    const tableHeaders = document.querySelectorAll('.admin-table th');
    const headerKeys = ['title', 'year', 'genres', 'rating', 'actions'];
    tableHeaders.forEach((header, index) => {
        if (index < headerKeys.length && TRANSLATIONS[currentLanguage][headerKeys[index]]) {
            header.textContent = TRANSLATIONS[currentLanguage][headerKeys[index]];
        }
    });
}

function loadLanguagePreference() {
    const savedLang = localStorage.getItem(CONFIG.STORAGE_KEYS.LANGUAGE);
    if (savedLang && TRANSLATIONS[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('en');
    }
}

function t(key, params = {}) {
    let text = (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) || key;
    
    // Replace parameters
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
}

// Filters toggle
function toggleFilters() {
    const filtersContent = document.getElementById('filters-content');
    const toggleIcon = document.getElementById('filters-toggle-icon');
    const isCollapsed = filtersContent.classList.toggle('collapsed');
    
    if (isCollapsed) {
        toggleIcon.className = 'fas fa-chevron-down';
    } else {
        toggleIcon.className = 'fas fa-chevron-up';
    }
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.FILTERS_VISIBLE, !isCollapsed);
}

function loadFiltersVisibility() {
    const filtersVisible = localStorage.getItem(CONFIG.STORAGE_KEYS.FILTERS_VISIBLE);
    if (filtersVisible === 'false') {
        const filtersContent = document.getElementById('filters-content');
        const toggleIcon = document.getElementById('filters-toggle-icon');
        filtersContent.classList.add('collapsed');
        toggleIcon.className = 'fas fa-chevron-down';
    }
}

// Initialize app
function initializeApp() {
    const savedFontSize = localStorage.getItem(CONFIG.STORAGE_KEYS.FONT_SIZE) || 'medium';
    setFontSize(savedFontSize);
    
    loadLanguagePreference();
    loadFavorites();
    generateUserAlias();
    checkAdminSession();
    loadChatMessages();
    loadRatingsAndComments();
    
    renderMovies(getMovies());
    renderChatRooms();
    updateResultsCount();
    
    setupImageErrorHandling();
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    const favoritesSearch = document.getElementById('favorites-search');
    if (favoritesSearch) {
        favoritesSearch.addEventListener('input', searchFavorites);
    }
    
    // Rating filter event listeners
    document.querySelectorAll('input[name="rating-range"]').forEach(input => {
        input.addEventListener('change', updateFilters);
    });
    
    // Platform and genre filter event listeners
    document.querySelectorAll('input[name="platform"], input[name="genre"]').forEach(input => {
        input.addEventListener('change', updateFilters);
    });
    
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    const commentTextarea = document.getElementById('comment-text');
    if (commentTextarea) {
        commentTextarea.addEventListener('input', updateCharCount);
    }
    
    const ratingSlider = document.getElementById('rating-slider');
    if (ratingSlider) {
        ratingSlider.addEventListener('input', updateRatingDisplay);
    }
    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });
    
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', handleChatKeyPress);
    }
}

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    closeModal();
    hideAdminLogin();
    
    const pageElement = document.getElementById(`page-${pageId}`);
    if (pageElement) {
        pageElement.classList.add('active');
        state.currentPage = pageId;
        
        updateNavigation(pageId);
        
        if (pageId === 'favorites') {
            renderFavorites();
        } else if (pageId === 'chat') {
            initializeChat();
        } else if (pageId === 'admin') {
            if (!state.isAdmin) {
                showPage('home');
                showAdminLogin();
                return;
            }
            renderAdminPanel();
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateUrlFromState();
    }
}

function updateNavigation(activePage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.getElementById(`nav-${activePage}`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Search and filters
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.querySelector('.clear-btn');
    const searchTerm = searchInput ? searchInput.value.trim() : '';
    
    if (clearBtn) {
        clearBtn.classList.toggle('visible', searchTerm.length > 0);
    }
    
    state.currentFilters.search = searchTerm.toLowerCase();
    applyFilters();
    updateUrlFromState();
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        handleSearch();
    }
}

function updateFilters() {
    // Update platforms
    state.currentFilters.platforms = Array.from(document.querySelectorAll('input[name="platform"]:checked'))
        .map(cb => cb.value);
    
    // Update genres
    state.currentFilters.genres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
        .map(cb => cb.value);
    
    // Update rating range
    const ratingRadio = document.querySelector('input[name="rating-range"]:checked');
    if (ratingRadio) {
        const value = ratingRadio.value;
        if (value === 'any') {
            state.currentFilters.minRating = 0;
            state.currentFilters.maxRating = 5;
        } else {
            const [min, max] = value.split('-').map(Number);
            state.currentFilters.minRating = min;
            state.currentFilters.maxRating = max;
        }
    }
    
    updateUrlFromState();
    applyFilters(); // Apply filters immediately when changed
}

function applyFilters() {
    const movies = getMovies();
    const filteredMovies = filterMovies(movies);
    renderMovies(filteredMovies);
    updateResultsCount(filteredMovies.length);
    
    const noResultsElement = document.getElementById('no-results');
    if (filteredMovies.length === 0) {
        noResultsElement.style.display = 'block';
    } else {
        noResultsElement.style.display = 'none';
    }
}

function filterMovies(movies) {
    return movies.filter(movie => {
        // Search filter
        if (state.currentFilters.search) {
            const searchTerm = state.currentFilters.search.toLowerCase();
            const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
            const matchesDescription = movie.description.toLowerCase().includes(searchTerm);
            const matchesGenre = movie.genre.some(g => g.toLowerCase().includes(searchTerm));
            const matchesDirector = movie.director.toLowerCase().includes(searchTerm);
            const matchesCast = movie.cast ? movie.cast.some(actor => actor.toLowerCase().includes(searchTerm)) : false;
            
            if (!matchesTitle && !matchesDescription && !matchesGenre && !matchesDirector && !matchesCast) {
                return false;
            }
        }
        
        // Platform filter
        if (state.currentFilters.platforms.length > 0) {
            const hasPlatform = state.currentFilters.platforms.some(platform => 
                movie.platforms.includes(platform)
            );
            if (!hasPlatform) return false;
        }
        
        // Genre filter
        if (state.currentFilters.genres.length > 0) {
            const hasGenre = state.currentFilters.genres.some(genre =>
                movie.genre.map(g => g.toLowerCase()).includes(genre.toLowerCase())
            );
            if (!hasGenre) return false;
        }
        
        // Rating range filter
        if (state.currentFilters.minRating > 0 || state.currentFilters.maxRating < 5) {
            // Check if movie rating falls within the selected range
            if (movie.rating < state.currentFilters.minRating || movie.rating > state.currentFilters.maxRating) {
                return false;
            }
        }
        
        return true;
    });
}

function clearAllFilters() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    const anyRatingRadio = document.querySelector('input[name="rating-range"][value="any"]');
    if (anyRatingRadio) {
        anyRatingRadio.checked = true;
    }
    
    state.currentFilters = {
        search: '',
        platforms: [],
        genres: [],
        minRating: 0,
        maxRating: 5
    };
    
    applyFilters();
    updateUrlFromState();
}

function updateResultsCount(count) {
    const resultsCountElement = document.getElementById('results-count');
    if (resultsCountElement) {
        const movies = getMovies();
        const actualCount = count !== undefined ? count : filterMovies(movies).length;
        resultsCountElement.textContent = actualCount;
    }
}

// Render movies
function renderMovies(movies) {
    const moviesGrid = document.getElementById('movies-grid');
    if (!moviesGrid) return;
    
    moviesGrid.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const isFavorite = state.favorites.has(movie.id);
    
    const platformIcons = movie.platforms.map(platform => {
        const platformInfo = CONFIG.PLATFORMS[platform];
        if (platformInfo) {
            return `
                <span class="service-badge ${platformInfo.class}-badge" 
                      style="background-color: ${platformInfo.color}22; border-color: ${platformInfo.color}">
                    <i class="${platformInfo.icon} ${platformInfo.class}-icon"></i>
                </span>
            `;
        }
        return '';
    }).join('');
    
    const card = document.createElement('div');
    card.className = `movie-card ${isFavorite ? 'is-favorite' : ''}`;
    card.setAttribute('data-movie-id', movie.id);
    card.innerHTML = `
        ${isFavorite ? '<div class="favorite-indicator"><i class="fas fa-heart"></i></div>' : ''}
        
        <div class="movie-poster" onclick="showMovieModal(${movie.id})">
            <img src="${movie.poster}" alt="Movie poster: ${movie.title}" loading="lazy" class="movie-poster-img">
            <div class="movie-overlay">
                <div class="overlay-actions">
                    <button class="overlay-btn ${isFavorite ? 'favorited' : ''}" 
                            onclick="event.stopPropagation(); toggleFavorite(${movie.id})"
                            aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="overlay-btn" 
                            onclick="event.stopPropagation(); showMovieModal(${movie.id})"
                            aria-label="Movie details">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>
            </div>
            <div class="rating-badge">
                <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
            </div>
            <div class="streaming-services">
                ${platformIcons}
            </div>
        </div>
        
        <div class="movie-info">
            <h3 class="movie-title" onclick="showMovieModal(${movie.id})">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-year">${movie.year}</span>
                <span class="movie-genre">${movie.genre.slice(0, 2).join(', ')}${movie.genre.length > 2 ? '...' : ''}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Movie modal
function showMovieModal(movieId) {
    const movie = getMovie(movieId);
    if (!movie) return;
    
    state.currentMovieModal = movieId;
    
    // Set all movie information
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-year').textContent = movie.year;
    document.getElementById('modal-duration').textContent = movie.duration;
    document.getElementById('modal-genre').textContent = movie.genre.join(', ');
    document.getElementById('modal-description').textContent = movie.description;
    
    // Add cast and director if they exist
    const castElement = document.getElementById('modal-cast');
    if (castElement && movie.cast) {
        castElement.textContent = movie.cast.join(', ');
    }
    
    const directorElement = document.getElementById('modal-director');
    if (directorElement && movie.director) {
        directorElement.textContent = movie.director;
    }
    
    // Set backdrop image
    const modalHero = document.getElementById('modal-hero');
    const backdropUrl = movie.backdrop || movie.poster;
    modalHero.style.backgroundImage = `url('${backdropUrl}')`;
    
    // Render platforms, ratings, and comments
    renderPlatforms(movie.platforms);
    renderMovieRatings(movie);
    renderMovieComments(movieId);
    
    // Show modal
    const modal = document.getElementById('movie-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        const closeBtn = document.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('movie-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.currentMovieModal = null;
}

function renderPlatforms(platforms) {
    const platformsGrid = document.getElementById('platforms-grid');
    const noPlatforms = document.getElementById('no-platforms');
    
    if (!platformsGrid || !noPlatforms) return;
    
    platformsGrid.innerHTML = '';
    
    if (platforms && platforms.length > 0) {
        platforms.forEach(platformId => {
            const platform = CONFIG.PLATFORMS[platformId];
            if (platform) {
                const platformElement = document.createElement('div');
                platformElement.className = 'platform-item';
                platformElement.innerHTML = `
                    <div class="platform-logo" style="color: ${platform.color}">
                        <i class="${platform.icon} ${platform.class}-icon"></i>
                    </div>
                    <div class="platform-name">${platform.name}</div>
                `;
                platformsGrid.appendChild(platformElement);
            }
        });
        noPlatforms.style.display = 'none';
    } else {
        noPlatforms.style.display = 'block';
    }
}

function renderMovieRatings(movie) {
    const avgRatingElement = document.getElementById('avg-rating');
    const ratingCountElement = document.getElementById('rating-count');
    const ratingBarsElement = document.getElementById('rating-bars');
    const ratingSlider = document.getElementById('rating-slider');
    const ratingValue = document.getElementById('rating-value');
    
    if (!avgRatingElement || !ratingCountElement || !ratingBarsElement) return;
    
    const totalRatings = Object.values(movie.ratings || {}).reduce((a, b) => a + b, 0);
    const avgRating = movie.rating || 0;
    
    avgRatingElement.textContent = avgRating.toFixed(1);
    ratingCountElement.innerHTML = `${totalRatings} ${t('ratings-count')}`;
    renderRatingBars(movie.ratings || {});
    
    const userRating = state.movieRatings[movie.id] || 0;
    if (ratingSlider) {
        ratingSlider.value = userRating || 5;
    }
    if (ratingValue) {
        ratingValue.textContent = (userRating || 5).toFixed(1);
    }
    renderStars(userRating || 5);
}

function renderRatingBars(ratings) {
    const ratingBars = document.getElementById('rating-bars');
    if (!ratingBars) return;
    
    ratingBars.innerHTML = '';
    
    const totalRatings = Object.values(ratings).reduce((a, b) => a + b, 0);
    
    for (let i = 5; i >= 1; i--) {
        const count = ratings[i] || 0;
        const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
        
        const bar = document.createElement('div');
        bar.className = 'rating-bar';
        bar.innerHTML = `
            <div class="rating-bar-label">
                ${i} <i class="fas fa-star"></i>
            </div>
            <div class="rating-bar-fill">
                <div class="rating-bar-progress" style="width: ${percentage}%"></div>
            </div>
            <div class="rating-bar-count">${count}</div>
        `;
        ratingBars.appendChild(bar);
    }
}

function renderStars(rating) {
    const starsContainer = document.getElementById('rating-stars');
    if (!starsContainer) return;
    
    starsContainer.innerHTML = '';
    
    const starRating = Math.round(rating / 2);
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('div');
        star.className = `star ${i <= starRating ? 'filled' : ''}`;
        star.innerHTML = '<i class="fas fa-star"></i>';
        star.addEventListener('click', () => {
            const newRating = i * 2;
            const slider = document.getElementById('rating-slider');
            if (slider) {
                slider.value = newRating;
                updateRatingDisplay();
            }
        });
        starsContainer.appendChild(star);
    }
}

function updateRatingDisplay() {
    const slider = document.getElementById('rating-slider');
    const valueDisplay = document.getElementById('rating-value');
    if (slider && valueDisplay) {
        const value = parseInt(slider.value);
        valueDisplay.textContent = value.toFixed(1);
        renderStars(value);
    }
}

function submitRating() {
    if (!state.currentMovieModal) return;
    
    const slider = document.getElementById('rating-slider');
    if (!slider) return;
    
    const rating = parseInt(slider.value);
    
    state.movieRatings[state.currentMovieModal] = rating;
    saveRatings();
    
    const movie = getMovie(state.currentMovieModal);
    if (movie) {
        movie.ratings = movie.ratings || {};
        const starRating = Math.round(rating / 2);
        movie.ratings[starRating] = (movie.ratings[starRating] || 0) + 1;
        
        const totalRatings = Object.values(movie.ratings).reduce((a, b) => a + b, 0);
        const sumRatings = Object.entries(movie.ratings).reduce((sum, [star, count]) => {
            return sum + (parseInt(star) * count);
        }, 0);
        movie.rating = totalRatings > 0 ? (sumRatings / totalRatings) : 0;
        
        renderMovieRatings(movie);
    }
    
    showNotification('rating-saved', 'success');
}

// Comments
function renderMovieComments(movieId) {
    const commentsList = document.getElementById('comments-list');
    const commentsEmpty = document.getElementById('comments-empty');
    const commentsCount = document.getElementById('comments-count');
    
    if (!commentsList || !commentsEmpty || !commentsCount) return;
    
    commentsList.innerHTML = '';
    
    const movieComments = state.comments[movieId] || [];
    commentsCount.textContent = `(${movieComments.length})`;
    
    if (movieComments.length === 0) {
        commentsEmpty.style.display = 'block';
        commentsList.style.display = 'none';
        return;
    }
    
    commentsEmpty.style.display = 'none';
    commentsList.style.display = 'flex';
    
    movieComments.slice().reverse().forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.className = `comment ${comment.spoiler ? 'spoiler' : ''}`;
    
    const date = new Date(comment.timestamp);
    const formattedDate = date.toLocaleDateString(currentLanguage === 'pl' ? 'pl-PL' : currentLanguage === 'es' ? 'es-ES' : 'en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    commentDiv.innerHTML = `
        ${comment.spoiler ? `
            <div class="spoiler-warning">
                <i class="fas fa-eye-slash"></i> ${t('contains-spoilers').toUpperCase()}
            </div>
        ` : ''}
        
        <div class="comment-header">
            <div class="comment-author">
                <i class="fas fa-user"></i> ${comment.author}
            </div>
            <div class="comment-date">${formattedDate}</div>
        </div>
        <div class="comment-text">${escapeHtml(comment.text)}</div>
        
        ${state.isAdmin ? `
            <div class="comment-actions">
                <button class="action-btn delete" onclick="deleteComment(${comment.id})">
                    <i class="fas fa-trash"></i> ${t('delete')}
                </button>
            </div>
        ` : ''}
    `;
    
    return commentDiv;
}

function submitComment(event) {
    event.preventDefault();
    
    if (!state.currentMovieModal) return;
    
    const textarea = document.getElementById('comment-text');
    const spoilerCheckbox = document.getElementById('spoiler-checkbox');
    
    if (!textarea) return;
    
    const text = textarea.value.trim();
    
    if (!text) {
        showNotification('comment-empty', 'error');
        return;
    }
    
    if (containsOffensiveLanguage(text)) {
        showNotification('offensive-content', 'error');
        return;
    }
    
    const comment = {
        id: Date.now(),
        movieId: state.currentMovieModal,
        author: state.userAlias,
        text: text,
        spoiler: spoilerCheckbox ? spoilerCheckbox.checked : false,
        timestamp: new Date().toISOString()
    };
    
    if (!state.comments[state.currentMovieModal]) {
        state.comments[state.currentMovieModal] = [];
    }
    state.comments[state.currentMovieModal].push(comment);
    
    saveComments();
    textarea.value = '';
    if (spoilerCheckbox) spoilerCheckbox.checked = false;
    updateCharCount();
    renderMovieComments(state.currentMovieModal);
    showNotification('comment-added', 'success');
    
    if (comment.spoiler) {
        showNotification('spoiler-warning', 'warning');
    }
}

function updateCharCount() {
    const textarea = document.getElementById('comment-text');
    const charCount = document.getElementById('char-count');
    if (textarea && charCount) {
        const length = textarea.value.length;
        charCount.textContent = `${length}/500`;
        charCount.style.color = length > 450 ? '#e50914' : '';
    }
}

function deleteComment(commentId) {
    if (!state.isAdmin) return;
    
    showConfirmModal(
        'confirm-delete-comment',
        'confirm-delete-comment-message',
        () => {
            for (const movieId in state.comments) {
                const index = state.comments[movieId].findIndex(c => c.id === commentId);
                if (index !== -1) {
                    state.comments[movieId].splice(index, 1);
                    break;
                }
            }
            
            saveComments();
            
            if (state.currentMovieModal) {
                renderMovieComments(state.currentMovieModal);
            }
            
            showNotification('comment-deleted', 'success');
        }
    );
}

// Favorites
function toggleFavorite(movieId) {
    const movie = getMovie(movieId);
    if (!movie) return;
    
    if (state.favorites.has(movieId)) {
        state.favorites.delete(movieId);
        showNotification(`"${movie.title}" ${t('removed-from-favorites')}`, 'success');
    } else {
        state.favorites.add(movieId);
        showNotification(`"${movie.title}" ${t('added-to-favorites')}`, 'success');
    }
    
    saveFavorites();
    updateFavoriteIndicators(movieId);
    
    if (state.currentPage === 'favorites') {
        renderFavorites();
    }
}

function loadFavorites() {
    try {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEYS.FAVORITES);
        if (saved) {
            const favoritesArray = JSON.parse(saved);
            state.favorites = new Set(favoritesArray);
        }
    } catch (error) {
        console.error('Error loading favorites:', error);
        state.favorites = new Set();
    }
}

function saveFavorites() {
    try {
        const favoritesArray = Array.from(state.favorites);
        localStorage.setItem(CONFIG.STORAGE_KEYS.FAVORITES, JSON.stringify(favoritesArray));
    } catch (error) {
        console.error('Error saving favorites:', error);
    }
}

function updateFavoriteIndicators(movieId) {
    const movieCards = document.querySelectorAll(`.movie-card[data-movie-id="${movieId}"]`);
    movieCards.forEach(card => {
        card.classList.toggle('is-favorite', state.favorites.has(movieId));
        
        const favoriteIndicator = card.querySelector('.favorite-indicator');
        if (favoriteIndicator) {
            favoriteIndicator.style.display = state.favorites.has(movieId) ? 'flex' : 'none';
        }
        
        const favoriteBtn = card.querySelector('.overlay-btn:first-child');
        if (favoriteBtn) {
            favoriteBtn.classList.toggle('favorited', state.favorites.has(movieId));
            favoriteBtn.setAttribute('aria-label', 
                state.favorites.has(movieId) ? 'Remove from favorites' : 'Add to favorites');
        }
    });
    
    if (state.currentMovieModal === movieId) {
        const modalFavoriteBtn = document.querySelector('.modal .overlay-btn');
        if (modalFavoriteBtn) {
            modalFavoriteBtn.classList.toggle('favorited', state.favorites.has(movieId));
        }
    }
}

function renderFavorites() {
    const favoritesGrid = document.getElementById('favorites-grid');
    const favoritesEmpty = document.getElementById('favorites-empty');
    
    if (!favoritesGrid || !favoritesEmpty) return;
    
    favoritesGrid.innerHTML = '';
    
    const movies = getMovies();
    const favoriteMovies = movies.filter(movie => state.favorites.has(movie.id));
    
    if (favoriteMovies.length === 0) {
        favoritesEmpty.style.display = 'block';
        favoritesGrid.style.display = 'none';
        return;
    }
    
    favoritesEmpty.style.display = 'none';
    favoritesGrid.style.display = 'grid';
    
    favoriteMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        favoritesGrid.appendChild(movieCard);
    });
}

function searchFavorites() {
    const searchInput = document.getElementById('favorites-search');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const favoritesGrid = document.getElementById('favorites-grid');
    const movieCards = favoritesGrid.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        const title = card.querySelector('.movie-title').textContent.toLowerCase();
        const genre = card.querySelector('.movie-genre').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || genre.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function clearFavorites() {
    if (state.favorites.size === 0) return;
    
    showConfirmModal(
        'confirm-clear-favorites',
        'confirm-clear-favorites-message',
        () => {
            state.favorites.clear();
            saveFavorites();
            renderFavorites();
            updateAllFavoriteIndicators();
            showNotification('favorites-cleared', 'success');
        },
        { count: state.favorites.size }
    );
}

function updateAllFavoriteIndicators() {
    const movies = getMovies();
    movies.forEach(movie => {
        updateFavoriteIndicators(movie.id);
    });
}

function exportFavorites() {
    const movies = getMovies();
    const favoriteMovies = movies.filter(movie => state.favorites.has(movie.id));
    
    if (favoriteMovies.length === 0) {
        showNotification('no-movies-export', 'warning');
        return;
    }
    
    const exportData = {
        exportedAt: new Date().toISOString(),
        language: currentLanguage,
        count: favoriteMovies.length,
        movies: favoriteMovies.map(movie => ({
            title: movie.title,
            year: movie.year,
            genre: movie.genre,
            rating: movie.rating,
            platforms: movie.platforms.map(p => CONFIG.PLATFORMS[p]?.name || p)
        }))
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `plusflix-favorites-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification(`${t('exported')} ${favoriteMovies.length} ${t('movies')}`, 'success');
}

// Universal English alias generator
function generateUserAlias() {
    try {
        const savedAlias = localStorage.getItem(CONFIG.STORAGE_KEYS.USER_ALIAS);
        if (savedAlias) {
            state.userAlias = savedAlias;
            return;
        }
    } catch (error) {
        console.error('Error loading alias:', error);
    }
    
    const prefixes = ['Movie', 'Film', 'Cinema', 'Screen', 'Reel', 'Scene', 'Story', 'View', 'Cine', 'FilmFan'];
    const suffixes = ['Watcher', 'Lover', 'Buff', 'Enthusiast', 'Critic', 'Viewer', 'Fan', 'Addict', 'Guru', 'Master'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    
    state.userAlias = `${randomPrefix}${randomSuffix}${randomNumber}`;
    
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER_ALIAS, state.userAlias);
    } catch (error) {
        console.error('Error saving alias:', error);
    }
}

// Chat functions
function initializeChat() {
    renderChatRooms();
    
    if (!state.currentChatRoom && CONFIG.CHAT_ROOMS.length > 0) {
        selectChatRoom(CONFIG.CHAT_ROOMS[0].id);
    }
}

function renderChatRooms() {
    const chatRoomList = document.getElementById('chat-room-list');
    if (!chatRoomList) return;
    
    chatRoomList.innerHTML = '';
    
    CONFIG.CHAT_ROOMS.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.className = `chat-room-item ${state.currentChatRoom === room.id ? 'active' : ''}`;
        roomElement.onclick = () => selectChatRoom(room.id);
        
        const roomNameKey = `room-${room.id}`;
        const roomName = TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][roomNameKey] 
            ? TRANSLATIONS[currentLanguage][roomNameKey] 
            : room.name;
        
        roomElement.innerHTML = `
            <div class="chat-room-name">
                <i class="${room.icon}"></i> ${roomName}
            </div>
            <div class="chat-room-desc">${room.description}</div>
        `;
        chatRoomList.appendChild(roomElement);
    });
}

function selectChatRoom(roomId) {
    state.currentChatRoom = roomId;
    
    renderChatRooms();
    
    const room = CONFIG.CHAT_ROOMS.find(r => r.id === roomId);
    if (room) {
        const roomNameKey = `room-${room.id}`;
        const roomName = TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][roomNameKey] 
            ? TRANSLATIONS[currentLanguage][roomNameKey] 
            : room.name;
        
        document.getElementById('current-chat-title').innerHTML = `
            <i class="${room.icon}"></i> ${roomName}
        `;
    }
    
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message-btn');
    
    if (chatInput && sendButton) {
        chatInput.disabled = false;
        chatInput.placeholder = t('chat-placeholder-active');
        sendButton.disabled = false;
    }
    
    const clearChatBtn = document.getElementById('clear-chat-btn');
    if (clearChatBtn) {
        clearChatBtn.style.display = state.isAdmin ? 'block' : 'none';
    }
    
    loadChatMessages(roomId);
}

function loadChatMessages(roomId) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = '';
    
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'welcome-message';
    welcomeMessage.innerHTML = `
        <div class="message system">
            <div class="message-header">
                <span class="message-author">System</span>
                <span class="message-time">${new Date().toLocaleTimeString(currentLanguage === 'pl' ? 'pl-PL' : currentLanguage === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div class="message-text">${t('welcome-chat')}</div>
        </div>
    `;
    chatMessages.appendChild(welcomeMessage);
    
    const roomMessages = state.chatMessages[roomId] || [];
    roomMessages.forEach(message => {
        addMessageToChat(message, false);
    });
    
    scrollChatToBottom();
}

function loadChatMessages() {
    try {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEYS.CHAT_MESSAGES);
        if (saved) {
            state.chatMessages = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error loading chat messages:', error);
        state.chatMessages = {};
    }
}

function saveChatMessages() {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.CHAT_MESSAGES, JSON.stringify(state.chatMessages));
    } catch (error) {
        console.error('Error saving chat messages:', error);
    }
}

function sendMessage() {
    if (!state.currentChatRoom) {
        showNotification('select-chat-first', 'warning');
        return;
    }
    
    const chatInput = document.getElementById('chat-input');
    const messageText = chatInput.value.trim();
    
    if (!messageText) {
        showNotification('message-empty', 'warning');
        return;
    }
    
    if (containsOffensiveLanguage(messageText)) {
        showNotification('offensive-content', 'error');
        return;
    }
    
    const message = {
        id: Date.now(),
        roomId: state.currentChatRoom,
        author: state.isAdmin ? 'Administrator 👑' : state.userAlias,
        text: messageText,
        timestamp: new Date().toISOString(),
        isAdmin: state.isAdmin
    };
    
    if (!state.chatMessages[state.currentChatRoom]) {
        state.chatMessages[state.currentChatRoom] = [];
    }
    state.chatMessages[state.currentChatRoom].push(message);
    
    saveChatMessages();
    chatInput.value = '';
    chatInput.focus();
    addMessageToChat(message, true);
    
    if (document.getElementById('auto-scroll').checked) {
        scrollChatToBottom();
    }
}

function addMessageToChat(message, animate = true) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${message.isAdmin ? 'admin' : ''}`;
    
    if (message.author === state.userAlias || (state.isAdmin && message.author.includes('Administrator'))) {
        messageElement.classList.add('own');
    }
    
    const date = new Date(message.timestamp);
    const formattedTime = date.toLocaleTimeString(currentLanguage === 'pl' ? 'pl-PL' : currentLanguage === 'es' ? 'es-ES' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    messageElement.innerHTML = `
        <div class="message-header">
            <span class="message-author">${escapeHtml(message.author)}</span>
            <span class="message-time">${formattedTime}</span>
        </div>
        <div class="message-text">${escapeHtml(message.text)}</div>
    `;
    
    if (animate) {
        messageElement.style.animation = 'messageSlideIn 0.3s';
    }
    
    chatMessages.appendChild(messageElement);
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function scrollChatToBottom() {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function clearChat() {
    if (!state.isAdmin || !state.currentChatRoom) return;
    
    showConfirmModal(
        'confirm-clear-chat',
        'confirm-clear-chat-message',
        () => {
            state.chatMessages[state.currentChatRoom] = [];
            saveChatMessages();
            loadChatMessages(state.currentChatRoom);
            showNotification('chat-cleared', 'success');
        }
    );
}

function toggleChatTheme() {
    const chatMain = document.querySelector('.chat-main');
    const themeIcon = document.getElementById('theme-icon');
    
    if (chatMain.classList.contains('dark-theme')) {
        chatMain.classList.remove('dark-theme');
        themeIcon.className = 'fas fa-moon';
    } else {
        chatMain.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
    }
}

// Admin functions
function showAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        document.getElementById('admin-username').focus();
    }, 100);
}

function hideAdminLogin() {
    const modal = document.getElementById('admin-login-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function loginAdmin(event) {
    event.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    if (username === CONFIG.ADMIN_CREDENTIALS.username && 
        password === CONFIG.ADMIN_CREDENTIALS.password) {
        
        state.isAdmin = true;
        
        if (rememberMe) {
            const session = {
                loggedIn: true,
                timestamp: Date.now(),
                expires: Date.now() + (7 * 24 * 60 * 60 * 1000)
            };
            localStorage.setItem(CONFIG.STORAGE_KEYS.ADMIN_SESSION, JSON.stringify(session));
        }
        
        hideAdminLogin();
        showPage('admin');
        showNotification('logged-in-as-admin', 'success');
        document.getElementById('admin-login-form').reset();
        
    } else {
        showNotification('invalid-credentials', 'error');
        document.getElementById('admin-password').value = '';
        document.getElementById('admin-password').focus();
    }
}

function checkAdminSession() {
    try {
        const session = localStorage.getItem(CONFIG.STORAGE_KEYS.ADMIN_SESSION);
        if (session) {
            const sessionData = JSON.parse(session);
            if (sessionData.loggedIn && sessionData.expires > Date.now()) {
                state.isAdmin = true;
            }
        }
    } catch (error) {
        console.error('Error checking admin session:', error);
    }
}

function logoutAdmin() {
    showConfirmModal(
        'confirm-logout',
        'confirm-logout-message',
        () => {
            state.isAdmin = false;
            localStorage.removeItem(CONFIG.STORAGE_KEYS.ADMIN_SESSION);
            showPage('home');
            showNotification('logged-out', 'success');
        }
    );
}

function renderAdminPanel() {
    if (!state.isAdmin) return;
    
    renderAdminMoviesTable();
    renderAdminComments();
    renderActiveChats();
    
    document.getElementById('admin-status').innerHTML = `
        <i class="fas fa-circle" style="color: #10b981"></i> ${t('logged-in')}
    `;
}

function renderAdminMoviesTable() {
    const tbody = document.getElementById('admin-movies-list');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    const movies = getMovies();
    movies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${movie.title}</strong></td>
            <td>${movie.year}</td>
            <td>${movie.genre.join(', ')}</td>
            <td>${movie.rating.toFixed(1)} <i class="fas fa-star" style="color: gold"></i></td>
            <td class="action-buttons">
                <button class="action-btn edit" onclick="editMovie(${movie.id})" aria-label="${t('edit')}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete" onclick="deleteMovie(${movie.id})" aria-label="${t('delete')}">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    document.getElementById('admin-movies-count').textContent = movies.length;
}

function addNewMovie(event) {
    event.preventDefault();
    
    const title = document.getElementById('movie-title').value.trim();
    const year = parseInt(document.getElementById('movie-year').value);
    const duration = document.getElementById('movie-duration').value.trim();
    const director = document.getElementById('movie-director').value.trim();
    const description = document.getElementById('movie-description').value.trim();
    const genres = document.getElementById('movie-genres').value.split(',').map(g => g.trim()).filter(g => g);
    const platforms = document.getElementById('movie-platforms').value.split(',').map(p => p.trim()).filter(p => p);
    const poster = document.getElementById('movie-poster').value.trim();
    const backdrop = document.getElementById('movie-backdrop').value.trim();
    
    if (!title || !year || !description) {
        showNotification('required-fields', 'error');
        return;
    }
    
    const newMovie = {
        id: MOVIE_DATA.en.length > 0 ? Math.max(...MOVIE_DATA.en.map(m => m.id)) + 1 : 1,
        title,
        year,
        genre: genres.length > 0 ? genres : ['Other'],
        duration: duration || 'Unknown',
        director: director || 'Unknown',
        description,
        rating: 0,
        ratings: {},
        platforms: platforms.filter(p => Object.keys(CONFIG.PLATFORMS).includes(p)),
        poster: poster || `https://via.placeholder.com/300x450/333/fff?text=${encodeURIComponent(title)}`,
        backdrop: backdrop || `https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80`,
        cast: []
    };
    
    // Add to all language versions (simplified - in real app you'd have separate forms for each language)
    MOVIE_DATA.en.push({...newMovie});
    MOVIE_DATA.pl.push({...newMovie, title, description}); // You'd need translations
    MOVIE_DATA.es.push({...newMovie, title, description}); // You'd need translations
    
    event.target.reset();
    renderAdminMoviesTable();
    renderMovies(getMovies());
    updateResultsCount();
    showNotification('movie-added', 'success');
}

function editMovie(movieId) {
    const movie = getMovie(movieId);
    if (!movie) return;
    
    showNotification(`Editing "${movie.title}" - feature under construction`, 'info');
}

function deleteMovie(movieId) {
    const movie = getMovie(movieId);
    if (!movie) return;
    
    showConfirmModal(
        'confirm-delete-movie',
        'confirm-delete-movie-message',
        () => {
            // Remove from all language versions
            MOVIE_DATA.en = MOVIE_DATA.en.filter(m => m.id !== movieId);
            MOVIE_DATA.pl = MOVIE_DATA.pl.filter(m => m.id !== movieId);
            MOVIE_DATA.es = MOVIE_DATA.es.filter(m => m.id !== movieId);
            
            if (state.favorites.has(movieId)) {
                state.favorites.delete(movieId);
                saveFavorites();
            }
            
            renderAdminMoviesTable();
            renderMovies(getMovies());
            updateResultsCount();
            updateAllFavoriteIndicators();
            
            showNotification('movie-deleted', 'success');
        },
        { title: movie.title }
    );
}

function renderAdminComments() {
    const container = document.getElementById('admin-comments-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    let allComments = [];
    for (const movieId in state.comments) {
        const movie = getMovie(parseInt(movieId));
        if (movie) {
            state.comments[movieId].forEach(comment => {
                allComments.push({
                    ...comment,
                    movieTitle: movie.title
                });
            });
        }
    }
    
    if (allComments.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-comment-slash"></i>
                <p>${t('no-comments')}</p>
            </div>
        `;
        return;
    }
    
    allComments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    allComments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment moderation-comment';
        
        const date = new Date(comment.timestamp);
        const formattedDate = date.toLocaleDateString(currentLanguage === 'pl' ? 'pl-PL' : currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        commentElement.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">
                    <i class="fas fa-user"></i> ${comment.author}
                    <span class="comment-movie">→ ${comment.movieTitle}</span>
                </div>
                <div class="comment-date">${formattedDate}</div>
            </div>
            <div class="comment-text">${escapeHtml(comment.text)}</div>
            ${comment.spoiler ? '<span class="spoiler-badge">SPOILER</span>' : ''}
            <div class="moderation-actions">
                <button class="secondary-btn" onclick="viewMovie(${comment.movieId})">
                    <i class="fas fa-eye"></i> ${t('view')}
                </button>
                <button class="action-btn delete" onclick="deleteComment(${comment.id})">
                    <i class="fas fa-trash"></i> ${t('delete')}
                </button>
            </div>
        `;
        
        container.appendChild(commentElement);
    });
}

function renderActiveChats() {
    const container = document.getElementById('active-chats-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    CONFIG.CHAT_ROOMS.forEach(room => {
        const messages = state.chatMessages[room.id] || [];
        const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
        
        const roomNameKey = `room-${room.id}`;
        const roomName = TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][roomNameKey] 
            ? TRANSLATIONS[currentLanguage][roomNameKey] 
            : room.name;
        
        const roomElement = document.createElement('div');
        roomElement.className = 'chat-room-item admin';
        roomElement.innerHTML = `
            <div class="chat-room-name">
                <i class="${room.icon}"></i> ${roomName}
                <span class="message-count">${messages.length} ${t('messages')}</span>
            </div>
            ${lastMessage ? `
                <div class="last-message">
                    <strong>${lastMessage.author}:</strong> ${lastMessage.text.substring(0, 50)}${lastMessage.text.length > 50 ? '...' : ''}
                </div>
            ` : '<div class="last-message">' + t('no-messages') + '</div>'}
            <div class="room-actions">
                <button class="secondary-btn" onclick="selectChatRoom('${room.id}'); showPage('chat')">
                    <i class="fas fa-comment"></i> ${t('enter')}
                </button>
                <button class="action-btn delete" onclick="clearChatRoom('${room.id}')">
                    <i class="fas fa-broom"></i> ${t('clear')}
                </button>
            </div>
        `;
        
        container.appendChild(roomElement);
    });
}

function clearChatRoom(roomId) {
    showConfirmModal(
        'confirm-clear-chat',
        'confirm-clear-chat-message',
        () => {
            state.chatMessages[roomId] = [];
            saveChatMessages();
            renderActiveChats();
            showNotification('chat-cleared', 'success');
        }
    );
}

function filterComments() {
    const filter = document.getElementById('comment-filter').value;
    showNotification(`Filtering comments - feature under construction`, 'info');
}

function refreshComments() {
    renderAdminComments();
    showNotification('comments-refreshed', 'success');
}

function viewMovie(movieId) {
    showPage('home');
    setTimeout(() => {
        showMovieModal(movieId);
    }, 100);
}

function showAdminTab(tabId) {
    document.querySelectorAll('.admin-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const tabElement = document.getElementById(`admin-tab-${tabId}`);
    const tabButton = document.querySelector(`.admin-tab[onclick="showAdminTab('${tabId}')"]`);
    
    if (tabElement && tabButton) {
        tabElement.classList.add('active');
        tabButton.classList.add('active');
    }
}

// URL and sharing functions
function updateUrlFromState() {
    const params = new URLSearchParams();
    
    if (state.currentPage !== 'home') {
        params.set('page', state.currentPage);
    }
    
    if (currentLanguage !== 'en') {
        params.set('lang', currentLanguage);
    }
    
    if (state.currentFilters.search) {
        params.set('search', state.currentFilters.search);
    }
    
    if (state.currentFilters.platforms.length > 0) {
        params.set('platforms', state.currentFilters.platforms.join(','));
    }
    
    if (state.currentFilters.genres.length > 0) {
        params.set('genres', state.currentFilters.genres.join(','));
    }
    
    if (state.currentFilters.minRating > 0 || state.currentFilters.maxRating < 5) {
        params.set('ratingRange', `${state.currentFilters.minRating}-${state.currentFilters.maxRating}`);
    }
    
    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
}

function loadFiltersFromUrl() {
    const params = new URLSearchParams(window.location.search);
    
    const lang = params.get('lang');
    if (lang && TRANSLATIONS[lang]) {
        setLanguage(lang);
    }
    
    const search = params.get('search');
    if (search) {
        document.getElementById('search-input').value = search;
        state.currentFilters.search = search.toLowerCase();
    }
    
    const platforms = params.get('platforms');
    if (platforms) {
        const platformArray = platforms.split(',');
        platformArray.forEach(platform => {
            const checkbox = document.querySelector(`input[name="platform"][value="${platform}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        state.currentFilters.platforms = platformArray;
    }
    
    const genres = params.get('genres');
    if (genres) {
        const genreArray = genres.split(',');
        genreArray.forEach(genre => {
            const checkbox = document.querySelector(`input[name="genre"][value="${genre}"]`);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        state.currentFilters.genres = genreArray;
    }
    
    const ratingRange = params.get('ratingRange');
    if (ratingRange) {
        const [min, max] = ratingRange.split('-').map(Number);
        state.currentFilters.minRating = min;
        state.currentFilters.maxRating = max;
        
        // Check the corresponding radio button
        const radioValue = min === 0 && max === 5 ? 'any' : `${min}-${max}`;
        const radio = document.querySelector(`input[name="rating-range"][value="${radioValue}"]`);
        if (radio) {
            radio.checked = true;
        }
    }
    
    const page = params.get('page');
    if (page) {
        showPage(page);
    }
    
    applyFilters();
}

function shareResults() {
    const currentUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'PLUSFLIX - Movie Search Engine',
            text: t('share-text'),
            url: currentUrl
        }).catch(error => {
            console.log('Error sharing:', error);
            copyToClipboard(currentUrl);
        });
    } else {
        copyToClipboard(currentUrl);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Error copying to clipboard:', err);
        showNotification('Failed to copy link', 'error');
    });
}

// Accessibility and utility functions
function setFontSize(size) {
    Object.values(CONFIG.FONT_SIZES).forEach(fontClass => {
        document.body.classList.remove(fontClass);
    });
    
    document.body.classList.add(CONFIG.FONT_SIZES[size]);
    
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`.font-btn[onclick="setFontSize('${size}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.FONT_SIZE, size);
    
    if (size === 'large') {
        showNotification('Font size increased for better readability', 'info');
    }
}

function handleKeyboardNavigation(event) {
    if (event.key === 'Escape') {
        closeModal();
        hideAdminLogin();
        const confirmModal = document.getElementById('confirm-modal');
        if (confirmModal.classList.contains('active')) {
            confirmModal.classList.remove('active');
        }
    }
    
    if (event.ctrlKey && !event.altKey && !event.shiftKey) {
        switch (event.key) {
            case '1':
                event.preventDefault();
                showPage('home');
                break;
            case '2':
                event.preventDefault();
                showPage('favorites');
                break;
            case '3':
                event.preventDefault();
                showPage('chat');
                break;
            case '4':
                event.preventDefault();
                if (state.isAdmin) {
                    showPage('admin');
                } else {
                    showAdminLogin();
                }
                break;
        }
    }
    
    if (event.key === 'Tab' && document.getElementById('movie-modal').classList.contains('active')) {
        handleModalTabNavigation(event);
    }
}

function handleModalTabNavigation(event) {
    const modal = document.getElementById('movie-modal');
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey) {
        if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
    } else {
        if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
}

function loadInitialData() {
    const movies = getMovies();
    if (movies.length === 0) {
        document.getElementById('no-results').style.display = 'block';
    }
}

function loadRatingsAndComments() {
    try {
        const savedRatings = localStorage.getItem(CONFIG.STORAGE_KEYS.MOVIE_RATINGS);
        if (savedRatings) {
            state.movieRatings = JSON.parse(savedRatings);
        }
    } catch (error) {
        console.error('Error loading ratings:', error);
        state.movieRatings = {};
    }
    
    try {
        const savedComments = localStorage.getItem(CONFIG.STORAGE_KEYS.COMMENTS);
        if (savedComments) {
            state.comments = JSON.parse(savedComments);
        }
    } catch (error) {
        console.error('Error loading comments:', error);
        state.comments = {};
    }
}

function saveRatings() {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.MOVIE_RATINGS, JSON.stringify(state.movieRatings));
    } catch (error) {
        console.error('Error saving ratings:', error);
    }
}

function saveComments() {
    try {
        localStorage.setItem(CONFIG.STORAGE_KEYS.COMMENTS, JSON.stringify(state.comments));
    } catch (error) {
        console.error('Error saving comments:', error);
    }
}

function showNotification(message, type = 'info') {
    console.log(`${type.toUpperCase()}: ${message}`);
    
    const translatedMessage = TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][message] 
        ? TRANSLATIONS[currentLanguage][message] 
        : message;
    
    if (type === 'error') {
        alert(`${t('error')}: ${translatedMessage}`);
    } else if (type === 'warning') {
        alert(`${t('warning')}: ${translatedMessage}`);
    } else if (type === 'success') {
        // You could implement a toast notification here
        console.log(`✅ ${translatedMessage}`);
    } else {
        console.log(`ℹ️ ${translatedMessage}`);
    }
}

function showConfirmModal(titleKey, messageKey, onConfirm, params = {}) {
    const modal = document.getElementById('confirm-modal');
    const titleElement = document.getElementById('confirm-title');
    const messageElement = document.getElementById('confirm-message');
    const cancelBtn = document.getElementById('confirm-cancel');
    const okBtn = document.getElementById('confirm-ok');
    
    titleElement.textContent = t(titleKey);
    messageElement.textContent = t(messageKey, params);
    
    cancelBtn.innerHTML = `<i class="fas fa-times"></i> ${t('cancel')}`;
    okBtn.innerHTML = `<i class="fas fa-check"></i> ${t('confirm')}`;
    
    const closeModal = () => {
        modal.classList.remove('active');
        cancelBtn.onclick = null;
        okBtn.onclick = null;
    };
    
    cancelBtn.onclick = closeModal;
    okBtn.onclick = () => {
        onConfirm();
        closeModal();
    };
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    
    setTimeout(() => {
        cancelBtn.focus();
    }, 100);
}

function containsOffensiveLanguage(text) {
    const offensiveWords = [
        'stupid', 'idiot', 'moron', 'jerk', 'fool',
        'głupi', 'idiota', 'debil', 'kretyn', 'cham',
        'estúpido', 'idiota', 'tonto', 'imbécil'
    ];
    
    const lowerText = text.toLowerCase();
    return offensiveWords.some(word => lowerText.includes(word));
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function setupImageErrorHandling() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG' && e.target.classList.contains('movie-poster-img')) {
            e.target.src = 'https://via.placeholder.com/300x450/333/fff?text=No+poster';
            e.target.alt = 'No movie poster available';
        }
    }, true);
}

function showLoadingOverlay(show) {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.toggle('active', show);
    }
}

function resetSettings() {
    showConfirmModal(
        'confirm-reset-settings',
        'confirm-reset-settings-message',
        () => {
            setFontSize('medium');
            document.getElementById('items-per-page').value = 12;
            document.getElementById('default-sort').value = 'newest';
            document.querySelectorAll('#settings-form input[type="checkbox"]').forEach(cb => {
                cb.checked = true;
            });
            
            showNotification('settings-reset', 'success');
        }
    );
}

function searchAdminMovies() {
    const searchInput = document.getElementById('admin-movie-search');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const rows = document.querySelectorAll('#admin-movies-list tr');
    
    rows.forEach(row => {
        const title = row.cells[0].textContent.toLowerCase();
        const year = row.cells[1].textContent;
        const genres = row.cells[2].textContent.toLowerCase();
        
        if (title.includes(searchTerm) || genres.includes(searchTerm) || year.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

window.showPage = showPage;
window.setFontSize = setFontSize;
window.clearSearch = clearSearch;
window.showMovieModal = showMovieModal;
window.closeModal = closeModal;
window.toggleFavorite = toggleFavorite;
window.submitRating = submitRating;
window.submitComment = submitComment;
window.updateRatingDisplay = updateRatingDisplay;
window.updateCharCount = updateCharCount;
window.searchFavorites = searchFavorites;
window.clearFavorites = clearFavorites;
window.exportFavorites = exportFavorites;
window.selectChatRoom = selectChatRoom;
window.sendMessage = sendMessage;
window.handleChatKeyPress = handleChatKeyPress;
window.clearChat = clearChat;
window.toggleChatTheme = toggleChatTheme;
window.scrollChatToBottom = scrollChatToBottom;
window.showAdminLogin = showAdminLogin;
window.hideAdminLogin = hideAdminLogin;
window.loginAdmin = loginAdmin;
window.logoutAdmin = logoutAdmin;
window.showAdminTab = showAdminTab;
window.shareResults = shareResults;
window.clearAllFilters = clearAllFilters;
window.applyFilters = applyFilters;
window.editMovie = editMovie;
window.deleteMovie = deleteMovie;
window.filterComments = filterComments;
window.refreshComments = refreshComments;
window.viewMovie = viewMovie;
window.clearChatRoom = clearChatRoom;
window.resetSettings = resetSettings;
window.deleteComment = deleteComment;
window.updateFilters = updateFilters;
window.setLanguage = setLanguage;
window.searchAdminMovies = searchAdminMovies;
window.toggleFilters = toggleFilters;