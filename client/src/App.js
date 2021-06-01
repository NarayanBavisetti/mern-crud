import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import create from './Components/create'
import edit from './Components/edit'
import list from './Components/list'
import login from './Components/login'
import signup from './Components/signup'

export default function App() {
    return (
       
<Router >
    <Route exact path="/" component={login}/>
    <Route exact path="/signup" component={signup}/>
    <Route exact path="/create" component={create}/>
    <Route exact path="/edit/:id" component={edit}/>
    <Route exact path="/list" component={list}/>
</Router>
    )
}
