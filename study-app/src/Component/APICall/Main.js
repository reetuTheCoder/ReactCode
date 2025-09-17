import React from 'react'
import { ApiCallUsingFetch } from './ApiCallUsingFetch'
import { ApiCallUsingAxios } from './ApiCallUsingAxios'

export const Main = () => {
  return (
    <div>
        <h2>Api Call Using Fetch</h2>
        <ApiCallUsingFetch/>
        <br/>
        <br/>
        <h2>Api Call Using Axios</h2>
        <ApiCallUsingAxios/>
    </div>
  )
}
