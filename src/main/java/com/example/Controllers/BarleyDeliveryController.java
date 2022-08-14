package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entities.BarleyDelivery;
import com.example.Entities.WheatDelivery;
import com.example.Repositories.BarleyDeliveryRepository;

@RestController
@RequestMapping(path = "/api/barley")
public class BarleyDeliveryController {
	
	@Autowired
	BarleyDeliveryRepository barleyDeliveryRepository;
	
	@GetMapping
	@CrossOrigin
	Page<BarleyDelivery> getDeliveries(@RequestParam(required = true) String id,
										@RequestParam(defaultValue = "0") int page){
		Pageable paging = PageRequest.of(page, 20, Sort.by(Sort.Direction.DESC,"id"));
		return barleyDeliveryRepository.findByOrderId(id, paging);
	}
	
	@PostMapping
	@CrossOrigin
	public void receiveDelivery(@RequestBody BarleyDelivery barleyDelivery) {
		barleyDelivery.setArrived(java.sql.Date.valueOf(java.time.LocalDate.now()));
		barleyDeliveryRepository.save(barleyDelivery);
	}

}
