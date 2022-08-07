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
  SectionItem,
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
                        <SectionItem key={key}>
                          <div>
                            <b>{project.projectName}</b>
                            <br />
                            <span className="section-info">
                              {project.projectDetails}
                            </span>
                          </div>
                        </SectionItem>
                      );
                    })}
                  </div>
                  <div className="contacts">
                    <h4>CONTACT DETAILS</h4>
                    <SectionItem>
                      Email :{" "}
                      <span className="section-info">
                        {resumeData.personalDetails.contactDetails.email}
                      </span>
                    </SectionItem>
                    <SectionItem>
                      Phone :{" "}
                      <span className="section-info">
                        {resumeData.personalDetails.contactDetails.phone}
                      </span>
                    </SectionItem>
                  </div>
                </LeftSection>
                <RightSection>
                  <div>
                    <h4>ACADEMICS</h4>

                    {resumeData.educationDetails.map((item, key) => {
                      return (
                        <SectionItem key={key}>
                          <div>
                            <div>
                              <b>{item.graduationDegree}</b>
                            </div>
                            <div className="section-info">
                              {item.collegeName}
                            </div>
                            <div className="section-info">
                              {item.passingYear}
                            </div>
                          </div>
                        </SectionItem>
                      );
                    })}
                  </div>
                  <div>
                    <h4>COURSES AND CERTIFICATIONS</h4>

                    {resumeData.certifications.map((certificate, key) => {
                      return (
                        <SectionItem key={key}>
                          <div>
                            <b>{certificate.certificationName}</b>
                            <br />
                            <span className="section-info">
                              {certificate.certificationDetails},{" "}
                              {certificate.certificationDate}
                            </span>
                          </div>
                        </SectionItem>
                      );
                    })}
                  </div>
                  <div>
                    <h4>WORK EXPERIENCE</h4>

                    {resumeData.workExperience.map((work, key) => {
                      return (
                        <SectionItem key={key}>
                          <div>
                            <b>{work.companyName}</b>
                            <br />
                            <span className="section-info">
                              {work.position}
                            </span>
                          </div>
                        </SectionItem>
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
