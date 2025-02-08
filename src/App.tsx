import Articles from "./features/articles/Articles.tsx";
import Advertisement from "./features/advertisement/Advertisement.tsx";
import Slider from "./features/slider/Slider.tsx";

import './App.scss'

function App() {

  return (
      <>
        <body>
          <header className='header'>
              <h1 className='header-title'>
                  Solutions for people like you
              </h1>
          </header>
        <Articles order={"first"}/>
        <Advertisement/>
        <Articles order={"second"}/>
        <Slider/>
        </body>
      </>
  )
}

export default App