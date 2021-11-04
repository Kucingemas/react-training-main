import React from 'react'
import { Provider } from 'react-redux'
import CounterAppRedeux from './CounterApp'
import store from './store'

export default function ReactRedux() {
  return (
    <Provider store = {store}>
      <CounterAppRedeux />
    </Provider>
  )
}
