import React, {Component} from "react";
import axios from 'axios';

class TodoEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount(){
        axios.post('http://localhost:4000/todos/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                todo_description: response.data.todo_description,
                todo_responsible: response.data.todo_responsible,
                todo_priority: response.data.todo_priority,
                todo_completed: response.data.todo_completed
            })
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <p>Welcome to my Edit Controller.</p>
                {
                    axios.post('http://localhost:4000/todos/' + this.props.match.params.id)
                    .then(response => {
                        this.setState({
                            todo_description: response.data.todo_description,
                            todo_responsible: response.data.todo_responsible,
                            todo_priority: response.data.todo_priority,
                            todo_completed: response.data.todo_completed
                        })
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
                }
                {
                    axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, {
                        todo_description: this.state.todo_description,
                        todo_responsible: this.state.todo_responsible,
                        todo_priority: this.state.todo_priority,
                        todo_completed: true
                    })
                }
            </div>
        );
    }
}

export default TodoEdit;