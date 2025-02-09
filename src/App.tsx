import Articles from "./features/articles/Articles.tsx";
import Advertisement from "./features/advertisement/Advertisement.tsx";
import Slider from "./features/slider/Slider.tsx";
import Header from "./features/header/Header.tsx";

import './App.scss'

function App() {

  return (
      <>
        <body>
        <Header/>
        <Articles order={"first"}/>
        <Advertisement/>
        <Articles order={"second"}/>
        <Slider/>
        </body>
      </>
  )
}

export default App