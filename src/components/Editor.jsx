import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editResume } from "../redux";

function Editor() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "PK",
    birthDate: "",
    contactDetails: {
      email: "",
      phone: "",
    },
  });
  const [newEducation, setNewEducation] = useState({
    graduationLevel: "",
    graduationDegree: "",
    collegeName: "",
    passingYear: "",
  });
  const [educationDetails, setEducationDetails] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [workExp, setWorkExp] = useState({
    companyName: "",
    position: "",
  });
  const [workExpList, setWorkExpList] = useState([]);

  const addNewEducation = () => {
    setEducationDetails((prevState) => [...prevState, newEducation]);
    setNewEducation({
      graduationLevel: "",
      graduationDegree: "",
      collegeName: "",
      passingYear: "",
    });
  };

  const handleName = (event) => {
    setPersonalDetails((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const handleBirthDate = (event) => {
    setPersonalDetails((prevState) => {
      return {
        ...prevState,
        birthDate: event.target.value,
      };
    });
  };

  const handleEmail = (event) => {
    setPersonalDetails((prevState) => {
      return {
        ...prevState,
        contactDetails: {
          ...prevState.contactDetails,
          email: event.target.value,
        },
      };
    });
  };

  const handlePhone = (event) => {
    setPersonalDetails((prevState) => {
      return {
        ...prevState,
        contactDetails: {
          ...prevState.contactDetails,
          phone: event.target.value,
        },
      };
    });
  };

  const handleGraduationLevel = (event) => {
    setNewEducation((prevState) => {
      return {
        ...prevState,
        graduationLevel: event.target.value,
      };
    });
  };

  const handleGraduationDegree = (event) => {
    setNewEducation((prevState) => {
      return {
        ...prevState,
        graduationDegree: event.target.value,
      };
    });
  };

  const handleGraduationCollegeName = (event) => {
    setNewEducation((prevState) => {
      return {
        ...prevState,
        collegeName: event.target.value,
      };
    });
  };

  const handleGraduationPassingYear = (event) => {
    setNewEducation((prevState) => {
      return {
        ...prevState,
        passingYear: event.target.value,
      };
    });
  };

  const handleSkill = (event) => {
    setSkill(event.target.value);
  };

  const addSkill = () => {
    setSkillList((prevState) => [...prevState, skill]);
    setSkill("");
  };

  const handleCompanyName = (event) => {
    setWorkExp((prevState) => {
      return {
        ...prevState,
        companyName: event.target.value,
      };
    });
  };
  const handlePosition = (event) => {
    setWorkExp((prevState) => {
      return {
        ...prevState,
        position: event.target.value,
      };
    });
  };

  const addNewWork = () => {
    setWorkExpList((prevState) => [...prevState, workExp]);
    setWorkExp({
      companyName: "",
      position: "",
    });
  };

  const resumeData = useSelector((state) => state.resume.resumeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setPersonalDetails(resumeData.personalDetails);
    setEducationDetails(resumeData.educationDetails);
    setSkillList(resumeData.skills);
    setWorkExpList(resumeData.workExperience);
  }, [resumeData]);

  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>go home</button>
      </div>
      <div>
        <h1>Personal Details</h1>
        <input
          type="text"
          placeholder="name"
          value={personalDetails.name || ""}
          onChange={handleName}
        />
        <br />
        <input
          type="date"
          placeholder="birth date"
          value={personalDetails.birthDate || ""}
          onChange={handleBirthDate}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={personalDetails.contactDetails.email || ""}
          onChange={handleEmail}
        />
        <br />
        <input
          type="text"
          placeholder="phone"
          value={personalDetails.contactDetails.phone || ""}
          onChange={handlePhone}
        />
      </div>
      <br />
      <div>
        <h1>Education Details</h1>
        <div>
          <h3>Graduation Details</h3>
          <input
            type="text"
            value={newEducation.graduationLevel || ""}
            placeholder="graduation level"
            onChange={handleGraduationLevel}
          />
          <br />
          <input
            type="text"
            value={newEducation.graduationDegree || ""}
            placeholder="graduation degree"
            onChange={handleGraduationDegree}
          />
          <br />
          <input
            type="text"
            value={newEducation.collegeName || ""}
            placeholder="college name"
            onChange={handleGraduationCollegeName}
          />
          <br />
          <input
            type="text"
            value={newEducation.passingYear || ""}
            placeholder="passing year"
            onChange={handleGraduationPassingYear}
          />
          <br />
          <button onClick={addNewEducation}>Add</button>
        </div>
        <div>
          {educationDetails &&
            educationDetails.map((item, key) => {
              return <div key={key}>{item.graduationLevel}</div>;
            })}
        </div>
      </div>
      <div>
        <h3>Skills</h3>
        <input value={skill} onChange={handleSkill} type="text"></input>
        <button onClick={addSkill}>Add skill</button>
        <div>
          {skillList &&
            skillList.map((skill, key) => {
              return <div key={key}>{skill}</div>;
            })}
        </div>
      </div>
      <div>
        <h3>Work Experience</h3>
        <input
          type="text"
          value={workExp.companyName || ""}
          onChange={handleCompanyName}
          placeholder="company name"
        />
        <input
          type="text"
          value={workExp.position || ""}
          onChange={handlePosition}
          placeholder="position"
        />
        <button onClick={addNewWork}>Add</button>
        <div>
          {workExpList &&
            workExpList.map((work, key) => {
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
      <div>
        <button
          onClick={() => {
            dispatch(
              editResume({
                personalDetails: personalDetails,
                educationDetails: educationDetails,
                skills: skillList,
                workExperience: workExpList,
              })
            );
            navigate("/preview");
          }}
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default Editor;
