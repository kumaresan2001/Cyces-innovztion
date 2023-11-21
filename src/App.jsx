import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Attraction } from "./Attraction";
import { useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { AddAttraction } from "./AddAttraction";
import { AttractionDetails } from "./AttractionDetails";

import { EditAttraction } from "./EditAttraction";

// import { BasicForm } from "./BasicForm";

function App() {
  const Navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={bgstyles} elevation={4}>
        <div className="app">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => Navigate("/*")}>
                TRAVEL APP
              </Button>

              <Button
                color="inherit"
                variant="containd"
                startIcon={
                  mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                sx={{ marginLeft: "auto" }}
              >
                {mode === "dark" ? "light" : "dark"}mode
              </Button>
              <Button
                color="inherit"
                onClick={() => Navigate("/attractionlist/add")}
              >
                +ADD
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/attractionlist/add" element={<AddAttraction />} />
            <Route
              path="/films"
              element={<Navigate replace to="/attractionlist" />}
            />
            <Route path="/attractionlist/:id" element={<AttractionDetails />} />
            <Route
              path="/attractionlist/edit/:id"
              element={<EditAttraction />}
            />
            <Route path="/*" element={<Attraction />} />
            {/* <Route path="/basic-form" element={<BasicForm />} /> */}
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
