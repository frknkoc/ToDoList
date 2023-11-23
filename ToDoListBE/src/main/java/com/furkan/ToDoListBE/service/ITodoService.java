package com.furkan.ToDoListBE.service;

import com.furkan.ToDoListBE.model.Todo;

import java.util.List;

public interface ITodoService {
    Todo addTodo(Todo todo);
    List<Todo> getTodos();

    Todo updateTodo(Todo todo, int id);
    Todo getTodoById(int id);
    void deleteTodo(int id);
}
