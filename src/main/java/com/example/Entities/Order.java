package com.example.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ORDERS")
public class Order {
	
	@Id
	private String id;
	
	@Column(name = "stock", nullable = false)
	private String stock;
	
	@Column(name = "principal", nullable = false)
	private String principal;
	
	@Column(name = "amount", nullable = false)
	private int amount;
	
	//CONSTRUCTORS

	public Order(String id, String stock, String principal, int amount) {
		super();
		this.id = id;
		this.stock = stock;
		this.principal = principal;
		this.amount = amount;
	}

	public Order() {
		super();
	}
	
	//GETTERS AND SETERS

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStock() {
		return stock;
	}

	public void setStock(String stock) {
		this.stock = stock;
	}

	public String getPrincipal() {
		return principal;
	}

	public void setPrincipal(String principal) {
		this.principal = principal;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	
	
}