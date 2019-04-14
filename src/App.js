import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/todos-list.component";
import TodoEdit from "./components/edit-todo.component";
import TodoCreate from "./components/create-todo.component";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
			
					<nav className="navbar navbar-expand-lg navbar-light bg-light" >
						<a className="navbar-brand" href="http://localhost:3000" >
							<img src={logo} width="30" height="30" alt="Todo Application" />
						</a>
						<Link to="/" className="navbar-brand">MERN Todo-Application</Link>
						
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item"><Link to="/" className="nav-link">Todos</Link></li>
							<li className="navbar-item"><Link to="/create" className="nav-link">Create Todo</Link></li>
						</ul>
						
					</nav>

					<Route path="/" exact component={TodosList}></Route>
					<Route path="/edit/:id" component={TodoEdit} />
					<Route path="/create" component={TodoCreate} />
        </div>
      </Router>
    );
  }
}

export default App;
