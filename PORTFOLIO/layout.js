import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import View from "./View";
import Profile from "./Profile";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

const menus = [
  { id: "about", name: "About", height: "50vh", component: About },

  {
    id: "projects",
    name: "Services",
    height: "101vh",
    component: Projects,
  },
  { id: "resume", name: "Resume", height: "101vh", component: Resume },
];

const Layout = (props) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={0.6}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Navbar menus={menus} isActive={isActive} setIsActive={setIsActive} />
      </Grid>
      <Grid item xs={12} md={3.4}>
        <Profile isActive={isActive} setIsActive={setIsActive} menus={menus} />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          paddingX: "30px",
        }}
        flex={1}
      >
        {menus.map((menu) => (
          <View
            setIsActive={setIsActive}
            menuId={menu.id}
            key={menu.id}
            isActive={isActive}
          >
            <Box key={menu.id}>
              <menu.component
                data={
                  menu.id === "projects"
                    ? props.data
                    : menu.id === "resume"
                    ? props.experiences
                    : null
                }
              />
            </Box>
          </View>
        ))}
      </Grid>
    </Grid>
  );
};

export default Layout;
