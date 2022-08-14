package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.example.Entities")
@EnableJpaRepositories(basePackages = {"com.example.Repositories", "com.example.Entities"})
@ComponentScan("com.example.Controllers")
@ComponentScan("com.example.Helper")
public class CssApplication {

	public static void main(String[] args) {
		SpringApplication.run(CssApplication.class, args);
	}

}
