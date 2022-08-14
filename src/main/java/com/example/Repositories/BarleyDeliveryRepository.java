package com.example.Repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.Entities.BarleyDelivery;
import com.example.Entities.WheatDelivery;


@Repository
public interface BarleyDeliveryRepository extends JpaRepository<BarleyDelivery,Long>{
	public List<BarleyDelivery> findAll();
	//public List<BarleyDelivery> findByOrderId(String order);
	public Page<BarleyDelivery> findByOrderId(String id, Pageable pageable);
	
@Query(value = "SELECT supplier FROM barley_delivery where order_id = :orderId group by supplier", nativeQuery = true)
	public List<String>findSupplierByDelivery(@Param("orderId") String orderId);

@Query(value = "Select * from barley_delivery where order_id = :orderId and supplier = :supplier", nativeQuery = true)
	public List<BarleyDelivery> deliveriesFromSupplier(@Param("supplier") String supplier,
													  @Param("orderId") String orderId);

@Query(value = "SELECT order_id FROM barley_delivery GROUP BY order_id", nativeQuery = true)
	public List<BarleyDelivery> getOrders();

}
