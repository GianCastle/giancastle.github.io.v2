import React, { useState, useEffect } from 'react'
import { useFetch } from '../../lib/helpers/hooks/useFetch'

function App() {
  const response = useFetch('/')

  console.log(response)

  return <div className="App"></div>
}

export default App
