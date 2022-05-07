package com.example.filter;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
class FilterController {
    
    private final FilterRepository repository;

    FilterController(FilterRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/filters")
    List<Filter> all() {
        return repository.findAll();
    }

    @PostMapping("/filters")
    Filter newFilter(@RequestBody Filter newFilter) {
        return repository.save(newFilter);
    }

    // Single item

    @GetMapping("filters/{id}")
    Filter one(@PathVariable Long id) {
        return repository.findById(id)
        .orElseThrow(() -> new FilterNotFoundException(id));
    }

    @DeleteMapping("/filters/{id}")
    void deleteFilter(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
