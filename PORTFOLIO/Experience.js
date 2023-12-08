import { Grid, Typography } from "@mui/material";
import React from "react";
import TechStack from "./TechStack";

const Experience = ({ data }) => {
  return (
    <Grid
      sx={{
        padding: "10px",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "lightslategrey",
          borderRadius: "15px",
        },
      }}
      container
      spacing={2}
      my={3}
    >
      <Grid item sm={3}>
        <Typography>
          {data.yearFrom} - {data.yearTo}
        </Typography>
      </Grid>
      <Grid item sm={9}>
        <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
          {`${data.title} . ${data.organization}`}
        </Typography>
        <Typography>{data.description}</Typography>
        <Grid container mt={1} spacing={1}>
          {data.techs.map((stack) => (
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              item
              key={stack}
              // xs={3}
            >
              <TechStack tech={stack} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
