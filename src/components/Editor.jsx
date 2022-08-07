import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editResume } from "../redux";
import { StyledButton } from "./styles/Buttons/Button";
import {
  StyledEditor,
  StyledSection,
  StyledSkillsList,
  StyledItemList,
  ItemCard,
} from "../components/styles/Editor.styles";
import {
  StyledInputText,
  StyledInputTextArea,
} from "../components/styles/Inputs/Input";
import { StyledAddButton } from "./styles/Buttons/AddButton";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";

function Editor() {
  const [personalProfile, setPersonalProfile] = useState("");
  const [personalDetails, setPersonalDetails] = useState({
    name: "PK",
    contactDetails: {
      email: "",
      phone: "",
    },
  });
  const [newEducation, setNewEducation] = useState({
    graduationDegree: "",
    collegeName: "",
    passingYear: "",
  });
  const [educationDetails, setEducationDetails] = useState([]);
  const [skill, setSkill] = useState("");
  const [skillList, setSkillList] = useState([]);
  const [newProject, setNewProject] = useState({
    projectName: "",
    projectDetails: "",
  });
  const [projectsList, setProjectsList] = useState([]);
  const [newCertification, setNewCertification] = useState({
    certificationName: "",
    certificationDetails: "",
    certificationDate: "",
  });
  const [certificationList, setCertificationList] = useState([]);
  const [workExp, setWorkExp] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
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

  const handlePersonalProfile = (event) => {
    setPersonalProfile(event.target.value);
  };

  const handleName = (event) => {
    setPersonalDetails((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
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

  const handleProjectName = (event) => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectName: event.target.value,
      };
    });
  };

  const handleProjectDetails = (event) => {
    setNewProject((prevState) => {
      return {
        ...prevState,
        projectDetails: event.target.value,
      };
    });
  };

  const addNewProject = () => {
    setProjectsList((prevState) => [...prevState, newProject]);
    setNewProject({
      projectName: "",
      projectDetails: "",
    });
  };

  const handleCertificationName = (event) => {
    setNewCertification((prevState) => {
      return {
        ...prevState,
        certificationName: event.target.value,
      };
    });
  };

  const handleCertificationDetails = (event) => {
    setNewCertification((prevState) => {
      return {
        ...prevState,
        certificationDetails: event.target.value,
      };
    });
  };

  const handleCertificationDate = (event) => {
    setNewCertification((prevState) => {
      return {
        ...prevState,
        certificationDate: event.target.value,
      };
    });
  };

  const addNewCertification = () => {
    setCertificationList((prevState) => [...prevState, newCertification]);
    setNewCertification({
      certificationName: "",
      certificationDetails: "",
      certificationDate: "",
    });
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
    setPersonalProfile(resumeData.personalProfile);
    setPersonalDetails(resumeData.personalDetails);
    setEducationDetails(resumeData.educationDetails);
    setSkillList(resumeData.skills);
    setCertificationList(resumeData.certifications);
    setWorkExpList(resumeData.workExperience);
    setProjectsList(resumeData.projects);
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
          <h1>Personal Profile</h1>
          <p>Write something about you. Keep it short and simple !</p>
        </div>
        <div>
          <StyledInputTextArea
            type="text"
            placeholder="objective"
            value={personalProfile || ""}
            onChange={handlePersonalProfile}
          />
        </div>
      </StyledSection>
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
          <p>Add your skills one by one. Show 'em all !</p>
        </div>
        <div>
          <StyledInputText
            value={skill}
            onChange={handleSkill}
            onKeyDown={(e) => {
              e.key === "Enter" && addSkill();
            }}
            type="text"
            placeholder="skill"
          />
          <br />
          <StyledAddButton onClick={addSkill}>Add</StyledAddButton>
          <StyledSkillsList>
            {skillList &&
              skillList.map((skill, key) => {
                return (
                  <div className="skill-tag" key={key}>
                    <div className="skill-name">{skill}</div>
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
          <h1>Projects</h1>
          <p>Tell us what did you build !</p>
        </div>
        <div>
          <StyledInputText
            type="text"
            value={newProject.projectName || ""}
            onChange={handleProjectName}
            placeholder="project name"
          />
          <br />
          <StyledInputText
            type="text"
            value={newProject.projectDetails || ""}
            onChange={handleProjectDetails}
            placeholder="project details"
          />
          <br />
          <StyledAddButton onClick={addNewProject}>Add</StyledAddButton>
          <StyledItemList>
            {projectsList &&
              projectsList.map((project, key) => {
                return (
                  <ItemCard key={key}>
                    <div className="header">
                      <div className="header-name">
                        <span>{project.projectName}</span>
                      </div>
                      <MdClose
                        onClick={() => {
                          setProjectsList(
                            projectsList.filter((project, id) => id !== key)
                          );
                        }}
                      />
                    </div>
                    <div className="item-details">{project.projectDetails}</div>
                  </ItemCard>
                );
              })}
          </StyledItemList>
        </div>
      </StyledSection>
      <StyledSection>
        <div>
          <h1>Certifications & Courses</h1>
          <p>Time to tell about your achievements !</p>
        </div>
        <div>
          <StyledInputText
            type="text"
            value={newCertification.certificationName || ""}
            onChange={handleCertificationName}
            placeholder="certification name"
          />
          <br />
          <StyledInputText
            type="text"
            value={newCertification.certificationDetails || ""}
            onChange={handleCertificationDetails}
            placeholder="certification details"
          />
          <br />
          <StyledInputText
            type="text"
            value={newCertification.certificationDate || ""}
            onChange={handleCertificationDate}
            placeholder="certification date (month, year)"
          />
          <br />
          <StyledAddButton onClick={addNewCertification}>Add</StyledAddButton>
          <StyledItemList>
            {certificationList &&
              certificationList.map((certificate, key) => {
                return (
                  <ItemCard key={key}>
                    <div className="header">
                      <div className="header-name">
                        <span>{certificate.certificationName}</span>
                      </div>
                      <MdClose
                        onClick={() => {
                          setCertificationList(
                            certificationList.filter(
                              (certificate, id) => id !== key
                            )
                          );
                        }}
                      />
                    </div>
                    <div className="item-details">
                      {certificate.certificationDetails},{" "}
                      {certificate.certificationDate}
                    </div>
                  </ItemCard>
                );
              })}
          </StyledItemList>
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
                personalProfile: personalProfile,
                personalDetails: personalDetails,
                educationDetails: educationDetails,
                skills: skillList,
                certifications: certificationList,
                workExperience: workExpList,
                projects: projectsList,
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
