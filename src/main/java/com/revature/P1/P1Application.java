package com.revature.P1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.revature.models") //DB entities
@ComponentScan("com.revature") //beans
@EnableJpaRepositories("com.revature.daos")
public class P1Application {

	public static void main(String[] args) {
		SpringApplication.run(P1Application.class, args);
	}

}
