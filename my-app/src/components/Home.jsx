import React from 'react'
import '../css/Home.css'
import Button from './Button'
const Home = () => {
    
  return (
    <div className='div1'>
        <header>
            <h1 className='h1'>Students Attendance Management System</h1>
        </header>
        <section>
            <p className='p1'>Welcome to the Students Attendance Management System. This system is designed to help teachers to manage the attendance of students in their classes. You can add students, add classes, and mark attendance of students in the classes. You can also view the attendance of students in the classes.</p>
        </section>
        <section>
          <Button name="Student List"/>
          <Button name="Attendance"/>
          <Button name="Attendance Records"/>
          <Button name="About"/>
        </section>
    </div>
  )
}

export default Home