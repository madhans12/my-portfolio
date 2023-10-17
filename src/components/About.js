import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="abt-container-1">
        <div className="bio">
          <h1>BIO</h1>
          <h2>Name: Madhan S</h2>
          <h2>DOB: 30-sep-1998</h2>
          <h2>Father's Name:R Shanmuganathan</h2>
          <h2>Sex:Male</h2>
          <h2>Nationality:Indian</h2>
        </div>
        <div className="contact">
          <h1>CONTACT:</h1>
          <h2>Mobile:8637481656</h2>
          <h2>Mail:madhans707@gmail.com</h2>
          <address>
            <h2>Permanent Address:</h2>14/55,Athi Kadu,Rameswaram,Ramnad
            Dist.,623526.
            <h2>Resident Address:</h2>Maheswarai
            nagar,Peelamadu,Coimbatore,641004.
          </address>
        </div>
      </div>
      <h1>EDUCATIONAL QUALIFICATION :</h1>
      <table>
        <tr>
          <th>Institution</th>
          <th>Course</th>
          <th>Year of Passing</th>
          <th>Marks(%)</th>
        </tr>
        <tr>
          <td> R.M.K. ENGINEERING COLLEGE</td>
          <td>BE-ECE</td>
          <td>2021</td>
          <td>67%</td>
        </tr>
        <tr>
          <td>NATIONAL MATRIC HR SEC SCHOOL</td>
          <td>SSLC</td>
          <td>2014</td>
          <td>92%</td>
        </tr>
        <tr>
          <td>NATIONAL MATRIC HR SEC SCHOOL</td>
          <td>HSC</td>
          <td>2016</td>
          <td>83%</td>
        </tr>
      </table>
    </div>
  );
};

export default About;
