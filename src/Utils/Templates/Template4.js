import { Container, Paper } from "@mui/material";
import React from "react";
import "./Template.css";
import TemplateHeader from "../../Components/Header/TemplateHeader";
import TemplateHeading from "../../Components/Heading/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../../Components/TemplateOneExperience/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../../Components/TemplateEducation/TemplateEducationComponent";
import TemplateKeySkillComponent from "../../Components/TemplateKeySkill/TemplateKeySkillComponent";

const Template2 = (props) => {
  
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  return (
    <Paper
      sx={{
        // height: "700px",
        // width: "600px"
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#ffa9f9"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"#ffa9f9"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"#ffa9f9"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"#ffa9f9"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template2;
