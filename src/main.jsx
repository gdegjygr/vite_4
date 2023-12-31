import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'

// импорт (создание) хранилища "Store" где будут все данные
// import { legacy_createStore as createStore } from 'redux'
// импорт компонента провайдера
import { Provider } from 'react-redux'

// создаем глобальное состояние
// const defaultState = {
//  name: "",
// }

// ф-ция при помощи которой состояние выше будет меняться
// const reducer = (state = defaultState, action) => {
  // Правило 1: внутри этой ф-ции мы напрямую не можем менять состояния
//   return state
// }

// Сохдаем store - то самое хранилище store. +store принимает только один reducer
// const store = createStore(reducer)


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* передаем по специальному пропсу(store) наш store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
