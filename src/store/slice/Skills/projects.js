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
      name: 'To-do List App',
      description: 'An App using React Native, the first that I made, the idea is simple, a to-do app, there are a section to put the completed tasks and another for the pending ones. I\'m using TypeScript, styled components and Redux.',
      src: 'https://i.postimg.cc/Sx5hNbMj/Macbook-Pro-Phone-Todo-App.png',
      link: '',
      github: 'https://github.com/thedraxx/Todo-App-ReactNative'
    },
    {
      id: Math.random(),
      name: 'MyAnimeList Project',
      description: 'A FrontEnd Project simulating an Anime App, I was use of inspiration Crunchyroll for the design and the functionality of this is checking the most popular anime of the moment and save this to watch later, plus when you finish this you can delete that. I\'m using React, Redux, Styled Components, SCSS and the API of MyAnimeList.',
      src: 'https://i.postimg.cc/KjCHydQT/Macbook-Pro-Dark-Background.png',
      link: 'https://thedraxx.github.io/AnimeReact/',
      github: 'https://github.com/thedraxx/AnimeReact'
    }]
  },
  reducers: {}
})

// // Action creators are generated for each case reducer function
// export const { } = projectSlice.actions
