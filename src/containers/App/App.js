import React, { Suspense } from 'react'
import useFetch from 'fetch-suspense'

const Posts = () => {
  const response = useFetch(`${process.env.REACT_APP_API_ROOT_URL}/posts`)
  return `${response}`
}
function App() {
  return (
    <Suspense fallback="loading...">
      <Posts />
    </Suspense>
  )
}

export default App
