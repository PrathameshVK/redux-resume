import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdArrowDownward } from "react-icons/md";
import { StyledButton } from "./styles/Buttons/Button";
import {
  StyledPreview,
  ResumeSection,
  ResumePage,
  LeftSection,
  RightSection,
} from "./styles/Previewer.styles";
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
        <ResumeSection>
          <PDFExport ref={pdfExportComponent}>
            <ResumePage>
              <div className="name">
                <div>{resumeData.personalDetails.name.toUpperCase()}</div>
              </div>
              <div className="resume-data">
                <LeftSection>
                  <div>
                    <h4>PERSONAL PROFILE</h4>
                    <div className="section-info">
                      {resumeData.personalProfile}
                    </div>
                  </div>
                  <div>
                    <h4>SKILLS</h4>
                    <div className="section-info">
                      {resumeData.skills.join(", ")}
                    </div>
                  </div>
                  <div>
                    <h4>PROJECTS</h4>

                    {resumeData.projects.map((project, key) => {
                      return (
                        <div key={key} className="section-info">
                          <div>
                            <b>{project.name}</b>
                            <br />
                            {project.details}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="contacts">
                    <h4>CONTACT DETAILS</h4>
                    <div className="section-info">
                      {resumeData.personalDetails.contactDetails.email}
                    </div>
                    <div className="section-info">
                      {resumeData.personalDetails.contactDetails.phone}
                    </div>
                  </div>
                </LeftSection>
                <RightSection>
                  <div>
                    <h4>EDUCATION DETAILS</h4>

                    {resumeData.educationDetails.map((item, key) => {
                      return (
                        <div key={key} className="section-info">
                          <div>
                            <div>
                              <b>{item.graduationDegree}</b>
                            </div>
                            <div>{item.collegeName}</div>
                            <div>{item.passingYear}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <h4>WORK EXPERIENCE</h4>

                    {resumeData.workExperience.map((work, key) => {
                      return (
                        <div key={key} className="section-info">
                          <div>
                            <b>{work.companyName}</b>
                            <br />
                            {work.position}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </RightSection>
              </div>
            </ResumePage>
          </PDFExport>
        </ResumeSection>
      </div>
      <StyledButton primary={true} onClick={handleExportWithComponent}>
        Download
        <MdArrowDownward />
      </StyledButton>
    </StyledPreview>
  );
}

export default Previewer;
