package com.furkan.ToDoListBE.service;

import com.furkan.ToDoListBE.exception.TodoNotFoundException;
import com.furkan.ToDoListBE.model.Todo;
import com.furkan.ToDoListBE.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService implements ITodoService{
    private final TodoRepository todoRepository;

    @Override
    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Todo addTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo updateTodo(Todo todo, int id) {
        return todoRepository.findById(id).map(td -> {
            td.setTodoTitle(todo.getTodoTitle());
            td.setTodoContent(todo.getTodoContent());
            return todoRepository.save(td);
        }).orElseThrow(() -> new TodoNotFoundException("Sorry, this todo could not be found with this id : " + id ));
    }

    @Override
    public Todo getTodoById(int id) {
        return todoRepository.findById(id).orElseThrow(
                () -> new TodoNotFoundException("Sorry, this todo could not be found")
        );
    }

    @Override
    public void deleteTodo(int id) {
        if (!todoRepository.existsById(id)){
            throw new TodoNotFoundException("Sorry, this todo could not be found");
        }
        todoRepository.deleteById(id);
    }
}
