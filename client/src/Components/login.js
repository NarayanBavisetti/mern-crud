import React, { useEffect, useState } from "react";
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
  logo:{
      background: "#5959f7"
  },
  gap:{
      margin:"8px 0px"
  },
  gap1:{
      margin:"4px 20px",
     
  },
  gap3:{
      margin:"15px 0px"
  },
  gap4:{
      margin:"12px 0px"
  }
});
const Login = () => {
  const [count ,setCount] = useState('')
  const classes = useStyles();

useEffect(() => {
  updateVisitorCount()
},[])

  function updateVisitorCount() {
    fetch("https://api.countapi.xyz/update/narayan/mern-crud/?amount=1")
    .then(res => res.json())
    .then(res => {
      setCount(res.value)
    })
   
  }
  return (
    <div>
      <Grid>
        <Paper elevation={10} className={classes.paper}>
            <Grid align="center" className={classes.gap3}>
          <Avatar className={classes.logo}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
          </Grid>
          <FormGroup >
          <TextField className={classes.gap} id="outlined-basic" label="email" placeholder="enter email" variant="outlined" fullWidth required />
          <TextField className={classes.gap} id="outlined-basic" label="password" placeholder="enter password" type="password" variant="outlined" required />

            <Typography className={classes.gap1}>
              Do not have an account ? <Link to="/signup"> Sign Up</Link>
            </Typography>
            <Button className={classes.gap4} type="submit" variant="contained" color="secondary" fullWidth>Log In</Button>
          </FormGroup>
          <Typography>No of people visited this page {count}</Typography>
        </Paper>
      </Grid>
    </div>
  );
};
export default Login;
