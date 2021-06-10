import React, { useState } from "react";
import {
  Avatar,
  Button,
  FormGroup,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles({
  paper: {
    height: "60vh",
    width: 350,
    padding: 20,
    margin: "40px auto",
  },
  logo: {
    background: "#5959f7",
  },
  gap: {
    margin: "8px 0px",
  },
  gap1: {
    margin: "4px 20px",
  },
  gap3: {
    margin: "15px 0px",
  },
  gap4: {
    margin: "12px 0px",
  },
});
const SignUp = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  }
  return (
    <div>
      <Grid>
        <Paper elevation={10} className={classes.paper}>
          <Grid align="center" className={classes.gap3}>
            <Avatar className={classes.logo}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <FormGroup>
            <TextField
              onChange={(e) => setName(e.target.value)}
              className={classes.gap}
              id="outlined-basic"
              label="Name"
              placeholder="Enter name"
              variant="outlined"
              required
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className={classes.gap}
              id="outlined-basic"
              label="email"
              placeholder="Enter email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              className={classes.gap}
              id="outlined-basic"
              label="password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              required
            />

            <Typography className={classes.gap1}>
              Already have an account ? <Link to="/login"> Log In</Link>
            </Typography>
            <Button
              onClick={onSubmit}
              className={classes.gap4}
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Sign Up
            </Button>
          </FormGroup>
        </Paper>
      </Grid>
    </div>
  );
};
export default SignUp;
