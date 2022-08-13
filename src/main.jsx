import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles/global.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* Usamos provider para el uso de redux  */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
)
