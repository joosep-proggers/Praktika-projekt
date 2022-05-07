package com.example.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {
    
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
    
    @Bean
    CommandLineRunner initDatabase(FilterRepository repository) {
        return args -> {
            log.info("Preloading " + repository.save(new Filter("Filter 1", ">2006-07-21, endswith ea, <20")));
            log.info("Preloading " + repository.save(new Filter("Filter 2", "has item")));
        };
    }
}
