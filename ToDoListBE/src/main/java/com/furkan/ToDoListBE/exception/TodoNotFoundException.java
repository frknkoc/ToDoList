package com.furkan.ToDoListBE.exception;

public class TodoNotFoundException extends RuntimeException{
    public TodoNotFoundException(String message){
        super(message);
    }
}
