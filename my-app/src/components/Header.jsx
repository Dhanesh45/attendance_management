import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
      <div>
        <h1>Students Attendance Management System</h1>
      </div>
      <div className='navbar'>
          <ul className='ul'>
              <Link to="/"><li><button>Home</button></li></Link>
              <Link to="/students"><li><button>Students List</button></li></Link>
              <Link to="/attendance"><li><button>Attendance</button></li></Link>
              <Link to="/attendancerecord"><li><button>Attendance Records</button></li></Link>
              <Link to="/about"><li><button>About</button></li></Link>
          </ul>
      </div>
    </header>
  )
}

export default Header