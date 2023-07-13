package com.upao.preventlife;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class ApiPreventLifeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiPreventLifeApplication.class, args);
    }

}
