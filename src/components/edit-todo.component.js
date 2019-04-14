import React, {Component} from "react";
import axios from 'axios';
import TodosList from "./todos-list.component";

class TodoEdit extends Component {
    state = {
        todo_description: "default",
        todo_responsible: "default",
        todo_priority: "default",
        todo_completed: false
    }
 
    componentDidMount(){
        let self = this;
        try{
            axios.get("http://localhost:4000/todos/"+this.props.match.params.id).then(function(response){
                console.log(response.data.todo_description);
                self.setState({
                    todo_description: response.data.todo_description,
                    todo_completed: response.data.todo_completed,
                    todo_priority: response.data.todo_priority,
                    todo_responsible: response.data.todo_responsible
                });
            });
            
        } catch(e){
            console.log("Error on component mount. " + e);
        }
    }

    render(){
        return(
            <div>
                <h3>Update Todo</h3>
                <h6>Todo description: </h6>
                <p>{ this.state.todo_description }</p>
                <h6>Responsible:</h6>
                <p>{ this.state.todo_responsible }</p>
                <h6>Priority:</h6>
                <p>{ this.state.todo_priority }</p>
                <h6>Status:</h6>
                <p>{ this.state.todo_completed === true ? "Done" : "InComplete" }</p>
            </div>
        );
    }
}
export default TodoEdit;