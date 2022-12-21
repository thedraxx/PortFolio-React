import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [{
      id: Math.random(),
      name: 'Gif Generator',
      description: 'A Frontend React Project, the first that I made, using the GIPHY API to get the GIF that you want, a simple but cool project for practice.',
      src: 'https://i.postimg.cc/7Yb7TSGR/Macbook-Pro-GIF.png',
      link: 'https://thedraxx.github.io/REACT--GeneratorsGif/',
      github: 'https://github.com/thedraxx/REACT--GeneratorsGif'
    },
    {
      id: Math.random(),
      name: 'Wordle Clon',
      description: 'A Frontend project developed with Javascript. I\'ts a recreation of the famous game of Wordle, the function I\'ts similar to the original, so if you know the game, you can play it.',
      src: 'https://i.postimg.cc/Frjx9b3g/Macbook-Pro-Wordle-Background.png',
      link: 'https://wordle-clon.netlify.app/',
      github: 'https://github.com/thedraxx/WordleClon'
    },
    {
      id: Math.random(),
      name: 'MyAnimeList',
      description: 'In This Web-App you can see the next features:Most Popular Animes (Top 10) Upcoming Animes (Top 10) Tops Search Anime by Name View Anime Details, Episodes, Video, pictures, genres, etc. I\'m using React, Styled Components, React Player, axios and the API Jikan.',
      src: 'https://i.postimg.cc/8kZqqs9Y/Macbook-Pro-Dark-Background.png',
      link: 'https://myanimelist-web.netlify.app/',
      github: 'https://github.com/thedraxx/MyAnimeList-Web'
    },
    {
      id: Math.random(),
      name: 'To-do List App',
      description: 'An App using React Native, the first that I made, the idea is simple, a to-do app, there are a section to put the completed tasks and another for the pending ones. I\'m using TypeScript, styled components and Redux.',
      src: 'https://i.postimg.cc/Sx5hNbMj/Macbook-Pro-Phone-Todo-App.png',
      link: 'https://drive.google.com/file/d/14fj7d7JIajadreUDEO1yqgz_1VTXgJwG/view?usp=sharing',
      github: 'https://github.com/thedraxx/Todo-App-ReactNative'
    },
    {
      id: Math.random(),
      name: 'MyAnimeList App',
      description: 'An App using React Native, this application allows you to see a list of anime, going from the most popular, recommended and upcoming, you can enter the one you are interested in, see more details about it, such as the synopsis, rating by user and what kind of genre it belongs to along with a list of similar anime. The application gives you the possibility to store anime in a pending list and at the same time allows you to delete them once you have already watched them.',
      src: 'https://i.postimg.cc/5yc0TY6K/Macbook-Pro-Phone-My-Anime-List-App.gif',
      link: 'https://drive.google.com/file/d/14_laCJm-IykSXbvMns_DlNZJgbl0F0sE/view?usp=sharing',
      github: 'https://github.com/thedraxx/MyAnimeListApp'
    },
    {
      id: Math.random(),
      name: 'CryptoCurrency App',
      description: 'An App using React Native, this application shows the current price of the Crypto Currency in USD, you can add a Crypto, delete and refresh every time to see the value in real time.',
      src: 'https://i.postimg.cc/9MVYPwsX/Crypto-App.png',
      link: 'https://drive.google.com/file/d/1BlCQG21ld5B8HlhYJ-C3w7UPEzDqk0MA/view?usp=sharing',
      github: 'https://github.com/thedraxx/CryptoApp'
    }

    ]
  },
  reducers: {}
})

// // Action creators are generated for each case reducer function
// export const { } = projectSlice.actions
