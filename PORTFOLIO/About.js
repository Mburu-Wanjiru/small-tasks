import { Box, Typography } from "@mui/material";
import React from "react";
import ScreenHeading from "./ScreenHeading/ScreenHeading";

const About = () => {
  return (
    <Box
      className="fade-in"
      textAlign="justify"
      sx={{
        marginTop: "30px",
      }}
    >
      <ScreenHeading title="About Me" subHeading="Get to know me" />
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        "I am a dedicated software developer with a keen interest in exploring
        emerging technologies such as data science and Artificial Intelligence
        (AI) to address crucial challenges. Originating from Kenya, my curiosity
        to unravel the universe's mysteries through technology has always fueled
        my passion. Additionally, my enthusiasm extends to the realm of Computer
        Security. I hold a Bachelor of Computer Science from Kirinyaga
        University in Kenya and have achieved remarkable success in my academic
        and professional pursuits. Along my leadership journey. I'm Currently
        pursuing my Masters degree in Computer Security at AIMS-Senegal as a
        Bending Spoon Scholar and Master Card Scholar. I am driven to create a
        significant impact in both AI and Cyber Security fields, aiming to
        Inspire future generations to reach for the stars through the power of
        education.
      </Typography>
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        As an ALUMNI of The Young Professional Mentorship Program (YPMP), My
        commitment to personal and professional growth is evident. My Software
        Engineering, Android Development, and Virtual Assistance certifications
        further underscore my commitment to staying at the forefront of
        technology trends. I’m shaping a promising career and contributing
        positively to the tech industry and society through my dedication and
        passion for STEM education.
      </Typography>

      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        I look forward to embracing new challenges and creating remarkable
        digital experiences with each project."
      </Typography>
    </Box>
  );
};

export default About;
