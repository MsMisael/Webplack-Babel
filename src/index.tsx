import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Pages/Landing'



import './index.scss'

ReactDOM.render(
    <App />
    , document.querySelector('#root'))


function App() {

    return <Landing />
}