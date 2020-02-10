import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from'./components/NavBar'
import ProjectBoard from './components/ProjectBoard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddProjectTask from "./components/projectTask/AddProjectTask"
import {Provider} from 'react-redux'
import store from './store'
import UpdateProjectTask from './components/projectTask/UpdateProjectTask'

class App extends Component {
  render(){
    return (
		<Provider store={store}>	
			<Router>
      			<div className="App">
      				<Navbar />
        			<Route exact path="/"><h1 className="alert alert-warning text-center">Welcome to the project board</h1></Route>
					<Route exact path="/" component={ProjectBoard}></Route>
					<Route exact path="/addProjectTask" component={AddProjectTask}></Route>
					<Route exact path="/updateProjectTask/:pt_id" component={UpdateProjectTask}></Route>
      			</div>
			</Router>
		</Provider>
    );
  }
}

export default App;