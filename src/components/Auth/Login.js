import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
        <Grid container spacing={2}>
          <Grid item xs={7} />
          <Grid item xs={4}>
            <div className="login-card">
              <Container>
                <Card>
                  <CardContent>
                    <div className="title-name">
                      <h1>ALBERTSONS</h1>
                      <p><b>COMPANY</b></p>
                    </div>
                    <div>
                      <TextField label="Email" variant="standard" />
                    </div>
                    <div>
                      <TextField
                        label="Password"
                        type="password"
                        variant="standard"
                      />
                    </div>
                    <br />
                    <div className="login-btn">
                      <Button variant="contained" size="small">
                        Log in with Azure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Container>
            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
    </div>
  );
};

export default Login;
