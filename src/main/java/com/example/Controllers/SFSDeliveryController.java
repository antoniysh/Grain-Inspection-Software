package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entities.SFSDelivery;
import com.example.Entities.WheatDelivery;
import com.example.Repositories.SFSDeliveryRepository;
import org.springframework.data.domain.*;
@RestController
@RequestMapping(path = "/api/sfs")
public class SFSDeliveryController {
	
	@Autowired
	SFSDeliveryRepository sFSDeliveryRepository;
	
	@GetMapping
	@CrossOrigin
	public Page<SFSDelivery> getDeliveries(@RequestParam(required = true) String id,
											@RequestParam(defaultValue = "0") int page){
		Pageable paging = PageRequest.of(page, 20, Sort.by(Sort.Direction.DESC, "id"));
		
		return sFSDeliveryRepository.findByOrderId(id, paging);
	}

	
	@PostMapping
	@CrossOrigin
	public void receiveDelivery(@RequestBody SFSDelivery sfsDelivery) {
		sfsDelivery.setArrived(java.sql.Date.valueOf(java.time.LocalDate.now()));
		sFSDeliveryRepository.save(sfsDelivery);
	}
}
