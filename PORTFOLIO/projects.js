import React from "react";
import Project from "./Project";
import { Container, Divider, Grid, Skeleton, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ScreenHeading from "./ScreenHeading/ScreenHeading";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Projects = ({ data }) => {
  console.log("proj", data.length);
  return (
    <Container>
      <ScreenHeading
        title="Services"
        subHeading="Services Courtesy of DomainTechnologies"
      />
      {data.length === 0 &&
        [1, 2, 3, 4].map((i) => (
          <Grid container spacing={3} my={2} key={i}>
            <Grid item xs={12} md={5}>
              <Skeleton
                sx={{ bgcolor: "#fff", marginBottom: "10px" }}
                variant="rectangular"
                width="100%"
                height="100%"
              />
            </Grid>
            <Grid container item xs={12} md={7}>
              <Skeleton
                variant="text"
                width="80%"
                sx={{ fontSize: "1rem", bgcolor: "#fff" }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height="20px"
                sx={{ fontSize: ".875rem", bgcolor: "#fff" }}
              />
            </Grid>
          </Grid>
        ))}
      <AnimatePresence>
        {data &&
          data?.slice(0, 5).map((work, i) => (
            <motion.div
              style={{ marginBottom: "30px" }}
              key={i}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              // transition={{ delay: i * 0.2 }}
            >
              <Project data={work} />{" "}
            </motion.div>
          ))}
      </AnimatePresence>
      <Typography
        sx={{
          marginTop: "50px",
          textDecoration: "none",
          color: "#fff",
          ":hover": {
            color: "var(--dark-orange)",
            cursor: "pointer",
          },
        }}
        variant="h5"
        component={Link}
        to="archive"
      >
        View Project Archive <CallMadeIcon />
      </Typography>
      <Divider />
    </Container>
  );
};

export default Projects;
