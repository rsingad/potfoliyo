import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header';
import Home from './components/home';
import Contect from './components/contect';
import About from './components/about';
import MainPage from './components/mainpage';
import Skill from './components/skill/Skill';
import Project from './components/project/project';
import Dashboard from './components/dashbord';
// import Chat from './components/chat/chat';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skill/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path='/chat' element={<Chat/>}/> */}
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
