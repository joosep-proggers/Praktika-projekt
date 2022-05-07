package com.example.filter;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class FilterNotFoundAdvice {
    
    @ResponseBody
    @ExceptionHandler(FilterNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String filterNotFoundHandler(FilterNotFoundException ex) {
        return ex.getMessage();
    }
}
