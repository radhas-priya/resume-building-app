import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Navbar } from "./";
import resume_svg from "../Utils/Images/resumes_svg.jpg";
import "./Styles/About.css";
import { NavLink } from "react-router-dom";

// the briefing of the website  nothing much only an overview of the resume@builder

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume-Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
           <h1 className="about-heading-1" >Create your free Resumes in just a few minutes</h1>
           <div className="div-btn">
           <NavLink to="/"><button className="Create-btn">Start Creating</button></NavLink>
           </div>
           <hr className="line-break"></hr>
           <h2  className="about-heading-2">in just few minutes</h2>
           <p   className="para-about">Resume builder app can hep you in creating an amazing resumes with showing up your <br></br>
           <b>personal details</b> with adding on your <b>all the data </b> you can change it accordingly and save as many as you want</p>

        
          </Typography>
          <Stack
            sx={{
              width: "30%",
              placeSelf: "center",
            }}
          >
            <img className="img-about"
              src={resume_svg}
              alt="img"
              // style={{width:"20%", height:"10%"}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Share it to others for creating resumes
          </Typography>
          <Box className="icons">
          <Link to="https://www.linkedin.com">
              <LinkedInIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>
            <Link to="https://www.instagram.com">
              <Instagram
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="error"
              />
            </Link>


            <Link to="https://github.com">
              <GitHub
                sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
              />
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
