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
          <div>{resumeData.personalDetails.name}</div>
          <div>{resumeData.personalDetails.birthDate}</div>
          <div>{resumeData.personalDetails.contactDetails.email}</div>
          <div>{resumeData.personalDetails.contactDetails.phone}</div>
        </div>
        <div>
          {resumeData.educationDetails.map((item, key) => {
            return <div key={key}>{item.graduationLevel}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Previewer;
