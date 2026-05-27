import {
  Smile,
  Brain,
  Users,
  Moon,
  Heart,
  Gem,
  Laugh,
  CloudRain,
  Swords,
  Theater,
  Popcorn,
  Zap,
} from "lucide-react";

import type { Content, MoodRow } from "@/types/content";

const placeholderPersonImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop";

export const contentPool: Content[] = [
  {
    slug: "kalki-2898-ad",
    title: "Kalki 2898 AD",
    rating: "7.0",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A bounty hunter becomes connected to a larger cosmic battle in a dystopian future ruled by a powerful empire.",
    releasedOn: "2024",
    runtime: "3h 1m",
    storyline:
      "Set in a post-apocalyptic world, the story follows rebels, warriors and seekers who become involved in protecting an unborn child believed to carry divine importance.",
    tags: ["Mythic", "Action", "Sci-Fi", "Dystopian"],
    starCast: [
      {
        name: "Prabhas",
        characterName: "Bhairava",
        image: placeholderPersonImage,
      },
      {
        name: "Amitabh Bachchan",
        characterName: "Ashwatthama",
        image: placeholderPersonImage,
      },
      {
        name: "Deepika Padukone",
        characterName: "SUM-80",
        image: placeholderPersonImage,
      },
      {
        name: "Kamal Haasan",
        characterName: "Supreme Leader Yaskin",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Nag Ashwin",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Nag Ashwin",
        image: placeholderPersonImage,
      },
    ],

    watchOnKyaDekhe: true,
    kyadekheWatchUrl: "/watch/kalki-2898-ad",
    tmdbId: "801688-2898",
    vidkingUrl: "https://www.vidking.net/embed/movie/801688-2898",
  },
  {
    slug: "mirzapur",
    title: "Mirzapur",
    rating: "8.5",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=700&auto=format&fit=crop",
    type: "web-series",
    plot:
      "A lawless city becomes the battleground for power, revenge and family ambition.",
    releasedOn: "2018",
    runtime: "3 seasons",
    storyline:
      "The Tripathi crime family controls Mirzapur, but a chain of violence pulls two brothers into the world of guns, politics and revenge.",
    tags: ["Crime", "Drama", "Gangster", "Thriller"],
    starCast: [
      {
        name: "Pankaj Tripathi",
        characterName: "Akhandanand Tripathi / Kaleen Bhaiya",
        image: placeholderPersonImage,
      },
      {
        name: "Ali Fazal",
        characterName: "Guddu Pandit",
        image: placeholderPersonImage,
      },
      {
        name: "Divyenndu",
        characterName: "Munna Tripathi",
        image: placeholderPersonImage,
      },
      {
        name: "Shweta Tripathi Sharma",
        characterName: "Golu Gupta",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Puneet Krishna",
        image: placeholderPersonImage,
      },
      {
        name: "Vineet Krishna",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Gurmmeet Singh",
        image: placeholderPersonImage,
      },
      {
        name: "Mihir Desai",
        image: placeholderPersonImage,
      },
    ],

    tmdbId: "",
    season: 1,
    episode: 8,
    watchOnKyaDekhe: true,
    kyadekheWatchUrl: "/watch/",
  },
  {
    slug: "12th-fail",
    title: "12th Fail",
    rating: "8.8",
    platform: "Disney+ hotstar",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A student from a small town restarts his life after failure and prepares for one of India's toughest exams.",
    releasedOn: "2023",
    runtime: "2h 26m",
    storyline:
      "Inspired by real events, the film follows Manoj Kumar Sharma's journey from academic failure to relentless UPSC preparation and personal transformation.",
    tags: ["Inspiring", "Drama", "Biographical", "Student Life"],
    starCast: [
      {
        name: "Vikrant Massey",
        characterName: "Manoj Kumar Sharma",
        image: placeholderPersonImage,
      },
      {
        name: "Medha Shankr",
        characterName: "Shraddha Joshi",
        image: placeholderPersonImage,
      },
      {
        name: "Anant V Joshi",
        characterName: "Pritam Pandey",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Vidhu Vinod Chopra",
        image: placeholderPersonImage,
      },
      {
        name: "Jaskunwar Kohli",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Vidhu Vinod Chopra",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "the-boys",
    title: "The Boys",
    rating: "8.7",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=700&auto=format&fit=crop",
    type: "tv-show",
    plot:
      "A vigilante group exposes corrupt superheroes who abuse fame, power and public trust.",
    releasedOn: "2019",
    runtime: "4 seasons",
    storyline:
      "In a world where superheroes are corporate celebrities, a group of outsiders fights to reveal the brutal truth behind the most powerful heroes.",
    tags: ["Dark", "Action", "Superhero", "Satire"],
    starCast: [
      {
        name: "Karl Urban",
        characterName: "Billy Butcher",
        image: placeholderPersonImage,
      },
      {
        name: "Jack Quaid",
        characterName: "Hughie Campbell",
        image: placeholderPersonImage,
      },
      {
        name: "Antony Starr",
        characterName: "Homelander",
        image: placeholderPersonImage,
      },
      {
        name: "Erin Moriarty",
        characterName: "Starlight",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Eric Kripke",
        image: placeholderPersonImage,
      },
      {
        name: "Garth Ennis",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Philip Sgriccia",
        image: placeholderPersonImage,
      },
      {
        name: "Eric Kripke",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    rating: "8.2",
    platform: "NETFLIX",
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "Peter Parker asks Doctor Strange for help after his identity is exposed, causing multiverse chaos.",
    releasedOn: "2021",
    runtime: "2h 28m",
    storyline:
      "When a spell goes wrong, villains from other universes enter Peter Parker's world, forcing him to face responsibility on a larger scale.",
    tags: ["Superhero", "Action", "Adventure", "Multiverse"],
    starCast: [
      {
        name: "Tom Holland",
        characterName: "Peter Parker / Spider-Man",
        image: placeholderPersonImage,
      },
      {
        name: "Zendaya",
        characterName: "MJ",
        image: placeholderPersonImage,
      },
      {
        name: "Benedict Cumberbatch",
        characterName: "Doctor Strange",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Chris McKenna",
        image: placeholderPersonImage,
      },
      {
        name: "Erik Sommers",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Jon Watts",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "twisters",
    title: "Twisters",
    rating: "6.6",
    platform: "JioCinema",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "Storm chasers risk everything to study and survive deadly tornado outbreaks.",
    releasedOn: "2024",
    runtime: "2h 2m",
    storyline:
      "A former storm chaser and a reckless social-media weather team collide during a dangerous tornado season.",
    tags: ["Disaster", "Action", "Adventure", "Survival"],
    starCast: [
      {
        name: "Daisy Edgar-Jones",
        characterName: "Kate Carter",
        image: placeholderPersonImage,
      },
      {
        name: "Glen Powell",
        characterName: "Tyler Owens",
        image: placeholderPersonImage,
      },
      {
        name: "Anthony Ramos",
        characterName: "Javi",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Mark L. Smith",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Lee Isaac Chung",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "godzilla-x-kong",
    title: "Godzilla x Kong: The New Empire",
    rating: "6.1",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "Godzilla and Kong face a hidden threat emerging from the depths of Hollow Earth.",
    releasedOn: "2024",
    runtime: "1h 55m",
    storyline:
      "The Titans' uneasy balance is tested when ancient forces and new enemies threaten both Hollow Earth and humanity.",
    tags: ["Monster", "Action", "Adventure", "Sci-Fi"],
    starCast: [
      {
        name: "Rebecca Hall",
        characterName: "Dr. Ilene Andrews",
        image: placeholderPersonImage,
      },
      {
        name: "Brian Tyree Henry",
        characterName: "Bernie Hayes",
        image: placeholderPersonImage,
      },
      {
        name: "Dan Stevens",
        characterName: "Trapper",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Terry Rossio",
        image: placeholderPersonImage,
      },
      {
        name: "Simon Barrett",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Adam Wingard",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "the-fall-guy",
    title: "The Fall Guy",
    rating: "6.9",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A stuntman searches for a missing movie star while trying to win back the director he loves.",
    releasedOn: "2024",
    runtime: "2h 6m",
    storyline:
      "After a career-threatening accident, Colt Seavers returns to a film set and gets pulled into a mystery bigger than the movie itself.",
    tags: ["Action", "Comedy", "Romance", "Hollywood"],
    starCast: [
      {
        name: "Ryan Gosling",
        characterName: "Colt Seavers",
        image: placeholderPersonImage,
      },
      {
        name: "Emily Blunt",
        characterName: "Jody Moreno",
        image: placeholderPersonImage,
      },
      {
        name: "Aaron Taylor-Johnson",
        characterName: "Tom Ryder",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Drew Pearce",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "David Leitch",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "murder-mubarak",
    title: "Murder Mubarak",
    rating: "5.9",
    platform: "NETFLIX",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A murder at an elite club exposes secrets hidden behind polished social lives.",
    releasedOn: "2024",
    runtime: "2h 20m",
    storyline:
      "When a death shakes an upscale Delhi club, a sharp investigator digs into a circle of wealthy suspects with messy personal histories.",
    tags: ["Mystery", "Comedy", "Crime", "Whodunit"],
    starCast: [
      {
        name: "Pankaj Tripathi",
        characterName: "ACP Bhavani Singh",
        image: placeholderPersonImage,
      },
      {
        name: "Sara Ali Khan",
        characterName: "Bambi Todi",
        image: placeholderPersonImage,
      },
      {
        name: "Vijay Varma",
        characterName: "Akash Dogra",
        image: placeholderPersonImage,
      },
      {
        name: "Karisma Kapoor",
        characterName: "Shehnaaz Noorani",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Gazal Dhaliwal",
        image: placeholderPersonImage,
      },
      {
        name: "Suprotim Sengupta",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Homi Adajania",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "maidaan",
    title: "Maidaan",
    rating: "8.0",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "An ambitious football coach builds a team that changes Indian football history.",
    releasedOn: "2024",
    runtime: "3h 1m",
    storyline:
      "Based on Syed Abdul Rahim's life, the film follows his efforts to shape India's national football team during a defining sporting era.",
    tags: ["Sports", "Drama", "Biographical", "Inspiring"],
    starCast: [
      {
        name: "Ajay Devgn",
        characterName: "Syed Abdul Rahim",
        image: placeholderPersonImage,
      },
      {
        name: "Priyamani",
        characterName: "Saira Rahim",
        image: placeholderPersonImage,
      },
      {
        name: "Gajraj Rao",
        characterName: "Prabhu Ghosh",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Saiwyn Quadras",
        image: placeholderPersonImage,
      },
      {
        name: "Amit Ravindernath Sharma",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Amit Ravindernath Sharma",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "damsel",
    title: "Damsel",
    rating: "6.1",
    platform: "NETFLIX",
    img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A princess discovers her royal marriage is a trap and must survive a deadly dragon.",
    releasedOn: "2024",
    runtime: "1h 50m",
    storyline:
      "Elodie is sacrificed to repay an ancient debt, but she fights back inside a dangerous cave where survival becomes her only goal.",
    tags: ["Fantasy", "Adventure", "Survival", "Dragon"],
    starCast: [
      {
        name: "Millie Bobby Brown",
        characterName: "Elodie",
        image: placeholderPersonImage,
      },
      {
        name: "Ray Winstone",
        characterName: "Lord Bayford",
        image: placeholderPersonImage,
      },
      {
        name: "Robin Wright",
        characterName: "Queen Isabelle",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Dan Mazeau",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Juan Carlos Fresnadillo",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "the-idea-of-you",
    title: "The Idea of You",
    rating: "6.3",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A single mother begins an unexpected romance with a younger global pop star.",
    releasedOn: "2024",
    runtime: "1h 55m",
    storyline:
      "Solène meets Hayes Campbell at a music festival, and their connection grows into a complicated relationship under public attention.",
    tags: ["Romance", "Drama", "Music", "Feel-Good"],
    starCast: [
      {
        name: "Anne Hathaway",
        characterName: "Solène Marchand",
        image: placeholderPersonImage,
      },
      {
        name: "Nicholas Galitzine",
        characterName: "Hayes Campbell",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Michael Showalter",
        image: placeholderPersonImage,
      },
      {
        name: "Jennifer Westfeldt",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Michael Showalter",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "panchayat",
    title: "Panchayat",
    rating: "8.9",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=700&auto=format&fit=crop",
    type: "web-series",
    plot:
      "An engineering graduate becomes secretary of a village panchayat and slowly adjusts to rural life.",
    releasedOn: "2020",
    runtime: "3 seasons",
    storyline:
      "Abhishek Tripathi takes a government job in Phulera and finds warmth, frustration and comedy in everyday village administration.",
    tags: ["Comedy", "Drama", "Slice of Life", "Family"],
    starCast: [
      {
        name: "Jitendra Kumar",
        characterName: "Abhishek Tripathi",
        image: placeholderPersonImage,
      },
      {
        name: "Neena Gupta",
        characterName: "Manju Devi",
        image: placeholderPersonImage,
      },
      {
        name: "Raghubir Yadav",
        characterName: "Brij Bhushan Dubey",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Chandan Kumar",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Deepak Kumar Mishra",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "scam-1992",
    title: "Scam 1992",
    rating: "9.2",
    platform: "SonyLIV",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=700&auto=format&fit=crop",
    type: "web-series",
    plot:
      "A stockbroker rises rapidly in Mumbai's financial world before a massive securities scam unravels.",
    releasedOn: "2020",
    runtime: "1 season",
    storyline:
      "Based on the Harshad Mehta story, the series follows ambition, risk, media investigation and a financial scandal that shook India.",
    tags: ["Crime", "Biographical", "Finance", "Drama"],
    starCast: [
      {
        name: "Pratik Gandhi",
        characterName: "Harshad Mehta",
        image: placeholderPersonImage,
      },
      {
        name: "Shreya Dhanwanthary",
        characterName: "Sucheta Dalal",
        image: placeholderPersonImage,
      },
      {
        name: "Hemant Kher",
        characterName: "Ashwin Mehta",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Sumit Purohit",
        image: placeholderPersonImage,
      },
      {
        name: "Saurav Dey",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Hansal Mehta",
        image: placeholderPersonImage,
      },
      {
        name: "Jai Mehta",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "sacred-games",
    title: "Sacred Games",
    rating: "8.5",
    platform: "NETFLIX",
    img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=700&auto=format&fit=crop",
    type: "web-series",
    plot:
      "A Mumbai police officer receives a warning from a gangster that leads to a dangerous conspiracy.",
    releasedOn: "2018",
    runtime: "2 seasons",
    storyline:
      "Sartaj Singh follows clues left by Ganesh Gaitonde and uncovers links between crime, politics, faith and a looming catastrophe.",
    tags: ["Crime", "Thriller", "Mystery", "Dark"],
    starCast: [
      {
        name: "Saif Ali Khan",
        characterName: "Sartaj Singh",
        image: placeholderPersonImage,
      },
      {
        name: "Nawazuddin Siddiqui",
        characterName: "Ganesh Gaitonde",
        image: placeholderPersonImage,
      },
      {
        name: "Radhika Apte",
        characterName: "Anjali Mathur",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Varun Grover",
        image: placeholderPersonImage,
      },
      {
        name: "Vikram Chandra",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Anurag Kashyap",
        image: placeholderPersonImage,
      },
      {
        name: "Vikramaditya Motwane",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "asur",
    title: "Asur",
    rating: "8.5",
    platform: "JioCinema",
    img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=700&auto=format&fit=crop",
    type: "web-series",
    plot:
      "Forensic experts chase a serial killer who blends mythology with psychological warfare.",
    releasedOn: "2020",
    runtime: "2 seasons",
    storyline:
      "A dark investigation pulls CBI officers into a battle against a killer who believes he is fulfilling a mythological destiny.",
    tags: ["Thriller", "Crime", "Mythology", "Psychological"],
    starCast: [
      {
        name: "Arshad Warsi",
        characterName: "Dhananjay Rajpoot",
        image: placeholderPersonImage,
      },
      {
        name: "Barun Sobti",
        characterName: "Nikhil Nair",
        image: placeholderPersonImage,
      },
      {
        name: "Ridhi Dogra",
        characterName: "Nusrat Saeed",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Gaurav Shukla",
        image: placeholderPersonImage,
      },
      {
        name: "Niren Bhatt",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Oni Sen",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "stranger-things",
    title: "Stranger Things",
    rating: "8.7",
    platform: "NETFLIX",
    img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=700&auto=format&fit=crop",
    type: "tv-show",
    plot:
      "Kids in a small town face secret experiments, supernatural forces and a terrifying alternate dimension.",
    releasedOn: "2016",
    runtime: "4 seasons",
    storyline:
      "After a boy disappears in Hawkins, his friends uncover a girl with powers and a hidden world known as the Upside Down.",
    tags: ["Sci-Fi", "Horror", "Mystery", "Coming-of-Age"],
    starCast: [
      {
        name: "Millie Bobby Brown",
        characterName: "Eleven",
        image: placeholderPersonImage,
      },
      {
        name: "Finn Wolfhard",
        characterName: "Mike Wheeler",
        image: placeholderPersonImage,
      },
      {
        name: "David Harbour",
        characterName: "Jim Hopper",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "The Duffer Brothers",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "The Duffer Brothers",
        image: placeholderPersonImage,
      },
      {
        name: "Shawn Levy",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "the-family-man",
    title: "The Family Man",
    rating: "8.7",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=700&auto=format&fit=crop",
    type: "web-series",
    plot:
      "A middle-class man secretly works as an intelligence officer while trying to protect his family life.",
    releasedOn: "2019",
    runtime: "2 seasons",
    storyline:
      "Srikant Tiwari balances domestic pressure and national security missions as threats grow more personal and dangerous.",
    tags: ["Action", "Thriller", "Spy", "Drama"],
    starCast: [
      {
        name: "Manoj Bajpayee",
        characterName: "Srikant Tiwari",
        image: placeholderPersonImage,
      },
      {
        name: "Priyamani",
        characterName: "Suchitra Tiwari",
        image: placeholderPersonImage,
      },
      {
        name: "Sharib Hashmi",
        characterName: "JK Talpade",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Raj Nidimoru",
        image: placeholderPersonImage,
      },
      {
        name: "Krishna D.K.",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Raj Nidimoru",
        image: placeholderPersonImage,
      },
      {
        name: "Krishna D.K.",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "friends",
    title: "Friends",
    rating: "8.9",
    platform: "NETFLIX",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=700&auto=format&fit=crop",
    type: "tv-show",
    plot:
      "Six friends navigate careers, relationships and adulthood in New York City.",
    releasedOn: "1994",
    runtime: "10 seasons",
    storyline:
      "Rachel, Ross, Monica, Chandler, Joey and Phoebe experience love, heartbreak and everyday comedy while building a chosen family.",
    tags: ["Comedy", "Sitcom", "Friendship", "Feel-Good"],
    starCast: [
      {
        name: "Jennifer Aniston",
        characterName: "Rachel Green",
        image: placeholderPersonImage,
      },
      {
        name: "Courteney Cox",
        characterName: "Monica Geller",
        image: placeholderPersonImage,
      },
      {
        name: "Matthew Perry",
        characterName: "Chandler Bing",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "David Crane",
        image: placeholderPersonImage,
      },
      {
        name: "Marta Kauffman",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Kevin S. Bright",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "breaking-bad",
    title: "Breaking Bad",
    rating: "9.5",
    platform: "NETFLIX",
    img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=700&auto=format&fit=crop",
    type: "tv-show",
    plot:
      "A chemistry teacher turns to manufacturing drugs after a cancer diagnosis.",
    releasedOn: "2008",
    runtime: "5 seasons",
    storyline:
      "Walter White enters the meth trade with former student Jesse Pinkman, slowly transforming from desperate provider into a dangerous criminal.",
    tags: ["Crime", "Drama", "Thriller", "Dark"],
    starCast: [
      {
        name: "Bryan Cranston",
        characterName: "Walter White",
        image: placeholderPersonImage,
      },
      {
        name: "Aaron Paul",
        characterName: "Jesse Pinkman",
        image: placeholderPersonImage,
      },
      {
        name: "Anna Gunn",
        characterName: "Skyler White",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Vince Gilligan",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Vince Gilligan",
        image: placeholderPersonImage,
      },
      {
        name: "Michelle MacLaren",
        image: placeholderPersonImage,
      },
    ],
  },
];

export const topPicks: Content[] = [
  {
    slug: "inception",
    title: "Inception",
    rating: "8.8",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A skilled thief enters dreams to steal secrets and is offered a dangerous chance at redemption.",
    releasedOn: "2010",
    runtime: "2h 28m",
    storyline:
      "Dom Cobb leads a team into layered dreams to plant an idea inside a target's mind while confronting memories that threaten the mission.",
    tags: ["Sci-Fi", "Thriller", "Mind-Bending", "Heist"],
    starCast: [
      {
        name: "Leonardo DiCaprio",
        characterName: "Dom Cobb",
        image: placeholderPersonImage,
      },
      {
        name: "Joseph Gordon-Levitt",
        characterName: "Arthur",
        image: placeholderPersonImage,
      },
      {
        name: "Elliot Page",
        characterName: "Ariadne",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Christopher Nolan",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Christopher Nolan",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "3-idiots",
    title: "3 Idiots",
    rating: "8.4",
    platform: "Disney+ hotstar",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "Three engineering students challenge a rigid education system while chasing friendship and dreams.",
    releasedOn: "2009",
    runtime: "2h 50m",
    storyline:
      "Two friends search for their missing college companion and revisit the lessons he taught them about passion, pressure and success.",
    tags: ["Comedy", "Drama", "Friendship", "College"],
    starCast: [
      {
        name: "Aamir Khan",
        characterName: "Rancho",
        image: placeholderPersonImage,
      },
      {
        name: "R. Madhavan",
        characterName: "Farhan Qureshi",
        image: placeholderPersonImage,
      },
      {
        name: "Sharman Joshi",
        characterName: "Raju Rastogi",
        image: placeholderPersonImage,
      },
      {
        name: "Kareena Kapoor Khan",
        characterName: "Pia Sahastrabuddhe",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Abhijat Joshi",
        image: placeholderPersonImage,
      },
      {
        name: "Rajkumar Hirani",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Rajkumar Hirani",
        image: placeholderPersonImage,
      },
    ],
  },
  {
    slug: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    rating: "9.3",
    platform: "prime video",
    img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=700&auto=format&fit=crop",
    type: "movie",
    plot:
      "A banker convicted of murder builds hope and friendship during decades inside prison.",
    releasedOn: "1994",
    runtime: "2h 22m",
    storyline:
      "Andy Dufresne survives prison life with quiet intelligence and an unbreakable belief in freedom, changing the lives around him.",
    tags: ["Drama", "Prison", "Hope", "Classic"],
    starCast: [
      {
        name: "Tim Robbins",
        characterName: "Andy Dufresne",
        image: placeholderPersonImage,
      },
      {
        name: "Morgan Freeman",
        characterName: "Ellis Boyd 'Red' Redding",
        image: placeholderPersonImage,
      },
    ],
    writers: [
      {
        name: "Frank Darabont",
        image: placeholderPersonImage,
      },
      {
        name: "Stephen King",
        image: placeholderPersonImage,
      },
    ],
    directors: [
      {
        name: "Frank Darabont",
        image: placeholderPersonImage,
      },
    ],
  },
];

export const trending = contentPool.slice(0, 8);
export const newOtt = contentPool.slice(8, 16);

export const moodRows: MoodRow[] = [
  {
    title: "Mind Fresh",
    subtitle: "Light, happy and easy watches",
    icon: Smile,
    accent: "text-yellow-400",
    content: [
      contentPool[7],
      contentPool[11],
      contentPool[12],
      contentPool[18],
      topPicks[1],
      contentPool[5],
    ],
  },
  {
    title: "Dimaag Hila Dene Wali",
    subtitle: "Twists, mystery and mind games",
    icon: Brain,
    accent: "text-pink-400",
    content: [
      topPicks[0],
      contentPool[8],
      contentPool[14],
      contentPool[15],
      contentPool[19],
      contentPool[3],
    ],
  },
  {
    title: "Family ke Saath",
    subtitle: "Safe picks for everyone at home",
    icon: Users,
    accent: "text-green-400",
    content: [
      topPicks[1],
      contentPool[2],
      contentPool[9],
      contentPool[12],
      contentPool[18],
      contentPool[11],
    ],
  },
  {
    title: "Late Night Vibes",
    subtitle: "Dark, intense and gripping picks",
    icon: Moon,
    accent: "text-blue-400",
    content: [
      contentPool[3],
      contentPool[1],
      topPicks[0],
      contentPool[14],
      contentPool[15],
      contentPool[19],
    ],
  },
  {
    title: "Breakup Recovery",
    subtitle: "Feel it, heal it, move on",
    icon: Heart,
    accent: "text-red-400",
    content: [
      contentPool[11],
      topPicks[2],
      contentPool[2],
      topPicks[1],
      contentPool[12],
      contentPool[18],
    ],
  },
  {
    title: "Underrated Gems",
    subtitle: "Hidden picks you should not miss",
    icon: Gem,
    accent: "text-indigo-400",
    content: [
      topPicks[2],
      contentPool[9],
      contentPool[13],
      contentPool[16],
      contentPool[15],
      contentPool[2],
    ],
  },
  {
    title: "Dost aaye hue hain",
    subtitle: "Fun watches for friends night",
    icon: Popcorn,
    accent: "text-orange-300",
    content: [
      contentPool[7],
      contentPool[6],
      contentPool[4],
      contentPool[12],
      topPicks[1],
      contentPool[18],
    ],
  },
  {
    title: "Sunday wali movie",
    subtitle: "Relaxed comfort picks for slow days",
    icon: CloudRain,
    accent: "text-purple-300",
    content: [
      topPicks[1],
      contentPool[11],
      contentPool[2],
      topPicks[2],
      contentPool[12],
      contentPool[9],
    ],
  },
  {
    title: "Dimaag mat lagana",
    subtitle: "Simple, fun and full timepass",
    icon: Laugh,
    accent: "text-cyan-300",
    content: [
      contentPool[7],
      contentPool[6],
      contentPool[4],
      contentPool[5],
      contentPool[11],
      contentPool[18],
    ],
  },
  {
    title: "Bhai ke saath",
    subtitle: "Mass, action and bro-watch energy",
    icon: Swords,
    accent: "text-emerald-300",
    content: [
      contentPool[0],
      contentPool[3],
      contentPool[6],
      contentPool[4],
      contentPool[17],
      contentPool[5],
    ],
  },
  {
    title: "Pura suspense",
    subtitle: "Edge-of-seat thrillers only",
    icon: Zap,
    accent: "text-red-300",
    content: [
      topPicks[0],
      contentPool[8],
      contentPool[1],
      contentPool[3],
      contentPool[14],
      contentPool[15],
    ],
  },
  {
    title: "Cry karna hai",
    subtitle: "Emotional stories that hit hard",
    icon: Theater,
    accent: "text-pink-300",
    content: [
      topPicks[2],
      contentPool[2],
      topPicks[1],
      contentPool[11],
      contentPool[9],
      contentPool[13],
    ],
  },
];
