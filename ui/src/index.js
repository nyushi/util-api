import 'material-components-web/dist/material-components-web.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// import Counter from './components/Counter'
import reducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    rootEl
)
