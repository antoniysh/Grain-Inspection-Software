package com.example.Controllers;
import org.springframework.data.domain.*;
import java.sql.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entities.WheatDelivery;
import com.example.Repositories.WheatDeliveryRepository;

@RestController
@RequestMapping(path = "/api/wheat")
public class WheatDeliveryController {
	
	@Autowired
	WheatDeliveryRepository wheatDeliveryRepository;
	
	@GetMapping
	@CrossOrigin
	public Page<WheatDelivery> getDeliveries(@RequestParam(required = true) String id,
											@RequestParam(defaultValue = "0")int page){
		Pageable paging = PageRequest.of(page, 20, Sort.by(Sort.Direction.DESC,"id"));
		return wheatDeliveryRepository.findByOrderId(id, paging);
	}
	
	
	@PostMapping
	@CrossOrigin
	public void receiveDelivery(@RequestBody WheatDelivery wheatDelivery) {
		wheatDelivery.setArrived(java.sql.Date.valueOf(java.time.LocalDate.now()));
		wheatDeliveryRepository.save(wheatDelivery);
	}
	
	@PutMapping
	@CrossOrigin
	public void updateDelivery(@RequestBody WheatDelivery wheatDelivery) {
		wheatDelivery.setArrived(java.sql.Date.valueOf(java.time.LocalDate.now()));
		System.out.println(java.sql.Date.valueOf(java.time.LocalDate.now()));
		wheatDeliveryRepository.save(wheatDelivery);
	}
	
	@DeleteMapping
	@CrossOrigin
	public void deleteDelivery(@RequestParam(required = true) Long id) {
		wheatDeliveryRepository.deleteById(id);
		
	}
	

}
