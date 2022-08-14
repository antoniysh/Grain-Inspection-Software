package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.Entities.Order;

import com.example.Repositories.OrderRepository;

@RestController
@RequestMapping(path = "/api/orders")
public class OrderController {
	
	@Autowired
	OrderRepository orderRepository;
	
	@GetMapping
	@CrossOrigin
	public List <Order> getOrders(){
		return orderRepository.findAll();
	}


}
