import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"
import { Routes , Route } from 'react-router-dom'
import StudentList from './components/StudentList'
import AttendanceRecord from './components/AttendanceRecord'
import Attendance from './components/Attendance'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<StudentList />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/attendancerecord' element={<AttendanceRecord />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      
    </>
  )
}

export default App