import React from 'react'
import '../css/StudentList.css'
const StudentList = (props) => {
    const students = props.students;
  return (
    <div className='container'>
        <h1 className='h2'>Students List of IT Department</h1>
        <table className='table1'>
            <thead>
                <th>S.NO</th>
                <th>REGISTER NUMBER</th>
                <th>NAME</th>
            </thead>
            <tbody>
                {
                    students.map((student)=>{
                        return(
                            <tr>
                                <td>{student.sno}</td>
                                <td>{student.regno}</td>
                                <td>{student.name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default StudentList