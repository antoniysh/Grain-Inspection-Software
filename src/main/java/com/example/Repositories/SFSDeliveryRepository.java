package com.example.Repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.Entities.SFSDelivery;
import com.example.Entities.WheatDelivery;


@Repository
public interface SFSDeliveryRepository extends JpaRepository<SFSDelivery,Long>{
	public List<SFSDelivery> findAll();
	//public List<SFSDelivery> findByOrderId(String order);
	public Page<SFSDelivery> findByOrderId(String id, Pageable pageable);
	
@Query(value = "SELECT supplier FROM sfsdelivery where order_id = :orderId group by supplier", nativeQuery = true)
	public List<String>findSupplierByDelivery(@Param("orderId") String orderId);

@Query(value = "Select * from sfsdelivery where order_id = :orderId and supplier = :supplier", nativeQuery = true)
	public List<SFSDelivery> deliveriesFromSupplier(@Param("supplier") String supplier,
													  @Param("orderId") String orderId);

@Query(value = "SELECT order_id FROM sfsdelivery GROUP BY order_id", nativeQuery = true)
	public List<String> getOrders();

}
