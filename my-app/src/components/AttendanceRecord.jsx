import React from 'react'

const AttendanceRecord = (props) => {
  const attendanceRecords = props.attendanceRecords;
  return (
    <div>
      <table className='table3'>
        <thead>
          <th>S.NO</th>
          <th>REGISTER NUMBER</th>
          <th>NAME</th>
          <th>PRESENT</th>
        </thead>
        <tbody>
          {
            attendanceRecords.map((student)=>{
              return(
                <tr>
                  <td>{student.sno}</td>
                  <td>{student.regno}</td>
                  <td>{student.name}</td>
                  <td>{student.status==="PRESENT"?"✅":"❌"}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceRecord