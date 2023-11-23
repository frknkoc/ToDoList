import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"
import axios from 'axios'

const UpdateTodo = () => {
    let navigate = useNavigate();
    const{id} = useParams();
    const[todo, setTodo] = useState({
        todoTitle : '',
        todoContent : ''
    })

    const{todoTitle, todoContent} = todo;

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async() => {
        const result = await axios.get(`http://localhost:8080/todos/todo/${id}`);
            setTodo(result.data)
    }

    const handleInputChange = (e) => {
        setTodo({
            ...todo, [e.target.name] : e.target.value
        })
    }

    const updateTodo = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/todos/update/${id}`, todo);
        navigate("/")
      }
  return (
    
    <div className='position-relative top-0 start-50 translate-middle-x col-md-8 text-start'>
      <h1 className='mb-3'>Edit ToDo </h1>
      
      <form onSubmit={(e) => updateTodo(e)} className="row">
      <div className="col-md-12 mt-3">
    <label htmlFor="todoTitle" className="form-label">Todo Title</label>
    <input type="text" className="form-control" name="todoTitle" id="todoTitle" required value={todoTitle} onChange={(e) => handleInputChange(e)}/>
  </div>
  <div className="col-md-12 mt-3">
    <label htmlFor="todoContent" className="form-label">ToDo Content</label>
    <textarea className="form-control" placeholder="Leave a to do here" name="todoContent" id="todoContent" required value={todoContent} onChange={(e) => handleInputChange(e)}/>
  </div>
  <div className="col-sm-6 mt-3">
    <button type="submit" className="btn btn-outline-primary ">
        Update
    </button>
 
    <Link to={"/"} className="btn btn-outline-danger mx-3">Cancel</Link>
  </div>
</form>
    </div>
  )
}
export default UpdateTodo;
