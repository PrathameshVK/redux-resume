import React, { useState } from "react";
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

  const addNewEducation = () => {
    console.log(newEducation);
    setEducationDetails((prevState) => [...prevState, newEducation]);
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

  const resumeData = useSelector((state) => state.resume.resumeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Personal Details</h1>
        <input
          type="text"
          placeholder="name"
          value={personalDetails.name}
          onChange={handleName}
        />
        <br />
        <input
          type="date"
          placeholder="birth date"
          value={personalDetails.birthDate}
          onChange={handleBirthDate}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={personalDetails.contactDetails.email}
          onChange={handleEmail}
        />
        <br />
        <input
          type="text"
          placeholder="phone"
          value={personalDetails.contactDetails.phone}
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
            placeholder="graduation level"
            onChange={handleGraduationLevel}
          />
          <br />
          <input
            type="text"
            placeholder="graduation degree"
            onChange={handleGraduationDegree}
          />
          <br />
          <input
            type="text"
            placeholder="college name"
            onChange={handleGraduationCollegeName}
          />
          <br />
          <input
            type="text"
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
        <button
          onClick={() => {
            dispatch(
              editResume({
                personalDetails: personalDetails,
                educationDetails: educationDetails,
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
