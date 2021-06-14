import {
    Button,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import { useHistory } from "react-router";
//   import { addUsers } from "./Service/api";
  
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: "5% 0px 0px 25px",
      "& > *": {
        marginTop: 20,
      },
    },
  });
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };
  
  export default function Create() {
    const history = useHistory();
    const [user, setUser] = useState(initialValues);
    const { name, email, phone } = user;
  
    const onSubmit = async (e) => {
      // e.preventDefault();
    //   await addUsers(user);
      history.push("/list");
    };
  
    const handleChange = (e) => {
      // console.log(e.target.value)
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user);
    };
    const classes = useStyles();
    return (
      <FormGroup className={classes.table}>
        <Typography variant="h4">Add Users</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => handleChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl>
          <InputLabel>E-mail</InputLabel>
          <Input onChange={(e) => handleChange(e)} name="email" value={email} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone no.</InputLabel>
          <Input onChange={(e) => handleChange(e)} name="phone" value={phone} />
        </FormControl>
        <Button onClick={() => onSubmit()} variant="contained" color="primary">
          Add User
        </Button>
      </FormGroup>
    );
  }
  