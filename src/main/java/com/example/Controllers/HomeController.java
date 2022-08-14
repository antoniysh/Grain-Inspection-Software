package com.example.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.example.Entities.WheatDelivery;
import com.example.Helper.StatisticBySupplier;
import com.example.Helper.StatisticBySupplierBarley;
import com.example.Helper.StatisticBySupplierSFS;
import com.example.Helper.StatisticBySupplierWheat;
import com.example.Helper.Statistics;
import com.example.Repositories.WheatDeliveryRepository;

@RestController
public class HomeController {
	
	@Autowired
	Statistics stats;
	
	@RequestMapping(path = "/api/statistics/wheat")
	@CrossOrigin
	public List<StatisticBySupplierWheat> getSuppliersStatsWheat(@RequestParam(required=true) String id){
		return stats.getStatisticsWheat(id);
		
	}
	
	
	@RequestMapping(path = "/api/statistics/barley")
	@CrossOrigin
	public List<StatisticBySupplierBarley> getSuppliersStatsBarley(@RequestParam(required=true) String id){
		return stats.getStatisticsBarley(id);
	}
	
	@RequestMapping(path = "/api/statistics/sfs")
	@CrossOrigin
	public List <StatisticBySupplierSFS> getSuppliersStatsSFS(@RequestParam(required=true) String id){
		return stats.getStatisticsSFS(id);
	}
}
