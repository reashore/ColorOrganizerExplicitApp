
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

const reactContainer = document.getElementById('react-container')
const render = () => ReactDOM.render(<App store={store}/>, reactContainer)

store.subscribe(render)
render()