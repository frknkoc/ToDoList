package com.furkan.ToDoListBE.controller;

import com.furkan.ToDoListBE.model.Todo;
import com.furkan.ToDoListBE.service.ITodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/todos")
@RequiredArgsConstructor
public class TodoController {
    private final ITodoService todoService;

    @GetMapping
    public ResponseEntity<List<Todo>> getTodos(){
        return new ResponseEntity<>(todoService.getTodos(), HttpStatus.FOUND);
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo){
        return todoService.addTodo(todo);
    }

    @PutMapping("/update/{id}")
    public Todo updateTodo(@RequestBody Todo todo, @PathVariable int id){
        return todoService.updateTodo(todo, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTodo(@PathVariable int id){
        todoService.deleteTodo(id);
    }

    @GetMapping("/todo/{id}")
    public Todo getTodoById(@PathVariable int id){
        return todoService.getTodoById(id);
    }

}
