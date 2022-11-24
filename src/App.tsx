import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import Home from './components/views/Home/Home'
import Courses from './components/views/Courses/Courses'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to={'/home'} />} />
        <Route path="/courses/:rutStudent" element={<Courses />} />
      </Routes>
    </Router>
  )
}

const About: React.FC = () => {
  return <p>About</p>
}

const Login: React.FC = () => {
  return <p>Login</p>
}

export default App
