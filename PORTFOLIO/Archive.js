import {
    Button,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import TechStack from "./TechStack";
  import { ArrowBack } from "@mui/icons-material";
  import { Link } from "react-router-dom";
  import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
  import { app } from "../firebase/config";
  //import app from "../firebase/config";
  
  const Archives = () => {
    const [data, setData] = useState(null);
    const db = getFirestore(app);
  
    useEffect(() => {
      // Get a list of works
      const getWorks = async (db) => {
        try {
          const worksCol = collection(db, "works");
          const workSnapshot = await getDocs(worksCol);
          // console.log(workSnapshot);
          const worksList = workSnapshot.docs.map((doc) => doc.data());
          setData(worksList);
        } catch (error) {
          console.log(error);
        }
      };
      getWorks(db);
    }, [db]);
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5rem",
        }}
      >
        <Button
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "content-width",
            backgroundColor: "none",
            marginY: "30px",
            fontSize: "14px",
            ":hover": {
              backgroundColor: "transparent",
              color: "var(--dark-orange)",
            },
          }}
          component={Link}
          to="/"
          startIcon={<ArrowBack />}
        >
          DomainTechnologies
        </Button>
  
        <Typography
          variant="h3"
          sx={{
            fontSize: "3rem",
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: "-.025em",
          }}
        >
          {" "}
          All Projects
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                  Year
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                  Project
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                  Made at
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                  Built with
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                  Link
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: "#fff" }}>
              {data &&
                data.map((work, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ color: "#fff" }}>{work.year}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{work.title}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{work.madeAt}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      <Grid container mt={1} spacing={1}>
                        {work.techs.map((stack) => (
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
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      {work.projectLink}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  };
  
  export default Archives;
  
