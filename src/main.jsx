import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
// импорт компонента провайдера
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* передаем по специальному пропсу(store) наш store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
