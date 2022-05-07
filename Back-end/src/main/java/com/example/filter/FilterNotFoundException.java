package com.example.filter;

class FilterNotFoundException extends RuntimeException {

    FilterNotFoundException(Long id) {
        super("Could not find filter" + id);
    }
}