import React from 'react';
import Navbar from "./components/Navbar";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Footer from './components/Footer';
import CourseView from './pages/CourseView';
import {RouteData} from "./interfaces";

const CustomRoute = ({path, condition, redirect, component: Component}: RouteData) => {
	if (condition) {
		return <Redirect exact from = {path} to = {redirect as string}/>
	}
	return (
		<Route exact path = {path} render = {(props) => <Component {...props}/>}/>
	)
}

const App = () => {
	return(
		<Router>
			<Navbar/>
			<section className="main-window-container">
				<Switch>
					<Redirect exact from = "/" to = "/home"/>
					<CustomRoute path = "/home" component = {Home}/>
					<CustomRoute redirect = "/" path = "/course/:id" component = {CourseView}/> 
				</Switch>
			</section>
			<Footer/>
		</Router>
	)
}

export default App;


// Protected route example
// <AdvancedRoute protect = {true} condition = {true} redirect = "/" path = "/course/:id" component = {CourseView}/> 
