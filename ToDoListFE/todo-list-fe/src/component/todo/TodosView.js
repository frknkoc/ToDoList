import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"

const TodosView = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        const result = await axios.get("http://localhost:8080/todos",
            {
                validateStatus: () => {
                    return true;
                }
            }
        );
        if (result.status === 302) {
            console.log(result.data)
            setTodos(result.data)
        };
    }
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/todos/delete/${id}`);
        loadTodos();
    }
    return (
        <div>
            <table className='table table-bordered table-hover shadow'>

                <thead>
                    <tr className='text-center'>
                        <th className='col-1'>Id</th>
                        <th className="col-8">To Do</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
            </table>
            {todos.map((todo, index) => (
                <div className='border-bottom border-dark-subtle mb-4 mt-4'>
                    <div class="row px-3 py-2" key={todo.id}>

                        <div className='col-1' key={index}>
                            {index + 1}
                        </div>
                        <div className='col-8'>
                            {todo.todoTitle}
                        </div>
                        <div className='col-1'>
                            <Link  to={`/todo-detail/${todo.id}`} className='btn btn-outline-success'>
                                <FaEye />
                            </Link>
                        </div>
                        <div className='col-1'>
                            <Link to={`/update-todo/${todo.id}`} className='btn btn-outline-primary'>
                                <FaEdit />
                            </Link>
                        </div>
                        <div className='col-1'>
                            <button className='btn btn-outline-danger'
                                onClick={() => handleDelete(todo.id)}
                            >
                                <FaTrashAlt />
                            </button>
                        </div>


                    </div>
                </div>
            )
            )
            }

        </div>
    )

}

export default TodosView;
