import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdArrowDownward } from "react-icons/md";
import { StyledButton } from "./styles/Buttons/Button";
import { StyledPreview, ResumeSection } from "./styles/Previewer.styles";
import { PDFExport } from "@progress/kendo-react-pdf";

function Previewer() {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  const navigate = useNavigate();
  const resumeData = useSelector((state) => state.resume.resumeData);
  return (
    <StyledPreview>
      <div>
        <StyledButton variant="outline" onClick={() => navigate("/edit")}>
          <MdArrowBack />
          <div>Edit</div>
        </StyledButton>
      </div>
      <div>
        <h1>Preview</h1>
        <PDFExport ref={pdfExportComponent}>
          <ResumeSection>
            <div className="name">
              <div>{resumeData.personalDetails.name}</div>
            </div>
            <div className="contacts">
              <div>{resumeData.personalDetails.contactDetails.email}</div>
              <div>{resumeData.personalDetails.contactDetails.phone}</div>
            </div>
            <div>
              <h2>Objective</h2>
              <div>{resumeData.objective}</div>
            </div>
            <div>
              <h2>Education details</h2>
              <ul>
                {resumeData.educationDetails.map((item, key) => {
                  return (
                    <li>
                      <div key={key}>
                        <div>
                          <b>{item.graduationDegree}</b>
                        </div>
                        <div>{item.collegeName}</div>
                        <div>{item.passingYear}</div>
                      </div>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2>skills</h2>
              <div className="skills-list">
                {resumeData.skills.map((skill, key) => {
                  return <div key={key}>{skill}</div>;
                })}
              </div>
            </div>
            <div>
              <h2>Projects</h2>
              <ul>
                {resumeData.projects.map((project, key) => {
                  return (
                    <li>
                      <div key={key}>
                        <b>{project.name}</b>
                        <br />
                        {project.details}
                      </div>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2>Work Experience</h2>
              <ul>
                {resumeData.workExperience.map((work, key) => {
                  return (
                    <li>
                      <div key={key}>
                        <b>{work.companyName}</b>
                        <br />
                        {work.position}
                      </div>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
          </ResumeSection>
        </PDFExport>
      </div>
      <StyledButton primary={true} onClick={handleExportWithComponent}>
        Download
        <MdArrowDownward />
      </StyledButton>
    </StyledPreview>
  );
}

export default Previewer;
