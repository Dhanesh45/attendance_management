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
  const [attendanceRecords, setAttendanceRecords] = React.useState([])
  const updateList=(list)=>{
      setAttendanceRecords(list)
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<StudentList />} />
        <Route path='/attendance' element={<Attendance updateList={updateList}/>} />
        <Route path='/attendancerecord' element={<AttendanceRecord attendanceRecords={attendanceRecords}/>} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      
    </>
  )
}

export default App