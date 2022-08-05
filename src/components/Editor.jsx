import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editResume } from "../redux";
import { StyledButton } from "./styles/Buttons/Button";
import {
  StyledEditor,
  StyledSection,
  StyledInputText,
  StyledSkillsList,
  StyledItemList,
  ItemCard,
} from "../components/styles/Editor.styles";
import { StyledAddButton } from "./styles/Buttons/AddButton";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";

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
    <StyledEditor>
      <div>
        <StyledButton variant="outline" onClick={() => navigate("/")}>
          <MdArrowBack />
          <div>go home</div>
        </StyledButton>
      </div>
      <StyledSection>
        <div>
          <h1>Personal Details</h1>
          <p>Bit of personal</p>
        </div>
        <div>
          <StyledInputText
            type="text"
            placeholder="name"
            value={personalDetails.name || ""}
            onChange={handleName}
          />
          <br />
          <StyledInputText
            type="date"
            placeholder="birth date"
            value={personalDetails.birthDate || ""}
            onChange={handleBirthDate}
          />
          <br />
          <StyledInputText
            type="email"
            placeholder="email"
            value={personalDetails.contactDetails.email || ""}
            onChange={handleEmail}
          />
          <br />
          <StyledInputText
            type="text"
            placeholder="phone"
            value={personalDetails.contactDetails.phone || ""}
            onChange={handlePhone}
          />
        </div>
      </StyledSection>
      <StyledSection>
        <div>
          <h1>Education Details</h1>
          <p>What did you study ?</p>
        </div>
        <div>
          <StyledInputText
            type="text"
            value={newEducation.graduationLevel || ""}
            placeholder="graduation level"
            onChange={handleGraduationLevel}
          />
          <br />
          <StyledInputText
            type="text"
            value={newEducation.graduationDegree || ""}
            placeholder="graduation degree"
            onChange={handleGraduationDegree}
          />
          <br />
          <StyledInputText
            type="text"
            value={newEducation.collegeName || ""}
            placeholder="college name"
            onChange={handleGraduationCollegeName}
          />
          <br />
          <StyledInputText
            type="text"
            value={newEducation.passingYear || ""}
            placeholder="passing year"
            onChange={handleGraduationPassingYear}
          />
          <br />
          <StyledAddButton onClick={addNewEducation}>Add</StyledAddButton>
          <StyledItemList>
            {educationDetails &&
              educationDetails.map((item, key) => {
                return (
                  <ItemCard key={key}>
                    <div className="header">
                      <div className="header-name">
                        <b>{item.graduationDegree}</b>
                      </div>
                      <MdClose
                        onClick={() => {
                          setEducationDetails(
                            educationDetails.filter(
                              (educationItem, id) => id !== key
                            )
                          );
                        }}
                      />
                    </div>
                    <div className="item-details">
                      {item.collegeName}, {item.passingYear}
                    </div>
                  </ItemCard>
                );
              })}
          </StyledItemList>
        </div>
      </StyledSection>
      <StyledSection>
        <div>
          <h1>Skills</h1>
          <p>Tell us about your skills</p>
        </div>
        <div>
          <StyledInputText
            value={skill}
            onChange={handleSkill}
            type="text"
            placeholder="skill"
          />
          <br />
          <StyledAddButton onClick={addSkill}>Add</StyledAddButton>
          <StyledSkillsList>
            {skillList &&
              skillList.map((skill, key) => {
                return (
                  <div key={key}>
                    {skill}
                    <MdClose
                      onClick={() => {
                        setSkillList(
                          skillList.filter((skillItem, id) => id !== key)
                        );
                      }}
                    />
                  </div>
                );
              })}
          </StyledSkillsList>
        </div>
      </StyledSection>
      <StyledSection>
        <div>
          <h1>Work Experience</h1>
          <p>Add your work experience here</p>
        </div>
        <div>
          <StyledInputText
            type="text"
            value={workExp.companyName || ""}
            onChange={handleCompanyName}
            placeholder="company name"
          />
          <br />
          <StyledInputText
            type="text"
            value={workExp.position || ""}
            onChange={handlePosition}
            placeholder="position"
          />
          <br />
          <StyledAddButton onClick={addNewWork}>Add</StyledAddButton>
          <StyledItemList>
            {workExpList &&
              workExpList.map((work, key) => {
                return (
                  <ItemCard key={key}>
                    <div className="header">
                      <div className="header-name">
                        <span>{work.companyName}</span>
                      </div>
                      <MdClose
                        onClick={() => {
                          setWorkExpList(
                            workExpList.filter((workItem, id) => id !== key)
                          );
                        }}
                      />
                    </div>
                    <div className="item-details">{work.position}</div>
                  </ItemCard>
                );
              })}
          </StyledItemList>
        </div>
      </StyledSection>
      <div>
        <StyledButton
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
          <div>Preview</div>
          <MdArrowForward />
        </StyledButton>
      </div>
    </StyledEditor>
  );
}

export default Editor;
