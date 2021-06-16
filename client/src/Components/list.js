import {
    Button,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { deleteUserData, getUsers } from "../Services/api";
  
  const useStyles = makeStyles({
    table: {
      width: "90%",
      margin: "50px 0 0 50px",
      border: "3px solid black",
    },
    theme: {
      "& > *": {
        background: "#000000",
        color: "white",
        fontSize: 15,
      },
    },
  });
  export default function List() {
    const classes = useStyles();
    const [user, setUser] = useState([]);
    useEffect(() => {
      allUsers();
    }, []);
    const allUsers = async () => {
      const response = await getUsers();
      setUser(response.data);
    };
    async function deleteUser(id) {
      await deleteUserData(id);
      allUsers();
    }
  
    return (
      <div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.theme}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Phone No.</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user &&
              user.map((item) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell>{item._id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/edit/${item._id}`}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteUser(item._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    );
  }
  