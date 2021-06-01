import React from 'react'
import {Button, FormGroup, Input, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function login() {
    return (
        <div>
            welcome to login page
            <FormGroup>
            <Input placeholder="email" required>email</Input>
            <Input placeholder="password" required>Password</Input>
            <Typography >Do not have an account ?
            <Link to="/signup">Sign Up</Link>
             </Typography>
            <Button variant="secondary">Log In</Button>
            </FormGroup>
        </div>
    )
}
