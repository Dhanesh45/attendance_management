import React from "react";
import "../css/About.css";
function About() {
  return (
    <div className="about">
      <p>
        This project is developed for the **IT Department - A Section** to **streamline student attendance tracking**. 
        It provides an efficient way for teachers to mark and manage student attendance digitally.
      </p>
      <h3 style={{marginTop:"30px"}}> Key Features:</h3>
      <div className="features">
        <ul>
          <li>📋 View student list and mark attendance</li>
          <li>✅ Real-time attendance tracking</li>
          <li>📊 View attendance records history</li>
          <li>📜 Simple and user-friendly interface</li>
        </ul>
      </div>
      <p style={{marginTop:"30px"}}>
        This system ensures **accuracy, efficiency, and ease of access**, eliminating the need for manual registers.
      </p>
      <p style={{marginTop:"30px"}}><strong>Developed for IT Department - A Section</strong></p>
    </div>
  );
}
export default About;
