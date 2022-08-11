import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [{
      id: Math.random(),
      name: 'Project 1',
      description: 'This is a project',
      src: '',
      link: '',
      github: ''
    },
    {
      id: Math.random(),
      name: 'Project 2',
      description: 'This is a project',
      src: '',
      link: '',
      github: ''
    },
    {
      id: Math.random(),
      name: 'Project 3',
      description: 'This is a project',
      src: '',
      link: '',
      github: ''
    },
    {
      id: Math.random(),
      name: 'Project 4',
      description: 'This is a project',
      src: '',
      link: '',
      github: ''
    }]
  },
  reducers: {}
})

// Action creators are generated for each case reducer function
export const { } = projectSlice.actions
