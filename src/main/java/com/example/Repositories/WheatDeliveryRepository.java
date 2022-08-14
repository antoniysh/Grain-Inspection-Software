package com.example.Repositories;


import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.core.Ordered;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.Entities.WheatDelivery;


@Repository
public interface WheatDeliveryRepository extends JpaRepository<WheatDelivery,Long>{
	public List<WheatDelivery> findAll();
	/*public List<WheatDelivery> findByOrderId(String order);*/
	public Page<WheatDelivery> findByOrderId(String id, Pageable pageable);
	
@Query(value = "SELECT supplier FROM wheat_delivery where order_id = :orderId group by supplier", nativeQuery = true)
	public List<String>findSupplierByDelivery(@Param("orderId") String orderId);

@Query(value = "Select * from wheat_delivery where order_id = :orderId and supplier = :supplier", nativeQuery = true)
	public List<WheatDelivery> deliveriesFromSupplier(@Param("supplier") String supplier,
													  @Param("orderId") String orderId);

@Query(value = "SELECT order_id FROM wheat_delivery GROUP BY order_id", nativeQuery = true)
	public List<String> getOrders();
}
