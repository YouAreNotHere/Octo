import { useState } from 'react'
import Articles from "./features/Articles.tsx";

import './App.css'

function App() {

  return (
      <>
        <body>
          <header className='header'>
              <h1 className='header-title'>
                  Solutions for people like you
              </h1>
          </header>
        <Articles/>
        </body>
      </>
  )
}

export default App