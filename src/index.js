import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'
import * as serviceWorker from './config/serviceWorker'
import './scss/index.scss'

const root = document.getElementById('root')

render(<App />, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
