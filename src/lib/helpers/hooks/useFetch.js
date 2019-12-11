import React, { useState, useEffect } from 'react'
import FetchService from '../../services/http/FetchService'

export const useFetch = (route, options = {}) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    ;(async () => {
      setLoading(!loading)
      FetchService.get(route).fork(setError, setResponse)
    })()
  }, [])

  return { error, loading, response }
}
