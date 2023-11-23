package com.furkan.ToDoListBE.repository;

import com.furkan.ToDoListBE.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

}
