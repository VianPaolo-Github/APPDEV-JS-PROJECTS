import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Games from './components/Games/Games'
import Game from './components/Game'
import NavBarMenu from './components/NavBarComponents/NavBarMenu'


//{contexts}
function App() {
 return (
  <>
    <div className = "app-body">
      <NavBarMenu />
      {/**/}
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/about" element ={<About/>}/>
        <Route path = "/games">
          <Route index element = {<Games/>} />
          <Route path = ":gameId" element = {<Game/>} />
        </Route>
          <Route path = "*" element ={<NotFound/>}>
        </Route>
      </Routes>
    </div>
    
  </>
 )
}

export default App
