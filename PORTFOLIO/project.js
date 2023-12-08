import React, { useEffect, useState } from "react";
import TechStack from "./TechStack";
import { Grid, Skeleton, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";

const Project = ({ data }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const image = new Image();
    image.onload = handleImageLoad;
    image.src = data?.images[0] || "https://your-default-image-url.com";
  }, [data]);

  return (
    //PUSH
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1 }}>
      <Grid
        sx={{
          padding: "10px",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "lightslategrey",
            borderRadius: "15px",
          },
        }}
        onClick={() => window.open(data.projectLink, "_blank")}
        container
        spacing={3}
        my={2}
      >
        <Grid item xs={12} md={4}>
          {loading ? (
            <Skeleton
              sx={{ bgcolor: "#fff" }}
              variant="rectangular"
              width="100%"
              height="100%"
            />
          ) : (
            <motion.img
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              width="100%"
              style={{ display: loading ? "none" : "block" }} // Show the image once it's loaded
              src={
                data?.images[0] ||
                "https://media.licdn.com/dms/image/C4E12AQG2pj4JkZG0Yw/article-cover_image-shrink_600_2000/0/1520115601955?e=2147483647&v=beta&t=15dJ3ErnJfshcaCF1pn0x_PZO4-UeIeYayT1JR_1HY8"
              }
              alt="Project"
            />
          )}
        </Grid>
        <Grid container item xs={12} md={8}>
          <Typography sx={{ fontWeight: 600 }} variant="h6" component="h4">
            {data.title} <CallMadeIcon />
          </Typography>
          <Typography>{data?.description}</Typography>
          <Grid container mt={1} spacing={1}>
            {data?.techs.map((stack) => (
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                item
                key={stack}
              >
                <TechStack tech={stack} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Project;
