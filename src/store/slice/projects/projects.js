import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [{
      id: Math.random(),
      name: 'Gif Generator',
      description: 'A fullstack project simulating an e-commerce inspired by Boston Hype. Developed using Next.js and a capable based architecture where users can search and purchase products using MercadoPago as payment processor.',
      src: 'https://i.postimg.cc/7Yb7TSGR/Macbook-Pro-GIF.png',
      link: '',
      github: ''
    },
    {
      id: Math.random(),
      name: 'Wordle Clon',
      description: 'A fullstack project developed with React and Express. Where the user can report his pet as lost by providing his location and see other lost pets near him to report them to their owners. I use different services like algolia, mapbox, cloudinary and jwt.',
      src: 'https://i.postimg.cc/Frjx9b3g/Macbook-Pro-Wordle-Background.png',
      link: '',
      github: ''
    },
    {
      id: Math.random(),
      name: 'To-do List App',
      description: 'A component-oriented webapp based on HTML and JS. Using these components create a \'Rock, paper or scissors\' where users can play online with other people connecting to the same room using Firebase Real Time as a database',
      src: 'https://i.postimg.cc/N0RRjY9f/Macbook-Pro-Dark-Background.png',
      link: '',
      github: ''
    },
    {
      id: Math.random(),
      name: 'MyAnimeList Project',
      description: 'A FrontEnd Project simulating an Anime App, I was use of inspiration Crunchyroll for the design and the functionality of this is checking the most popular anime of the moment and save this to watch later, plus when you finish this you can delete that.',
      src: 'https://i.postimg.cc/KjCHydQT/Macbook-Pro-Dark-Background.png',
      link: '',
      github: ''
    }]
  },
  reducers: {}
})

// Action creators are generated for each case reducer function
export const { } = projectSlice.actions
