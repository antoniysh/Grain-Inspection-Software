package com.example.Helper;

import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;
import java.util.stream.DoubleStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.Repositories.BarleyDeliveryRepository;
import com.example.Repositories.SFSDeliveryRepository;
import com.example.Repositories.WheatDeliveryRepository;
import com.example.Entities.BarleyDelivery;
import com.example.Entities.SFSDelivery;
import com.example.Entities.WheatDelivery;
import com.example.Helper.StatisticBySupplier;
@Component
public class Statistics {
	
	@Autowired
	WheatDeliveryRepository wheatDeliveryRepository;
	
	@Autowired
	SFSDeliveryRepository sfsDeliveryRepository;
	
	@Autowired
	BarleyDeliveryRepository barleyDeliveryRepository;
	
	public List<StatisticBySupplierWheat> getStatisticsWheat(String orderId){
		
		List<String> suppliers = wheatDeliveryRepository.findSupplierByDelivery(orderId);
		List<StatisticBySupplierWheat> s = new ArrayList<StatisticBySupplierWheat>();
		
		suppliers.forEach((supplier)->{
			List<WheatDelivery> deliveries = wheatDeliveryRepository.deliveriesFromSupplier(supplier, orderId);
			double moisture;
			double foreignMatter;
			double tw ;
			double protein;
			double gluten;
			double amount;
			int count = deliveries.size();
			amount = deliveries.stream().mapToDouble((delivery) -> delivery.getWaybillQuantity()).sum();
			moisture = deliveries.stream().mapToDouble((delivery) -> delivery.getMoisture()).average().getAsDouble();
			tw = deliveries.stream().mapToDouble((delivery) -> delivery.getTW()).average().getAsDouble();
			foreignMatter = deliveries.stream().mapToDouble((delivery) -> delivery.getForeignMatter()).average().getAsDouble();
			protein = deliveries.stream().mapToDouble((delivery) -> delivery.getProtein()).average().getAsDouble();
			gluten = deliveries.stream().mapToDouble((delivery) -> delivery.getGluten()).average().getAsDouble();
			s.add(new StatisticBySupplierWheat(supplier, moisture, foreignMatter, tw, protein, gluten, count, amount));
		});
		
		return s;
	}
	
	
	public List<StatisticBySupplierBarley>getStatisticsBarley(String orderId){
		
		List<String> suppliers = barleyDeliveryRepository.findSupplierByDelivery(orderId);
		List<StatisticBySupplierBarley> sts = new ArrayList<StatisticBySupplierBarley>();
		
		suppliers.forEach((supplier) ->{
			List<BarleyDelivery> deliveries = barleyDeliveryRepository.deliveriesFromSupplier(supplier, orderId);
			double moisture = deliveries.stream().mapToDouble((delivery) -> delivery.getMoisture()).average().getAsDouble();
			double foreignMatter = deliveries.stream().mapToDouble((delivery) -> delivery.getForeignMatter()).average().getAsDouble();
			double tw = deliveries.stream().mapToDouble((delivery) -> delivery.getTW()).average().getAsDouble();
			int count = deliveries.size();
			double amount = deliveries.stream().mapToDouble((delivery)-> delivery.getWaybillQuantity()).sum();
			
			sts.add(new StatisticBySupplierBarley(supplier, moisture, foreignMatter, tw, count, amount));
		});
		
		return sts;
	}
	
	
	
	public List<StatisticBySupplierSFS> getStatisticsSFS(String orderId){
		List<String> suppliers = sfsDeliveryRepository.findSupplierByDelivery(orderId);
		List<StatisticBySupplierSFS> sts = new ArrayList<StatisticBySupplierSFS>();
		
		suppliers.forEach((supplier) -> {
			List<SFSDelivery> deliveries = sfsDeliveryRepository.deliveriesFromSupplier(supplier, orderId);
			double moisture = deliveries.stream().mapToDouble((delivery) -> delivery.getMoisture()).average().getAsDouble();
			double foreignMatter = deliveries.stream().mapToDouble((delivery) -> delivery.getForeignMatter()).average().getAsDouble();
			double tw = deliveries.stream().mapToDouble((delivery) -> delivery.getTW()).average().getAsDouble();
			double oil = deliveries.stream().mapToDouble((delivery) -> delivery.getOil()).average().getAsDouble();
			int count = deliveries.size();
			double amount = deliveries.stream().mapToDouble((delivery) -> delivery.getWaybillQuantity()).sum();
			sts.add(new StatisticBySupplierSFS(supplier, moisture, foreignMatter, tw, count, amount, oil));
		});
		
		return sts;
	}
}
