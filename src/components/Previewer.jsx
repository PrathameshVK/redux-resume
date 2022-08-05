import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Previewer() {
  const navigate = useNavigate();
  const resumeData = useSelector((state) => state.resume.resumeData);
  return (
    <div>
      <div>
        <button onClick={() => navigate("/edit")}>go back</button>
      </div>
      <div>
        <h1>Previewer</h1>
        <div>
          <h4>Personal details</h4>
          <div>{resumeData.personalDetails.name}</div>
          <div>{resumeData.personalDetails.birthDate}</div>
          <div>{resumeData.personalDetails.contactDetails.email}</div>
          <div>{resumeData.personalDetails.contactDetails.phone}</div>
        </div>
        <div>
          <h4>Education details</h4>
          {resumeData.educationDetails.map((item, key) => {
            return <div key={key}>{item.graduationLevel}</div>;
          })}
        </div>
        <div>
          <h4>skills</h4>
          {resumeData.skills.map((skill, key) => {
            return <div key={key}>{skill}</div>;
          })}
        </div>
        <div>
          <h4>Work Experience</h4>
          {resumeData.workExperience.map((work, key) => {
            return (
              <div key={key}>
                <b>{work.companyName}</b>
                <br />
                {work.position}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Previewer;
